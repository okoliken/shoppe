<template>
  <div class="container mx-auto flex flex-col">
    <div class="mt-4 lg:mt-[96px]">
      <h3
        class="text-left lg:text-center text-lg lg:text-[33px] lg:font-medium"
      >
        Shopping Cart
      </h3>
    </div>

    <div class="grid grid-cols-2 mt-16">
      <div>
        <div
          v-for="(item, index) in cartItems"
          :key="`${item.id}-${index}`"
          class="flex gap-[39px] border-b border-[#D8D8D8] py-[39px] w-full"
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
                <h3 class="text-xl text-black mb-3.5">
                  {{ item.name }}
                </h3>
                <p class="text-base text-[#707070] mb-0.5">
                  {{ item.variant }}
                </p>
                <p class="text-base text-[#A18A68]">
                  $ {{ item.price.toFixed(2) }}
                </p>
              </div>
              <ItemCounter class="w-[120px]" />
              <button
                @click="removeItem(index)"
                class="text-gray-600 cursor-pointer"
              >
                <span class="text-xl"
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
              </button>
            </div>
          </div>
        </div>

        <div class="mt-[39px] flex items-end justify-end">
          <Button
            variant="outlineDark"
            class="w-[168px]"
            as="a"
            href="/shopping-cart"
          >
            UPDATE CART
          </Button>
        </div>

        <div class="flex gap-x-14 mt-16">
          <input
            id="review-name"
            type="text"
            placeholder="Coupon Code"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            required
          />
          <Button class="w-[168px]"> APPLY COUPON </Button>
        </div>
      </div>

      <div class="p-14">
        <h3 class="text-[26px]">Cart totals</h3>
        <div class="flex items-center justify-between mt-11">
          <p class="text-base">SUBTOTAL</p>
          <span class="text-base text-[#707070]">$ 65,00</span>
        </div>
        <div class="flex items-center justify-between mt-6">
          <p class="text-base">SHIPPING</p>
          <span class="text-base text-[#707070]"
            >Shipping costs will be calculated <br />
            once you have provided address.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import LiraImage from "../assets/images/products/Img01.png";
import OllieImage from "../assets/images/products/Img02.png";
import KaedeImage from "../assets/images/products/Img03.png";
import Button from "@/components/ui/button/Button.vue";
import ItemCounter from "@/components/ui/number-field/ItemCounter.vue";

export default defineComponent({
  name: "Cart",
  components: {
    Button,
    ItemCounter,
  },
  setup() {
    const cartItems = ref([
      {
        id: 1,
        name: "Lira Earrings",
        variant: "Black / Medium",
        price: 20.0,
        quantity: 1,
        imageUrl: LiraImage,
      },
      {
        id: 2,
        name: "Ollie Earrings",
        variant: "Black / Medium",
        price: 20.0,
        quantity: 3,
        imageUrl: OllieImage,
      },
      {
        id: 3,
        name: "Kaede Hair Pin",
        variant: "Black / Medium",
        price: 20.0,
        quantity: 1,
        imageUrl: KaedeImage,
      },
      {
        id: 2, // Same ID as Ollie Earrings to demonstrate multiple items of same product
        name: "Ollie Earrings",
        variant: "Black / Medium",
        price: 20.0,
        quantity: 1,
        imageUrl: OllieImage,
      },
    ]);

    const subtotal = computed(() => {
      return cartItems.value.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    });

    const totalItemCount = computed(() => {
      return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
    });

    // Methods
    const incrementQuantity = (index: number) => {
      cartItems.value[index].quantity++;
    };

    const decrementQuantity = (index: number) => {
      if (cartItems.value[index].quantity > 1) {
        cartItems.value[index].quantity--;
      }
    };

    const removeItem = (index: number) => {
      cartItems.value.splice(index, 1);
    };
    return {
      cartItems,
      removeItem,
      decrementQuantity,
      incrementQuantity,
      totalItemCount,
      subtotal,
    };
  },
});
</script>
