<template>
  <div class="flex flex-col gap-4 lg:gap-8">
    <!-- Header -->
    <div v-if="!hideHeader" class="flex items-center justify-between">
      <h3 class="text-base lg:text-[33px] lg:font-medium lg:leading-[43px]">
        {{ title }}
      </h3>
      <router-link
        v-if="link"
        :to="link"
        class="text-sm lg:text-xl text-[#A18A68] hover:text-gray-700 lg:leading-[26px]"
      >
        View All
      </router-link>
    </div>

    <!-- Empty State -->
    <div v-if="products.length === 0" class="flex items-center justify-center py-10">
      <p class="text-gray-500 text-lg">No products available</p>
    </div>

    <!-- Product Grid -->
    <div
      v-else
      :class="
        cn(
          'grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4',
          reduceProductSpacing ? 'lg:gap-x-6 lg:gap-y-[70px]' : 'lg:gap-x-[57px] lg:gap-y-[86px]'
        )
      "
    >
      <Product v-for="product in products" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import Product from "./Product.vue";

defineProps<{
  title?: string;
  link?: string;
  hideHeader?: boolean;
  products: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }[];
  reduceProductSpacing?: boolean;
}>();
</script>
