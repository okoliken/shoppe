<template>
  <div class="@container md:pt-8 xl:pt-16 relative">
    <div class="p-4 xl:p-0 @md:mx-auto @md:max-w-[1248px]">
      <Header class="md:mb-6" />
      <main class="mt-4">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";
</script>
