<template>
  <header class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <IconLogo />

      <div class="flex items-center gap-x-12">
        <ul class="hidden md:flex items-center gap-x-16">
          <li>
            <RouterLink class="text-base leading-[16px]" to="/"
              >Shop</RouterLink
            >
          </li>
          <li>
            <RouterLink class="text-base leading-[16px]" to="/"
              >Blog</RouterLink
            >
          </li>
          <li>
            <RouterLink class="text-base leading-[16px]" to="/"
              >Our Story</RouterLink
            >
          </li>
        </ul>

        <div class="flex items-center gap-x-[17px]">
          <div class="flex items-center gap-x-9">
            <IconSearchBig class="hidden md:block" />
            <IconCart />
            <IconUser class="hidden md:block" />
          </div>
          <div class="md:hidden block">
            <IconMenuClosed />
          </div>
        </div>
      </div>
    </div>
    <div class="relative block md:hidden">
      <IconSearch class="absolute left-2.5 top-2.5" />
      <input
        class="h-8 w-full !bg-gray-input rounded pl-[30px] outlin-none appearance-none"
        type="text"
        placeholder="Search"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import IconLogo from "../icons/IconLogo.vue";
import IconCart from "../icons/IconCart.vue";
import IconMenuClosed from "../icons/IconMenuClosed.vue";
import IconUser from "../icons/IconUser.vue";
import IconSearch from "../icons/IconSearch.vue";
import IconSearchBig from "../icons/IconSearchBig.vue";
</script>
