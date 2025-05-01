<template>
  <form v-bind="$attrs" class="p-4 md:p-0">
    <!-- Search input -->
    <div class="relative lg:w-[262px] flex-1">
      <input
        type="text"
        class="w-full border-b border-[#D8D8D8] pb-3 outline-none appearance-none text-base"
        placeholder="Search..."
        aria-label="Search products"
      />
      <svg
        class="absolute right-0 top-1"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6431 13.9576L19.8645 18.1823C20.053 18.3919 20.0437 18.7128 19.8434 18.9111L19.1047 19.6504C19.0056 19.7504 18.8707 19.8066 18.73 19.8066C18.5893 19.8066 18.4544 19.7504 18.3553 19.6504L14.1339 15.4257C14.0172 15.3087 13.9112 15.1815 13.8173 15.0454L13.0258 13.9893C11.7162 15.0359 10.0898 15.6057 8.41388 15.6052C4.96034 15.6172 1.95934 13.233 1.18757 9.86415C0.415791 6.49527 2.07921 3.04081 5.19304 1.54592C8.30686 0.0510231 12.0401 0.914654 14.1825 3.62551C16.3249 6.33638 16.3047 10.171 14.1339 12.8591L15.1893 13.5879C15.3541 13.6935 15.5063 13.8175 15.6431 13.9576ZM3.13727 8.21165C3.13727 11.1282 5.49976 13.4926 8.41405 13.4926C9.81354 13.4926 11.1557 12.9362 12.1453 11.9459C13.1349 10.9555 13.6908 9.61225 13.6908 8.21165C13.6908 5.29506 11.3283 2.93069 8.41405 2.93069C5.49976 2.93069 3.13727 5.29506 3.13727 8.21165Z"
          fill="black"
        />
      </svg>
    </div>

    <!-- Select dropdowns with improved accessibility -->
    <div class="mt-[39px] flex flex-col gap-4">
      <!-- Price Range Select -->
      <div class="select-wrapper">
        <label id="price-range-label" class="sr-only">Price Range</label>
        <Select aria-labelledby="price-range-label">
          <SelectTrigger class="w-full !h-[53px] border-[#D8D8D8]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
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
        <Select aria-labelledby="category-label">
          <SelectTrigger class="w-full !h-[53px] border-[#D8D8D8]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
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
        :min-value="0"
        :max-value="10000"
        :initial-min="2500"
        :initial-max="8500"
        :price-gap="500"
        currency="$"
      />

      <!-- Switches with improved accessibility -->
      <div class="flex items-center justify-between mt-10">
        <label class="text-base cursor-pointer" for="on-sale">On sale</label>
        <Switch id="on-sale" />
      </div>
      <div class="flex items-center justify-between mt-14">
        <label class="text-base cursor-pointer" for="in-stock">In stock</label>
        <Switch id="in-stock" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import PriceRangeSlider from "@/components/ui/PriceRangeSlider.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
</script>

<style scoped>
.select-wrapper {
  position: relative;
}
</style>
