<template>
  <div>
    <Drawer>
      <DrawerTrigger class="flex items-center gap-x-2 md:hidden mt-4">
        <IconFilter />
        <span class="text-xs text-[#A18A68]">Filters</span>
      </DrawerTrigger>
      <DrawerContent data-focus-trap="true">
        <div class="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Refine your product selection</DrawerDescription>
          </DrawerHeader>
          <ProductFilterForm
            :filters="filters"
            @update:filters="updateFilters"
          />
          <DrawerFooter>
            <DrawerClose>
              <Button class="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import IconFilter from "@/components/icons/IconFilter.vue";
import ProductFilterForm from "@/components/product/ProductFilterForm.vue";

interface FilterState {
  search: string;
  priceRange: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  onSale: boolean;
  inStock: boolean;
}

defineProps<{
  filters: FilterState;
}>();

const emits = defineEmits<{
  "update:filters": [filters: Partial<FilterState>];
}>();

const updateFilters = (newFilters: Partial<FilterState>) => {
  emits("update:filters", newFilters);
};
</script>
