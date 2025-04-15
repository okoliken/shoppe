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
import IconSearch from "../icons/IconSearch.vue";
</script>
