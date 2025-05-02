<template>
  <div
    class="flex flex-row-reverse flex-1 gap-x-10"
    @keydown.left="previousImage"
    @keydown.right="nextImage"
    tabindex="0"
    ref="galleryRef"
    aria-label="Image gallery"
    :aria-roledescription="'carousel with ' + images.length + ' slides'"
  >
    <!-- Main image display -->
    <div class="relative overflow-hidden rounded-xl w-[540px] h-full max-h-[600px] aspect-square">
      <TransitionGroup name="slide">
        <div
          v-for="(image, index) in images"
          :key="image.src"
          v-show="currentImageIndex === index"
          class="absolute inset-0 w-full h-full"
          :aria-hidden="currentImageIndex !== index"
        >
          <img
            :src="image.src"
            :alt="image.alt || 'Gallery image ' + (index + 1)"
            class="w-full max-w-[540px] h-full max-h-[600px] object-center"
            draggable="false"
          />
        </div>
      </TransitionGroup>
    </div>

    <!-- Thumbnail navigation (hidden on mobile) -->
    <div class="hidden md:flex flex-col gap-10 ml-4">
      <button
        v-for="(image, index) in images"
        :key="'thumb-' + index"
        class="overflow-hidden rounded-xl aspect-square relative transition-all duration-75 ease-in opacity-60"
        :class="{ 'ring-2 ring-[#707070] opacity-100': currentImageIndex === index }"
        @click="setCurrentImage(index)"
        :aria-label="`View image ${index + 1}`"
        :aria-pressed="currentImageIndex === index"
      >
        <img
          :src="image.src"
          :alt="`Thumbnail ${index + 1}`"
          draggable="false"
          class="w-full max-w-[120px] h-full max-h-[120px] object-cover"
        />
      </button>
    </div>

    <!-- A11y live region for screen readers -->
    <div class="sr-only" aria-live="polite">
      Showing image {{ currentImageIndex + 1 }} of {{ images.length }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  type PropType,
} from "vue";

export default defineComponent({
  name: "ImageGallery",
  props: {
    images: {
      type: Array as PropType<
        {
          src: string;
          alt?: string;
        }[]
      >,
      required: true,
    },
    autoplayInterval: {
      type: Number,
      default: 5000,
    },
    startIndex: {
      type: Number,
      default: 0,
    },
  },
  emits: ["image-change"],
  setup(props, { emit }) {
    const currentImageIndex = ref(props.startIndex || 0);
    const autoplayTimer = ref<number | null>(null);
    const galleryRef = ref<HTMLElement | null>(null);

    // Set focus on the gallery container to enable keyboard navigation
    onMounted(() => {
      if (galleryRef.value) {
        galleryRef.value.focus();
      }
      startAutoplay();
    });

    onBeforeUnmount(() => {
      stopAutoplay();
    });

    // Start autoplay timer
    const startAutoplay = () => {
      stopAutoplay(); // Clear any existing timer
      if (props.autoplayInterval > 0) {
        autoplayTimer.value = window.setInterval(() => {
          nextImage();
        }, props.autoplayInterval);
      }
    };

    // Stop autoplay timer
    const stopAutoplay = () => {
      if (autoplayTimer.value !== null) {
        clearInterval(autoplayTimer.value);
        autoplayTimer.value = null;
      }
    };

    // Navigation functions
    const nextImage = () => {
      currentImageIndex.value =
        (currentImageIndex.value + 1) % props.images.length;
    };

    const previousImage = () => {
      currentImageIndex.value =
        (currentImageIndex.value - 1 + props.images.length) %
        props.images.length;
    };

    const setCurrentImage = (index: number) => {
      currentImageIndex.value = index;
      // Restart autoplay timer when manually changing image
      startAutoplay();
    };

    // Emit event when current image changes
    watch(currentImageIndex, (newIndex) => {
      emit("image-change", newIndex);
    });

    return {
      currentImageIndex,
      galleryRef,
      nextImage,
      previousImage,
      setCurrentImage,
    };
  },
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(5%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}
</style>
