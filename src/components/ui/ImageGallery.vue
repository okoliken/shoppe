<template>
  <div
    class="flex flex-col flex-1 gap-y-4"
    @keydown.left="previousImage"
    @keydown.right="nextImage"
    tabindex="0"
    ref="galleryRef"
    aria-label="Image gallery"
    :aria-roledescription="'carousel with ' + images.length + ' slides'"
  >
    <div class="flex flex-col md:flex-row-reverse md:gap-x-10">
      <!-- Main image display -->
      <div class="w-full lg:w-auto">
        <div
          class="relative overflow-hidden rounded-xl w-full lg:w-[540px] h-[374px] md:h-[600px] aspect-square"
        >
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
                class="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          </TransitionGroup>
        </div>
        <!-- Progress bar -->
        <div class="relative w-full h-[2px] bg-[#D8D8D8] mt-4">
          <div
            class="absolute top-0 left-0 h-[2px] bg-[#707070] transition-all duration-300"
            :style="{
              width: `${100 / images.length}%`,
              left: `${(currentImageIndex * 100) / images.length}%`,
            }"
            role="progressbar"
            :aria-valuenow="currentImageIndex + 1"
            :aria-valuemin="1"
            :aria-valuemax="images.length"
          ></div>
        </div>
      </div>

      <!-- Thumbnail navigation (hidden on mobile) -->
      <div class="hidden md:flex flex-col gap-10 w-[120px] h-full">
        <button
          v-for="(image, index) in images"
          :key="'thumb-' + index"
          class="overflow-hidden rounded-xl aspect-square relative transition-all duration-150 ease-in opacity-50 hover:opacity-100"
          :class="{
            'ring-2 ring-gray-600 opacity-100': currentImageIndex === index,
          }"
          @click="setCurrentImage(index)"
          :aria-label="`View image ${index + 1}`"
          role="button"
          :aria-pressed="currentImageIndex === index"
        >
          <img
            :src="image.src"
            :alt="`Thumbnail ${index + 1}`"
            draggable="false"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
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
