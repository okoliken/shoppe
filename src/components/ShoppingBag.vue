<template>
  <Sheet>
    <SheetTrigger as-child>
      <div class="relative">
        <IconCart />
        <span
          v-if="cartItems.length > 0"
          class="absolute -top-2 -right-2 bg-white border border-black text-black text-xs w-4 h-4 flex items-center justify-center rounded-full"
        >
          {{ totalItemCount }}
        </span>
      </div>
    </SheetTrigger>
    <SheetContent
      class="w-full sm:w-[440px] overflow-y-auto z-[999] flex flex-col"
    >
      <SheetHeader class="sm:mt-16 px-6 sm:px-9 flex items-center flex-row">
        <SheetTrigger as-child>
          <svg
            class="block sm:hidden"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.93468 14.463C9.01039 14.5381 9.05298 14.6403 9.05298 14.747C9.05298 14.8536 9.01039 14.9558 8.93468 15.0309L8.08681 15.8788C8.01423 15.9561 7.9129 16 7.80685 16C7.7008 16 7.59947 15.9561 7.52689 15.8788L0.176008 8.52792C0.0634705 8.41552 0.000175199 8.26303 3.50226e-05 8.10398L3.50407e-05 7.89602C0.000175245 7.73696 0.0634706 7.58448 0.176008 7.47208L7.52689 0.121197C7.59947 0.043866 7.7008 -1.18212e-07 7.80685 -1.0894e-07C7.9129 -9.96687e-08 8.01423 0.0438661 8.08681 0.121197L8.93468 0.969068C9.01039 1.04416 9.05298 1.14639 9.05298 1.25303C9.05298 1.35966 9.01039 1.46189 8.93468 1.53698L2.47166 8L8.93468 14.463Z"
              fill="black"
            />
          </svg>
        </SheetTrigger>
        <SheetTitle class="text-base md:text-xl font-normal text-center w-full sm:w-auto"
          >Shopping bag</SheetTitle
        >
      </SheetHeader>
      <SheetDescription
        v-if="cartItems.length > 0"
        class="text-left text-base text-gray-500 mt-2 px-6 sm:px-9"
      >
        {{ totalItemCount }} {{ totalItemCount === 1 ? "item" : "items" }}
      </SheetDescription>

      <div
        v-if="cartItems.length === 0"
        class="flex items-center justify-center flex-col h-full mt-24 gap-6"
      >
        <img
          class="w-28 h-28 transform skew-3"
          src="../assets/images/cart.png"
          alt="empty cart"
        />
        <p class="text-gray-500">No shopping bag items</p>
      </div>

      <div v-else class="flex flex-col h-full">
        <!-- Cart Items -->
        <div class="px-6 sm:px-9 flex-grow overflow-y-auto pb-[200px] sm:pb-0">
          <div
            v-for="(item, index) in cartItems"
            :key="`${item.id}-${index}`"
            class="flex gap-2 py-4 h-full max-h-[200px]"
          >
            <div
              class="bg-gray-100 w-full max-w-[200px] flex-shrink-0 flex-1 h-full"
            >
              <img
                :src="item.imageUrl"
                alt="Product image"
                class="w-full max-w-[200px] h-full rounded"
              />
            </div>

            <div class="flex-1 flex flex-col justify-between">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-sm lg:font-medium text-black">
                    {{ item.name }}
                  </h3>
                  <p class="text-sm text-[#707070]">{{ item.variant }}</p>
                  <p class="text-sm text-[#A18A68]">
                    $ {{ item.price.toFixed(2) }}
                  </p>
                </div>
                <button @click="removeItem(item.id)" class="text-gray-600">
                  <span class="text-xl">×</span>
                </button>
              </div>

              <div class="mt-16">
                <div class="flex items-center">
                  <span class="mr-2 text-xs text-[#707070]">QTY:</span>
                  <div class="flex items-center gap-x-2">
                    <button
                      @click="decrementQuantity(item.id)"
                      class="flex items-center justify-center text-sm text-[#707070]"
                      :disabled="item.quantity <= 1"
                      :class="{
                        'opacity-50 cursor-not-allowed': item.quantity <= 1,
                      }"
                    >
                      −
                    </button>
                    <span class="text-center text-[#707070]">{{
                      item.quantity
                    }}</span>
                    <button
                      @click="incrementQuantity(item.id)"
                      class="flex items-center justify-center text-sm text-[#707070]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Subtotal -->
        <div
          class="fixed sm:relative bottom-0 left-0 right-0 bg-white mt-auto w-full py-6 border-t border-gray-200 px-6 sm:px-9"
        >
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-base font-medium">
              Subtotal ({{ totalItemCount }} items)
            </h3>
            <p class="text-base font-medium">$ {{ subtotal.toFixed(2) }}</p>
          </div>

          <Button
            variant="outlineDark"
            class="w-full"
            as="a"
            href="/shopping-cart"
          >
            VIEW CART
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cartStore";
import IconCart from "@/components/icons/IconCart.vue";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "./ui/button/Button.vue";

const cartStore = useCartStore();
const { cartItems, subtotal, totalItemCount } = storeToRefs(cartStore);
const { incrementQuantity, decrementQuantity, removeItem } = cartStore;
</script>
