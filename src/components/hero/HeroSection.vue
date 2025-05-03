<template>
  <Carousel
    v-bind="carouselConfig"
    :transition="700"
    snap-align="center"
    slide-effect="fade"
    class="w-full"
  >
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="relative w-full">
        <div class="absolute inset-0 bg-black/10 md:bg-black/10 rounded-2xl z-10"></div>
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="flex items-center justify-center w-full h-[299px] md:h-[646px] bg-[#EFEFEF] rounded-2xl text-3xl font-bold object-cover"
        />
        <div class="absolute bottom-12 md:top-56 left-4 md:left-[39px] z-20">
          <div class="flex flex-col md:gap-4">
            <h3 class="text-xl md:text-[33px] font-medium text-white md:leading-[43px]">
              {{ slide.title }}
            </h3>
            <p class="text-xs md:text-[26px] text-white leading-[35px]">
              {{ slide.price }}
            </p>
            <Button variant="outlineLight">View Product</Button>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import ImageOne from "@/assets/images/carousel/image.webp";
import ImageTwo from "@/assets/images/carousel/image2.png";
import ImageThree from "@/assets/images/carousel/image3.jpg";
import ImageFour from "@/assets/images/carousel/image4.jpg";
import ImageFive from "@/assets/images/carousel/image5.jpg";
import ImageSix from "@/assets/images/carousel/image6.jpg";
import Button from "@/components/ui/button/Button.vue";

interface SlideItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  price: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    image: ImageOne,
    alt: "hero-one",
    title: "Gold big hoops",
    price: "$ 68,00"
  },
  {
    id: 2,
    image: ImageTwo,
    alt: "hero-two",
    title: "Gold big hoops",
    price: "$ 68,00"
  },
  {
    id: 3,
    image: ImageThree,
    alt: "hero-three",
    title: "Gold big hoops",
    price: "$ 68,00"
  },
  {
    id: 4,
    image: ImageFour,
    alt: "hero-four",
    title: "Gold big hoops",
    price: "$ 68,00"
  },
  {
    id: 5,
    image: ImageFive,
    alt: "hero-five",
    title: "Gold big hoops",
    price: "$ 68,00"
  },
  {
    id: 6,
    image: ImageSix,
    alt: "hero-six",
    title: "Gold big hoops",
    price: "$ 68,00"
  }
];

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 5000,
};
</script>
