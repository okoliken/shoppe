<template>
  <div class="container mx-auto flex flex-col">
    <div class="mt-4 lg:mt-[96px]">
      <h3
        class="text-left lg:text-center text-lg lg:text-[33px] lg:font-medium"
      >
        Shopping Cart
      </h3>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 mt-4 lg:mt-16">
      <div>
        <div
          v-for="(item, index) in cartItems"
          :key="`${item.id}-${index}`"
          class="flex gap-4 lg:gap-[39px] border-b border-[#D8D8D8] py-[39px] w-full"
        >
          <div class="bg-gray-100 flex-shrink-0 w-[136px] h-[136px]">
            <img
              :src="item.imageUrl"
              alt="Product image"
              class="w-full h-full object-cover rounded"
            />
          </div>

          <div class="flex-1">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xs lg:text-xl text-black lg:mb-3.5">
                  {{ item.name }}
                </h3>
                <p class="text-xs lg:text-base text-[#707070] lg:mb-0.5">
                  {{ item.variant }}
                </p>
                <p class="text-xs lg:text-base text-[#A18A68]">
                  $ {{ item.price.toFixed(2) }}
                </p>
              </div>
              <ItemCounter class="w-[120px] hidden lg:block" />
              <button
                @click="removeItem(index)"
                class="text-gray-600 cursor-pointer"
              >
                <span class="text-xl hidden lg:block"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.18344L12.8166 13M1 12.8166L12.8166 1"
                      stroke="black"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
                <span class="text-xs block lg:hidden"
                  ><svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.09172L6.90828 7M1 6.90828L6.90828 1"
                      stroke="black"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-[39px] lg:flex lg:items-end lg:justify-end">
          <Button
            variant="outlineDark"
            class="w-full lg:w-[168px]"
            as="a"
            href="/shopping-cart"
          >
            UPDATE CART
          </Button>
        </div>

        <div class="lg:flex lg:gap-x-14 mt-16">
          <input
            id="review-name"
            type="text"
            placeholder="Coupon Code"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            required
          />
          <Button class="w-full lg:w-[168px] mt-4"> APPLY COUPON </Button>
        </div>
      </div>

      <div class="mt-14 lg:mt-0 p-4 rounded lg:p-14 bg-[#EFEFEF]">
        <h3 class="text-base lg:text-[26px]">Cart totals</h3>
        <div class="flex items-center justify-between mt-11">
          <p class="text-xs lg:text-base">SUBTOTAL</p>
          <span class="text-xs lg:text-base text-[#707070]">$ 65,00</span>
        </div>
        <div class="flex items-center justify-between mt-6">
          <p class="text-xs lg:text-base">SHIPPING</p>
          <span class="text-xs lg:text-base text-[#707070]"
            >Shipping costs will be calculated <br />
            once you have provided address.</span
          >
        </div>
        <div class="my-10 flex justify-end">
          <ShippingCalculator class="w-[250px]" @update-shipping="() => {}" />
        </div>

        <hr class="my-8 border-t border-[#D8D8D8]" />

        <div class="flex items-center justify-between mt-[42px]">
          <p class="text-xs lg:text-xl font-medium">TOTAL</p>
          <span class="text-xs lg:text-xl font-medium">$ </span>
        </div>

        <Button
          class="w-full mt-[45px] py-4 bg-black text-white hover:bg-gray-800"
        >
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/ui/button/Button.vue";
import ItemCounter from "@/components/ui/number-field/ItemCounter.vue";
import ShippingCalculator from "@/components/cart/ShippingCalculator.vue";
import { useCartStore } from "@/stores/cartStore";

export default defineComponent({
  name: "Cart",
  components: {
    Button,
    ItemCounter,
    ShippingCalculator,
  },
  setup() {
    const cartStore = useCartStore();

    return {
      cartItems: cartStore.cartItems,
      subtotal: cartStore.subtotal,
      totalItemCount: cartStore.totalItemCount,
      removeItem: cartStore.removeItem,
      incrementQuantity: cartStore.incrementQuantity,
      decrementQuantity: cartStore.decrementQuantity,
    };
  },
});
</script>
