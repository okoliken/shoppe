<template>
  <section class="w-full">
    <HeroSection />
    <div class="mt-4 lg:mt-16">
      <ProductList :products title="Shop The Latest" link="/shop" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductList from "@/components/product/ProductList.vue";
import HeroSection from "@/components/hero/HeroSection.vue";

import ImageOne from '../assets/images/products/Img01.png'
import ImageTwo from '../assets/images/products/Img02.png'
import ImageThree from '../assets/images/products/Img03.png'
import ImageFour from '../assets/images/products/Img04.png'
import ImageFive from '../assets/images/products/Img05.png'
import ImageSix from '../assets/images/products/Img06.png'

const products = [
  { id: 1, name: "Product 1", price: 99.99, imageUrl: ImageOne },
  { id: 2, name: "Product 2", price: 149.99, imageUrl: ImageTwo },
  { id: 3, name: "Product 3", price: 199.99, imageUrl: ImageThree },
  { id: 4, name: "Product 4", price: 299.99, imageUrl: ImageFour },
  { id: 5, name: "Product 5", price: 399.99, imageUrl: ImageFive },
  { id: 6, name: "Product 6", price: 499.99, imageUrl: ImageSix},
];
</script>
