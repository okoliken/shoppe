<template>
  <header class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <IconLogo />

      <div class="flex items-center gap-x-[17px]">
        <div>
          <IconCart />
        </div>
        <div>
          <IconMenuClosed />
        </div>
      </div>
    </div>
    <div class="relative">
      <IconSearch />
      <input
        class="h-8 w-full !bg-gray-input"
        type="search"
        placeholder="Search"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import IconLogo from "../icons/IconLogo.vue";
import IconCart from "../icons/IconCart.vue";
import IconMenuClosed from "../icons/IconMenuClosed.vue";
import IconSearch from "../icons/IconSearch.vue";
</script>
