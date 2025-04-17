<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import ProductList from "@/components/product/ProductList.vue";

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 5000,
};
</script>

<template>
  <section class="w-full">
    <Carousel
      v-bind="carouselConfig"
      :transition="500"
      :mouse-wheel="{ threshold: 20 }"
      snap-align="center"
      slide-effect="fade"
      class="w-full"
    >
      <Slide v-for="slide in 5" :key="slide">
        <div
          class="flex items-center justify-center w-full h-[299px] md:h-[646px] bg-[#EFEFEF] rounded-lg"
        >
          {{ slide }}
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <div class="mt-4">
      <ProductList title="Shop The Latest" link="/" />
    </div>
  </section>
</template>
