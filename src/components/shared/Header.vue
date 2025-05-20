<template>
  <div class="relative">
    <header
      v-bind="$attrs"
      :class="
        $route.path !== '/' ? 'md:border-b border-[#D8D8D8] md:pb-[17px]' : ''
      "
      class="flex flex-col gap-4 z-[55] sticky top-0 py-4 bg-white lg:static"
    >
      <div class="flex items-center justify-between">
        <RouterLink
          to="/"
          class="transition-transform duration-300 hover:scale-105"
        >
          <IconLogo />
        </RouterLink>

        <div class="flex items-center gap-x-12">
          <ul class="hidden md:flex md:items-center gap-x-16">
            <li v-for="(link, index) in links" :key="index">
              <RouterLink
                v-slot="{ isExactActive }"
                class="text-base leading-[16px] transition-all duration-300"
                :to="link.link"
              >
                <span
                  class="pb-4.5 border-b-2 border-transparent hover:border-black/30"
                  :class="isExactActive ? '!border-black' : ''"
                >
                  {{ link.title }}
                </span>
              </RouterLink>
            </li>
          </ul>

          <svg
            class="hidden md:block"
            width="1"
            height="17"
            viewBox="0 0 1 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500001"
              y2="17"
              stroke="#707070"
            />
          </svg>

          <div class="flex items-center gap-x-[17px]">
            <div class="flex items-center gap-x-9">
              <button class="hidden md:block cursor-pointer">
                <IconSearchBig />
              </button>
              <button class="cursor-pointer">
                <ShoppingBag />
              </button>
              <button class="hidden md:block cursor-pointer">
                <IconUser />
              </button>
            </div>
            <div class="md:hidden block">
              <button>
                <IconMenuClosed
                  @click="showMobileMenu = true"
                  v-if="!showMobileMenu"
                />
                <IconClose @click="showMobileMenu = false" v-else />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="relative block md:hidden">
        <IconSearch class="absolute left-2.5 top-2.5" />
        <input
          class="h-8 w-full !bg-gray-input rounded pl-[30px] outlin-none appearance-none z-10 focus:ring-2 focus:ring-amber-600 focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <MobileMenu :showMobileMenu="showMobileMenu" />
    </header>
    <motion.div
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :exit="{ opacity: 0, y: -20 }"
      :transition="{ duration: 0.3, ease: 'easeInOut' }"
    >
   
    <AlertBanner
      v-if="showAlert"
      class="transform -translate-y-6"
      @view-cart="() => $router.push('/shopping-cart')"
    />
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import IconLogo from "../icons/IconLogo.vue";
import ShoppingBag from "../ShoppingBag.vue";
import IconMenuClosed from "../icons/IconMenuClosed.vue";
import IconUser from "../icons/IconUser.vue";
import IconSearch from "../icons/IconSearch.vue";
import IconSearchBig from "../icons/IconSearchBig.vue";
import IconClose from "../icons/IconClose.vue";
import MobileMenu from "./MobileMenu.vue";
import AlertBanner from "./AlertBanner.vue";
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { motion } from "motion-v";

const showMobileMenu = ref(false);
const showAlert = ref(false);

const cartStore = useCartStore();

cartStore.$subscribe(() => {
  showAlert.value = true;
  setTimeout(() => (showAlert.value = false), 5000);
});

const links = [
  {
    title: "Shop",
    link: "/shop",
  },
  // {
  //   title: "Blog",
  //   link: "/blog",
  // },
  {
    title: "Our Story",
    link: "/our-story",
  },
];
</script>
