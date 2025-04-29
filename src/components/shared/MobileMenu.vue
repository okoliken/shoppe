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
          <nav class="flex flex-col gap-4">
            <a href="#" class="text-lg py-2 border-b border-gray-100">Home</a>
            <a href="#" class="text-lg py-2 border-b border-gray-100">Shop</a>
            <a href="#" class="text-lg py-2 border-b border-gray-100">About</a>
            <a href="#" class="text-lg py-2 border-b border-gray-100">Contact</a>
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  </Teleport>
</template>

<script lang="ts" setup>
import { motion, AnimatePresence } from 'motion-v'


const props = defineProps<{
  showMobileMenu: boolean
}>()


const emit = defineEmits<{
  (e: 'close'): void
}>()


const closeMenu = () => {
  emit('close')
}
</script>