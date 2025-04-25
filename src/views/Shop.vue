<template>
  <div class="md:mt-24">
    <div>
      <h2 class="text-xl md:text-2xl lg:text-[33px] leading-[43px] font-medium flex">Shop <span class="hidden md:block md:ml-1">The Latest</span></h2>
    </div>

    <div class="flex gap-x-4 md:mt-6">
      <div class="w-full max-w-[262px] hidden md:block"></div>

      <div class="flex-1">
        <ProductList reduce-product-spacing hide-header :products />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductList from "@/components/product/ProductList.vue";

const products = [
  { id: 1, name: "Product 1", price: 99.99, imageUrl: "" },
  { id: 2, name: "Product 2", price: 149.99, imageUrl: "" },
  { id: 3, name: "Product 3", price: 199.99, imageUrl: "" },
  { id: 4, name: "Product 4", price: 299.99, imageUrl: "" },
  { id: 5, name: "Product 5", price: 399.99, imageUrl: "" },
  { id: 6, name: "Product 6", price: 499.99, imageUrl: "" },
];
</script>
