<template>
  <div class="@container">
    <div class="p-4 md:p-0 @md:mx-auto @md:max-w-7xl">
      <Header />
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
