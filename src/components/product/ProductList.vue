<template>
  <div>
    <div class="flex items-center justify-between">
      <h3 class="text-base">{{ title }}</h3>
      <router-link
        v-if="link"
        :to="link"
        class="text-sm text-[#A18A68] hover:text-gray-700"
      >
        View All
      </router-link>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <Product v-for="product in products" :product :key="product.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Product from "./Product.vue";
const { title, link } = defineProps<{
  title: string;
  link?: string;
}>();

const products = [
  { id: 1, name: "Product 1", price: 99.99, imageUrl: "" },
  { id: 2, name: "Product 2", price: 149.99, imageUrl: "" },
  { id: 3, name: "Product 3", price: 199.99, imageUrl: "" },
  { id: 4, name: "Product 4", price: 299.99, imageUrl: "" },
  { id: 5, name: "Product 5", price: 399.99, imageUrl: "" },
  { id: 6, name: "Product 6", price: 499.99, imageUrl: "" },
];
</script>
