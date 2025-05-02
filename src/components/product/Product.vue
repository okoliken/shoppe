<template>
  <RouterLink
    :to="{ name: 'product', params: { id: product.id } }"
    class="flex flex-col gap-1.5 relative cursor-pointer"
  >
    <div
      class="w-full min-h-[136px] lg:h-full bg-[#EFEFEF] rounded-lg relative overflow-hidden group"
    >
      <img
        :src="product.imageUrl"
        :alt="product.name"
        loading="eager"
        decoding="async"
        class="w-full h-full object-center md:object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />

      <!-- Overlay on hover -->
      <div
        class="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"
      ></div>
    </div>

    <div class="flex flex-col gap-1 lg:gap-4 lg:mt-6">
      <h3 class="text-sm md:text-lg lg:text-xl">{{ product.name }}</h3>
      <p class="text-xs text-[#A18A68] md:text-lg lg:text-xl font-medium">
        ${{ product.price }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}>();
</script>
