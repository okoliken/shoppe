<template>
  <Teleport to="body">
    <AnimatePresence>
      <motion.div
        v-if="showMobileMenu"
        :initial="{ x: 300, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :exit="{ x: 300, opacity: 0 }"
        :transition="{ duration: 0.3, ease: 'easeInOut' }"
        class="bg-white h-full min-h-screen w-full fixed z-50 pt-24 bottom-0 right-0 left-0"
      >
        <!-- Mobile menu content here -->
        <div class="p-6">
          
          <!-- Navigation links -->
          <nav class="flex flex-col gap-6">
            <a href="#" class="text-xl py-2">Home</a>
            <a href="#" class="text-xl py-2">Shop</a>
            <a href="#" class="text-xl py-2">About</a>
            <a href="#" class="text-xl py-2">Blog</a>
            <a href="#" class="text-xl py-2">Help</a>
            <a href="#" class="text-xl py-2">Contact</a>
            <a href="#" class="text-xl py-2">Search</a>
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  </Teleport>
</template>

<script lang="ts" setup>
import { motion, AnimatePresence } from 'motion-v'
import { watchEffect } from 'vue';


const props = defineProps<{
  showMobileMenu: boolean
}>()

watchEffect(() => {
  if (props.showMobileMenu) {
   setTimeout(() => {
      document.body.style.overflow = 'hidden'
    }, 300)
  } else {
    document.body.style.overflow = ''
  }
})

</script>