<template>
  <RouterLink
    :to="{ name: 'product', params: { id: product.id } }"
    class="flex flex-col gap-1.5 relative cursor-pointer"
  >
    <div
      class="w-full h-[136px] min-h-[136px] lg:h-[300px] bg-[#EFEFEF] rounded-lg relative overflow-hidden group"
    >
      <img
        :src="product.imageUrl"
        :alt="product.name"
        loading="eager"
        decoding="async"
        class="w-full h-[136px] lg:h-[300px] object-center md:object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        :class="{ 'opacity-60': !product.inStock }"
      />

      <div
        class="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"
      ></div>
    </div>

    <div class="flex flex-col gap-1 lg:gap-4 lg:mt-6">
      <h3 class="text-sm md:text-lg lg:text-xl">{{ product.name }}</h3>
      <div class="flex items-center gap-2">
        <p 
          class="text-xs text-[#A18A68] md:text-lg lg:text-xl font-medium"
          :class="{ 'line-through opacity-70': !product.inStock }"
        >
          ${{ product.price }}
        </p>
        <span v-if="!product.inStock" class="text-xs text-red-500 md:text-sm">Out of stock</span>
      </div>
    </div>

    <!-- Discount Badge -->
    <Badge 
      v-if="product.discountPrice" 
      class="absolute top-1 left-1 md:top-4 md:left-4"
    >
      ${{ product.discountPrice }}
    </Badge>

    <!-- Out of Stock Badge -->
    <Badge 
      v-if="!product.inStock" 
      class="absolute top-1 right-1 md:top-4 md:right-4"
      variant="danger"
    >
      Out of Stock
    </Badge>
  </RouterLink>
</template>

<script setup lang="ts">
import Badge from '../ui/badge/Badge.vue';

const props = defineProps<{
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    discountPrice?: number;
    inStock: boolean;
  };
}>();
</script>