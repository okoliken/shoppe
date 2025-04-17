<template>
  <div class="flex flex-col gap-1.5">
    <div class="w-full h-[136px] lg:h-[380px] bg-[#EFEFEF] rounded-lg">
      <img src="" alt="">
    </div>
    <div class="flex flex-col gap-1 lg:mt-6">
      <h3 class="text-sm lg:text-xl">{{product.name}}</h3>
      <p class="text-xs text-[#A18A68] lg:text-xl">${{product.price}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { product, onProductClick, onAddToCart, onAddToWishlist } = defineProps<{
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
  onProductClick?: (productId: number) => void;
  onAddToCart?: (productId: number) => void;
  onAddToWishlist?: (productId: number) => void;
}>();
</script>
