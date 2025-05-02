<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

interface Props {
  minValue?: number;
  maxValue?: number;
  initialMin?: number;
  initialMax?: number;
  priceGap?: number;
  currency?: string;
}

const props = withDefaults(defineProps<Props>(), {
  minValue: 0,
  maxValue: 10000,
  initialMin: 2500,
  initialMax: 8500,
  priceGap: 500,
  currency: '$'
});

const emit = defineEmits(['update:range']);

const minPrice = ref(props.initialMin);
const maxPrice = ref(props.initialMax);
const priceRange = ref<HTMLDivElement | null>(null);

// Handle min range input change
const handleMinRangeChange = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value);
  
  if (value + props.priceGap > maxPrice.value) {
    minPrice.value = maxPrice.value - props.priceGap;
  } else {
    minPrice.value = value;
  }
  
  updateRange();
};

// Handle max range input change
const handleMaxRangeChange = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value);
  
  if (value - props.priceGap < minPrice.value) {
    maxPrice.value = minPrice.value + props.priceGap;
  } else {
    maxPrice.value = value;
  }
  
  updateRange();
};

// Update the visual range in the slider
const updateRange = () => {
  if (priceRange.value) {
    const leftPosition = (minPrice.value / props.maxValue) * 100;
    const rightPosition = 100 - (maxPrice.value / props.maxValue) * 100;
    
    priceRange.value.style.left = `${leftPosition}%`;
    priceRange.value.style.right = `${rightPosition}%`;
  }
};

// Watch for changes and emit events
watch([minPrice, maxPrice], () => {
  emit('update:range', { min: minPrice.value, max: maxPrice.value });
});

onMounted(() => {
  updateRange();
});
</script>

<template>
  <div class="w-full py-6">
    <!-- Slider Track -->
    <div class="slider-container relative h-2 my-4">
      <!-- Background track -->
      <div class="bg-[#D8D8D8] rounded-full h-full w-full absolute"></div>
      
      <!-- Price range highlight -->
      <div 
        ref="priceRange" 
        class="price-range absolute h-full bg-black rounded-full"
      ></div>
      
      <!-- Range inputs container -->
      <div class="range-inputs absolute h-full w-full top-[3px] left-0">
        <input
          type="range"
          class="min-range absolute w-full appearance-none bg-transparent"
          :min="minValue"
          :max="maxValue"
          :value="minPrice"
          @input="handleMinRangeChange"
        >
        <input
          type="range"
          class="max-range absolute w-full appearance-none bg-transparent"
          :min="minValue"
          :max="maxValue"
          :value="maxPrice"
          @input="handleMaxRangeChange"
        >
      </div>
    </div>
    
    <!-- Price and Filter display -->
    <div class="flex justify-between items-center mt-6">
      <div class="text-[#707070] text-sm">
        Price: {{ currency }}{{ minPrice }} - {{ currency }}{{ maxPrice }}
      </div>
      <button class="text-[#A18A68] text-sm">Filter</button>
    </div>
  </div>
</template>

<style scoped>
/* Base styling for range inputs */
input[type="range"] {
  width: 100%;
  height: 2px;
  background: transparent;
  outline: none;
  pointer-events: none;
}

/* Thumb styling for WebKit browsers */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: black;
  border: 2px solid white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  pointer-events: auto;
  margin-top: -7px; /* Center thumb on track */
}

/* Thumb styling for Firefox */
input[type="range"]::-moz-range-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: black;
  border: 2px solid white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  pointer-events: auto;
}

/* Track styling for WebKit browsers */
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  background: transparent;
  border: none;
}

/* Track styling for Firefox */
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 2px;
  background: transparent;
  border: none;
}

/* Z-index for proper handle layering */
.min-range {
  z-index: 2;
}

.max-range {
  z-index: 1;
}
</style>