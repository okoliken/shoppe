<template>
  <div>
    <div class="grid grid-cols-12 gap-x-[60px] lg:mt-32">
      <ImageGallery
        :images="galleryImages"
        :autoplay-interval="5000"
        :start-index="0"
        class="col-span-7"
        @image-change="() => {}"
      />
      <div class="col-span-5">
       <div class="flex flex-col gap-y-[23px]">
        <h1 class="text-[26px]">Lira Earrings</h1>
        <p class="text-[#A18A68] text-xl">$ 20,00</p>
       </div>
        <div class="mt-16">
          <p class="text-[#707070]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageGallery from "@/components/ui/ImageGallery.vue";
import ImageOne from "../assets/images/products/Img01.png";
import ImageTwo from "../assets/images/products/Img02.png";
import ImageThree from "../assets/images/products/Img03.png";
import ImageFour from "../assets/images/products/Img04.png";

const galleryImages = [
  {
    src: ImageOne,
  },
  {
    src: ImageTwo,
  },
  {
    src: ImageThree,
  },
  {
    src: ImageFour,
  },
];
</script>
