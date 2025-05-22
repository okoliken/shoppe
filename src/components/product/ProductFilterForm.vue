<template>
  <form v-bind="$attrs" class="p-4 md:p-0">
    <!-- Search input -->
    <div class="relative lg:w-[262px] flex-1">
      <input
        type="text"
        v-model="localFilters.search"
        @input="emitFilters"
        class="w-full border-b border-[#D8D8D8] pb-3 outline-none"
        placeholder="Search by name"
      />
      <IconSearchBig class="absolute top-0 right-0" />
    </div>

    <!-- Select dropdowns -->
    <div class="mt-[39px] flex flex-col gap-4">
      <!-- Price Range Select -->
      <div class="select-wrapper">
        <label id="price-range-label" class="sr-only">Price Range</label>
        <Select
          v-model="localFilters.priceRange"
          @update:modelValue="emitFilters"
          aria-labelledby="price-range-label"
        >
          <SelectTrigger class="w-full !h-[53px] border-[#D8D8D8]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent body-lock>
            <SelectGroup>
              <SelectLabel>Price Range</SelectLabel>
              <SelectItem
                v-for="range in priceRanges"
                :key="range.value"
                :value="range.value"
              >
                {{ range.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <!-- Category Select -->
      <div class="select-wrapper">
        <label id="category-label" class="sr-only">Category</label>
        <Select
          v-model="localFilters.category"
          @update:modelValue="emitFilters"
          aria-labelledby="category-label"
        >
          <SelectTrigger class="w-full !h-[53px] border-[#D8D8D8]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent body-lock>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem
                v-for="category in categories"
                :key="category.value"
                :value="category.value"
              >
                {{ category.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- Price range slider -->
    <div class="mt-[39px]">
      <PriceRangeSlider
        @update:range="updatePriceRange"
        :min-value="0"
        :max-value="10000"
        :initial-min="localFilters.minPrice"
        :initial-max="localFilters.maxPrice"
      />
    </div>

    <!-- Switches -->
    <div class="flex items-center justify-between mt-10">
      <label class="text-base cursor-pointer" for="on-sale">On sale</label>
      <Switch
        v-model="localFilters.onSale"
        @update:modelValue="emitFilters"
      />
    </div>
    <div class="flex items-center justify-between mt-14">
      <label class="text-base cursor-pointer" for="in-stock">In stock</label>
      <Switch
        v-model="localFilters.inStock"
        @update:modelValue="emitFilters"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import PriceRangeSlider from "@/components/ui/PriceRangeSlider.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import IconSearchBig from "../icons/IconSearchBig.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ref } from "vue";

interface FilterState {
  search: string;
  priceRange: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  onSale: boolean;
  inStock: boolean;
}

const priceRanges = [
  { value: "0-50", label: "$0 - $50" },
  { value: "50-100", label: "$50 - $100" },
  { value: "100-150", label: "$100 - $150" },
  { value: "150+", label: "$150+" },
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "rings", label: "Rings" },
];

const props = defineProps<{
  filters: FilterState;
}>();

const emit = defineEmits<{
  "update:filters": [filters: Partial<FilterState>];
}>();

const localFilters = ref({ ...props.filters });

const emitFilters = () => {
  emit("update:filters", { ...localFilters.value });
};

const updatePriceRange = (range: { min: number; max: number }) => {
  localFilters.value.minPrice = range.min;
  localFilters.value.maxPrice = range.max;
  emitFilters();
};
</script>

<style scoped>
.select-wrapper {
  position: relative;
}
</style>
