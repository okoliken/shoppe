<template>
  <div class="md:pt-10 lg:pt-24">
    <div>
      <h2
        class="text-xl md:text-2xl lg:text-[33px] leading-[43px] lg:font-medium flex"
      >
        Shop <span class="hidden md:block md:ml-1">The Latest</span>
      </h2>

      <ProductFilterDrawer 
        :filters="filters" 
        @update:filters="updateFilters" 
      />
    </div>

    <div class="flex gap-x-8 mt-4 md:mt-6">
      <ProductFilterForm 
        class="hidden md:block" 
        :filters="filters"
        @update:filters="updateFilters"
      />
      <div class="flex-1">
        <ProductList 
          reduce-product-spacing 
          hide-header 
          :products="filteredProducts" 
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import ProductList from "@/components/product/ProductList.vue";
import ImageOne from "../assets/images/products/Img01.png";
import ImageTwo from "../assets/images/products/Img02.png";
import ImageThree from "../assets/images/products/Img03.png";
import ImageFour from "../assets/images/products/Img04.png";
import ImageFive from "../assets/images/products/Img05.png";
import ImageSix from "../assets/images/products/Img06.png";
import ImageSeven from "@/assets/images/carousel/image4.jpg";
import ImageEight from "../assets/images/carousel/image6.jpg"
import Ring from "@/assets/images/products/ring.jpg";
import ProductFilterDrawer from "@/components/product/ProductFilterDrawer.vue";
import ProductFilterForm from "@/components/product/ProductFilterForm.vue";

interface FilterState {
  search: string
  priceRange: string
  category: string
  minPrice: number
  maxPrice: number
  onSale: boolean
  inStock: boolean
}

const filters = ref<FilterState>({
  search: '',
  priceRange: '',
  category: '',
  minPrice: 0,
  maxPrice: 10000,
  onSale: false,
  inStock: false
})

// Watch priceRange for changes and update minPrice and maxPrice accordingly
watch(() => filters.value.priceRange, (newRange) => {
  if (newRange) {
    const [min, max] = newRange.split('-').map(val => parseInt(val) || 0);
    
    if (newRange === '150+') {
      filters.value.minPrice = 150;
      filters.value.maxPrice = 10000;
    } else if (min !== undefined && max !== undefined) {
      filters.value.minPrice = min;
      filters.value.maxPrice = max;
    }
  }
}, { immediate: true });

const filteredProducts = computed(() => {
  return products.filter(product => {
    // Search filter
    const matchesSearch = filters.value.search === '' || 
      product.name.toLowerCase().includes(filters.value.search.toLowerCase());
    
    // Category filter
    const matchesCategory = !filters.value.category || 
      filters.value.category === 'all' || 
      getCategoryForProduct(product.name) === filters.value.category;
    
    // Price filter 
    const matchesPrice = product.price >= filters.value.minPrice && 
      product.price <= filters.value.maxPrice;
    
    // On Sale filter
    const matchesOnSale = !filters.value.onSale || 
      (product.discountPrice !== undefined);
    
    // In Stock filter (assuming all products are in stock for this example)
    const matchesInStock = filters.value.inStock || true;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesOnSale && matchesInStock;
  });
});

// Helper function to determine product category based on name
function getCategoryForProduct(name: string): string {
  name = name.toLowerCase();
  if (name.includes('earrings') || name.includes('hoops')) {
    return 'earrings';
  } else if (name.includes('necklace')) {
    return 'necklaces';
  } else if (name.includes('ring')) {
    return 'rings';
  }
  return 'all';
}

const updateFilters = (newFilters: Partial<FilterState>) => {
  filters.value = { ...filters.value, ...newFilters };
}

const products = [
  { 
    id: 1, 
    name: "Lira Earrings", 
    price: 99.99,
    discountPrice: 79.99, 
    category: "earrings",
    inStock: true,
    imageUrl: ImageOne 
  },
  { 
    id: 2, 
    name: "Hal Earrings", 
    price: 149.99,
    category: "earrings",
    inStock: true,
    imageUrl: ImageTwo 
  },
  { 
    id: 3, 
    name: "Gold Big Hoops", 
    price: 599.99,
    category: "earrings",
    inStock: false, // Out of stock
    imageUrl: ImageSeven
  },
  { 
    id: 4, 
    name: "Hair Pin Set of 3", 
    price: 299.99,
    category: "accessories",
    inStock: true,
    imageUrl: ImageFour 
  },
  { 
    id: 5, 
    name: "Kaede Hair Pin Set Of 3", 
    price: 199.99,
    discountPrice: 159.99,
    category: "accessories",
    inStock: true,
    imageUrl: ImageThree 
  },
  { 
    id: 6, 
    name: "Diamond Necklace", 
    price: 599.99,
    category: "necklaces",
    inStock: false, // Out of stock
    imageUrl: ImageEight
  },
  { 
    id: 7, 
    name: "Yuki Hair Pin Set of 3", 
    price: 499.99,
    category: "accessories",
    inStock: true,
    imageUrl: ImageSix
  },
  { 
    id: 8, 
    name: "Plaine Necklace", 
    price: 399.99,
    discountPrice: 299.99,
    category: "necklaces",
    inStock: true,
    imageUrl: ImageFive 
  },
  {
    id: 9,
    name: "Silver Ring",
    price: 599.99,
    category: "rings",
    inStock: true,
    imageUrl: Ring
  },
  {
    id: 10,
    name: "Gold Bracelet",
    price: 249.99,
    discountPrice: 199.99,
    category: "bracelets",
    inStock: true,
    imageUrl: ImageOne // Reusing image for example
  },
  {
    id: 11,
    name: "Diamond Studded Ring",
    price: 1299.99,
    category: "rings",
    inStock: false, // Out of stock
    imageUrl: Ring // Reusing image for example
  },
  {
    id: 12,
    name: "Pearl Necklace",
    price: 899.99,
    category: "necklaces",
    inStock: true,
    imageUrl: ImageFive // Reusing image for example
  }
];
</script>