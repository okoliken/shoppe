<template>
  <div>
    <div
      class="flex flex-col lg:flex-row lg:items-center lg:gap-x-[60px] lg:mt-32"
    >
      <ImageGallery
        :images="galleryImages"
        :autoplay-interval="5000"
        :start-index="0"
        @image-change="() => {}"
      />
      <div class="mt-6 lg:mt-0">
        <div class="flex flex-col md:gap-y-[23px]">
          <h1 class="text-lg lg:text-[26px]">Lira Earrings</h1>
          <p class="text-[#A18A68] text-base lg:text-xl">$ 20,00</p>
        </div>
        <div class="mt-6 lg:mt-16">
          <div class="mb-5 md:flex items-center gap-x-6 hidden">
            <star-rating
              :star-size="25"
              :rating="averageRating"
              :read-only="true"
              inactive-color="#EFEFEF"
              active-color="#000000"
              :show-rating="false"
            />
            <label class="text-[#707070]"
              >{{ totalReviews }} customer
              {{ totalReviews === 1 ? "review" : "reviews" }}</label
            >
          </div>
          <p class="text-[#707070] text-xs lg:text-base leading-[20px] lg:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </p>

          <div class="mt-12 flex items-center gap-x-6">
            <ItemCounter class="w-[120px] hidden md:block" />
            <Button variant="outlineDark" class="flex-1" @click="addToCartHandler">
              ADD TO CART
            </Button>
          </div>

          <!-- socials -->
          <div class="mt-20 hidden md:flex items-center gap-x-10">
            <button><IconHeart /></button>
            <div class="h-[19.66389465332033px] border border-[#D8D8D8]"></div>
            <div class="flex items-center gap-x-7">
              <button>
                <IconMail />
              </button>
              <button>
                <IconFacebook />
              </button>
              <button>
                <IconInstagram />
              </button>
              <button>
                <IconTwitter />
              </button>
            </div>
          </div>
          <ul class="hidden md:flex flex-col gap-2 text-base mt-[38px]">
            <li>
              <p>SKU: <span class="text-[#707070] ml-4">12</span></p>
            </li>
            <li>
              <p>
                Categories:
                <span class="text-[#707070] ml-4">Fashion, Style</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-[99px] hidden lg:block">
      <TabComponent :tabs="tabs" defaultActiveTab="description">
        <template #description>
          <p class="pt-9 text-base leading-7 text-[#707070]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendum sed.
          </p>
        </template>
        <template #additional>
          <ul class="flex flex-col gap-4 text-base mt-9">
            <li>
              <p>Weight: <span class="text-[#707070] ml-4">0.3 kg</span></p>
            </li>
            <li>
              <p>
                Dimentions:
                <span class="text-[#707070] ml-4">15 x 10 x 1 cm</span>
              </p>
            </li>
            <li>
              <p>
                Colours:
                <span class="text-[#707070] ml-4">Black, Browns, White</span>
              </p>
            </li>
            <li>
              <p>
                White Material: <span class="text-[#707070] ml-3">Metal</span>
              </p>
            </li>
          </ul>
        </template>
        <template #reviews>
          <Reviews
            :product-id="1"
            product-name="lira earings"
            @review-submitted="handleNewReview"
          />
        </template>
      </TabComponent>
      <div class="mt-24">
        <p class="text-[26px]">Similar Items</p>
        <ProductList
          class="mt-12"
          hide-header
          reduce-product-spacing
          :products="similarProducts"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ImageGallery from "@/components/ui/ImageGallery.vue";
import ImageOne from "../assets/images/products/Img01.png";
import ImageTwo from "../assets/images/products/Img02.png";
import ImageThree from "../assets/images/products/Img03.png";
import ImageFour from "../assets/images/products/Img04.png";
import ImageSix from "../assets/images/products/Img06.png";
import ImageEight from "../assets/images/carousel/image6.jpg";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconMail from "@/components/icons/IconMail.vue";
import StarRating from "vue-star-rating";
import ItemCounter from "@/components/ui/number-field/ItemCounter.vue";
import Button from "@/components/ui/button/Button.vue";
import TabComponent from "@/components/TabComponent.vue";
import ProductList from "@/components/product/ProductList.vue";
import Reviews from "@/components/Reviews.vue";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

const addToCartHandler = (): void => {
  cartStore.addToCart({
    id: 1,
    name: "Lira Earrings",
    price: 20.0,
    imageUrl: galleryImages[0].src,
    quantity: 1,
  });
};

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

// Product reviews data
const productReviews = ref([
  {
    author: "Scarlet Witch",
    date: "6 May, 2020",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
  },
  {
    author: "Scarlet Witch",
    date: "6 May, 2020",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.",
  },
]);

// Computed properties for reviews
const totalReviews = computed(() => productReviews.value.length);
const averageRating = computed(() => {
  if (totalReviews.value === 0) return 0;
  const sum = productReviews.value.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  return sum / totalReviews.value;
});

// Updated tabs with review count
const tabs = computed(() => [
  { id: "description", title: "Description", component: "DescriptionTab" },
  {
    id: "additional",
    title: "Additional information",
    component: "AdditionalTab",
  },
  {
    id: "reviews",
    title: `Reviews(${totalReviews.value})`,
    component: "ReviewsTab",
  },
]);

// Handle new review submission
const handleNewReview = (newReview: {
  author: string;
  email: string;
  rating: number;
  content: string;
  date: string;
}) => {
  productReviews.value.push(newReview);
  // You might want to save this to your backend here
};

const similarProducts = [
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 199.99,
    discountPrice: 159.99,
    imageUrl: ImageThree,
    inStock: false,
  },
  {
    id: 8,
    name: "Gold Big Hoops",
    price: 599.99,
    imageUrl: ImageEight,
    inStock: true,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 499.99,
    imageUrl: ImageSix,
    inStock: true,
  },
];
</script>
