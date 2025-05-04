<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from 'vue'
import AppLayout from "./layouts/AppLayout.vue";
import useScrollToTop from "./composables/useScrollToTop";

export default defineComponent({
  name: "App",
  components: {
    AppLayout,
    RouterView,
  },
  setup() {
    useScrollToTop();

    return {};
  },
});

</script>

<template>
  <AppLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition name="page-transition" appear mode="out-in">
        <Component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>

<style>
/* Base transition for all pages */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}

/* Optional: Add a subtle blur effect during transitions */
.page-transition-enter-from,
.page-transition-leave-to {
  filter: blur(4px);
}

/* Optional: You can add different transitions based on routes 
   by adding classes in your route meta and checking them */
.page-transition-slide-right-enter-from {
  transform: translateX(-40px);
}

.page-transition-slide-right-leave-to {
  transform: translateX(40px);
}

/* Add a subtle background animation during transitions */
@keyframes bg-pulse {
  0% { background-color: rgba(255, 255, 255, 0); }
  50% { background-color: rgba(255, 255, 255, 0.05); }
  100% { background-color: rgba(255, 255, 255, 0); }
}

body.transitioning {
  animation: bg-pulse 0.5s ease-in-out;
}
</style>