<template>
  <header v-bind="$attrs" class="flex flex-col gap-4 z-[9999] sticky top-0 py-4 lg:py-0 bg-white lg:static">
    <div class="flex items-center justify-between">
      <RouterLink to="/">
        <IconLogo />
      </RouterLink>

      <div class="flex items-center gap-x-12">
        <ul class="hidden md:flex items-center gap-x-16">
          <li v-for="(link, index) in links" :key="index">
            <RouterLink class="text-base leading-[16px]" :to="link.link">{{
              link.title
            }}</RouterLink>
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
            <IconSearchBig class="hidden md:block" />
            <IconCart />
            <IconUser class="hidden md:block" />
          </div>
          <div  class="md:hidden block">
            <IconMenuClosed @click="showMobileMenu = true" v-if="!showMobileMenu" />
            <IconClose @click="showMobileMenu = false" v-else />
          </div>
        </div>
      </div>
    </div>
    <div class="relative block md:hidden">
      <IconSearch class="absolute left-2.5 top-2.5" />
      <input
        class="h-8 w-full !bg-gray-input rounded pl-[30px] outlin-none appearance-none z-10"
        type="text"
        placeholder="Search"
      />
    </div>

      <MobileMenu :showMobileMenu="showMobileMenu" />
  </header>
  <div
    v-if="$route.path !== '/'"
    class="w-full border-[0.5px] border-[#D8D8D8] hidden lg:block mt-[17px]"
  ></div>
</template>

<script setup lang="ts">
import IconLogo from "../icons/IconLogo.vue";
import IconCart from "../icons/IconCart.vue";
import IconMenuClosed from "../icons/IconMenuClosed.vue";
import IconUser from "../icons/IconUser.vue";
import IconSearch from "../icons/IconSearch.vue";
import IconSearchBig from "../icons/IconSearchBig.vue";
import IconClose from "../icons/IconClose.vue";
import MobileMenu from "./MobileMenu.vue";
import { ref } from "vue";

const showMobileMenu = ref(false);

const links = [
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Our Story",
    link: "/our-story",
  },
];
</script>
