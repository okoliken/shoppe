<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import ProductList from "@/components/product/ProductList.vue";
import ImageOne from "../assets/images/carousel/image.webp";
import ImageTwo from "../assets/images/carousel/image2.png";
import Button from "@/components/ui/button/Button.vue";

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
      <Slide>
        <div class="relative w-full">
          <div class="absolute inset-0 bg-black/20 md:bg-black/10 rounded-2xl z-10"></div>
          <img
            class="flex items-center justify-center w-full h-[299px] md:h-[646px] bg-[#EFEFEF] rounded-2xl text-3xl font-bold object-cover"
            :src="ImageOne"
            alt="hero-one"
          />
          <div class="absolute bottom-11 md:top-56 left-2 md:left-[39px] z-20">
            <div class="flex flex-col md:gap-4">
              <h3
                class="text-xl lg:text-[33px] font-medium text-white md:leading-[43px]"
              >
                Gold big hoops
              </h3>
              <p class="text-xs lg:text-[26px] text-white leading-[35px]">
                $ 68,00
              </p>

              <Button class="md:mt-10" variant="outlineLight"
                >View Product</Button
              >
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div class="relative w-full">
          <div class="absolute inset-0 bg-black/20 md:bg-black/10 rounded-2xl z-10"></div>
          <img
            class="flex items-center justify-center w-full h-[299px] md:h-[646px] bg-[#EFEFEF] rounded-2xl text-3xl font-bold object-cover"
            :src="ImageTwo"
            alt="hero-two"
          />
          <div class="absolute bottom-11 md:top-56 left-2 md:left-[39px] z-20">
            <div class="flex flex-col md:gap-4">
              <h3 class="text-xl lg:text-[33px] font-medium text-white md:leading-[43px]">
                Gold big hoops
              </h3>
              <p class="lg:text-[26px] text-white leading-[35px]">$ 68,00</p>

              <Button class="md:mt-10" variant="outlineLight"
                >View Product</Button
              >
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <div class="mt-4 lg:mt-16">
      <ProductList title="Shop The Latest" link="/" />
    </div>
  </section>
</template>
