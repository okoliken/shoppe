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

import ImageOne from "../assets/images/products/Img01.png";
import ImageTwo from "../assets/images/products/Img02.png";
import ImageThree from "../assets/images/products/Img03.png";
import ImageFour from "../assets/images/products/Img04.png";
import ImageFive from "../assets/images/products/Img05.png";
import ImageSix from "../assets/images/products/Img06.png";

const products = [
  {
    id: 1,
    name: "Lira Earrings",
    price: 99.99,
    discountPrice: 79.99,
    imageUrl: ImageOne,
    inStock: true,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 149.99,
    imageUrl: ImageTwo,
    inStock: false,
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 199.99,
    discountPrice: 159.99,
    imageUrl: ImageThree,
    inStock: false,
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 299.99,
    imageUrl: ImageFour,
    inStock: false,
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 399.99,
    discountPrice: 299.99,
    imageUrl: ImageFive,
    inStock: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 499.99,
    imageUrl: ImageSix,
    inStock: false,
  },
];
</script>
