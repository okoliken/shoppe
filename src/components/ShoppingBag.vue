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
    <SheetContent class="w-full sm:w-[440px] overflow-y-auto z-[999] flex flex-col">
      <SheetHeader class="mt-10 sm:mt-16 px-6 sm:px-9">
        <SheetTitle class="text-xl font-normal">Shopping bag</SheetTitle>
        <SheetDescription
          v-if="cartItems.length > 0"
          class="text-left text-base text-gray-500 mt-2"
        >
          {{ totalItemCount }} {{ totalItemCount === 1 ? "item" : "items" }}
        </SheetDescription>
      </SheetHeader>

      <div
        v-if="cartItems.length === 0"
        class="flex items-center justify-center h-full mt-24"
      >
        <p class="text-gray-500">No shopping bag items</p>
      </div>

      <div v-else class="flex flex-col h-full">
        <!-- Cart Items -->
        <div class="px-6 sm:px-9 flex-grow overflow-y-auto pb-[200px] sm:pb-0">
          <div
            v-for="(item, index) in cartItems"
            :key="`${item.id}-${index}`"
            class="flex gap-2 py-4"
          >
            <div class="bg-gray-100 flex-shrink-0 flex-1 h-full">
              <img
                :src="item.imageUrl"
                alt="Product image"
                class="w-full h-full object-contain rounded"
              />
            </div>

            <div class="flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-sm font-medium text-black">
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
        <div class="fixed sm:relative bottom-0 left-0 right-0 bg-white mt-auto w-full py-6 border-t border-gray-200 px-6 sm:px-9">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-base">Subtotal ({{ totalItemCount }} items)</h3>
            <p class="text-base">$ {{ subtotal.toFixed(2) }}</p>
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
