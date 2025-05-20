<template>
    <div class="shipping-calculator">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleShippingCalculator">
        <h4 class="text-xs lg:text-base">CALCULATE SHIPPING</h4>
        <svg 
          class="transform transition-transform duration-200"
          :class="{ 'rotate-180': !isExpanded }"
          width="12" 
          height="8" 
          viewBox="0 0 14 8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#707070" stroke-width="1.5"/>
        </svg>
      </div>
      
      <div v-if="isExpanded" class="mt-4 space-y-4">
        <div class="relative">
          <select 
            v-model="selectedCountry" 
            class="w-full border-b border-gray-300 py-3 text-[#707070] focus:outline-none focus:border-black appearance-none bg-transparent"
            required
          >
            <option value="" disabled selected>SELECT A COUNTRY</option>
            <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="#707070" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
        
        <div class="relative">
          <select 
            v-model="selectedCity" 
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black appearance-none bg-transparent text-[#707070]"
            :disabled="!selectedCountry"
            required
          >
            <option value="" disabled selected>CITY</option>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="#707070" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
        
        <div class="relative">
          <select 
            v-model="selectedZip" 
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black appearance-none bg-transparent text-[#707070]"
            :disabled="!selectedCity"
            required
          >
            <option value="" disabled selected>POST CODE / ZIP</option>
            <option v-for="zip in zipCodes" :key="zip" :value="zip">{{ zip }}</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="#707070" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
        
        <div>
          <button 
            @click="updateTotals"
            class="w-full border border-black py-3 px-4 text-sm font-medium hover:bg-black hover:text-white transition duration-200"
            :disabled="!canCalculateShipping"
          >
            UPDATE TOTALS
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  

  const emit = defineEmits(['update-shipping']);

  const isExpanded = ref(true);
  const selectedCountry = ref('');
  const selectedCity = ref('');
  const selectedZip = ref('');
  const shippingCost = ref(0);
  

  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const citiesByCountry = {
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Edinburgh'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth']
  };
  const zipsByCity = {
    'New York': ['10001', '10002', '10003'],
    'Los Angeles': ['90001', '90002', '90003'],
    'Chicago': ['60601', '60602', '60603'],
    'Houston': ['77001', '77002', '77003'],
    'Toronto': ['M5V', 'M5A', 'M5B'],
    'Vancouver': ['V5K', 'V5L', 'V5M'],
    'Montreal': ['H2X', 'H2Y', 'H2Z'],
    'Calgary': ['T2P', 'T2R', 'T2S'],
    'London': ['EC1A', 'EC1B', 'EC1C'],
    'Manchester': ['M1', 'M2', 'M3'],
    'Birmingham': ['B1', 'B2', 'B3'],
    'Edinburgh': ['EH1', 'EH2', 'EH3'],
    'Sydney': ['2000', '2001', '2002'],
    'Melbourne': ['3000', '3001', '3002'],
    'Brisbane': ['4000', '4001', '4002'],
    'Perth': ['6000', '6001', '6002']
  };
  
  // Computed
  const cities = computed(() => {
    if (!selectedCountry.value) return [];
    return citiesByCountry[selectedCountry.value as keyof typeof citiesByCountry] || [];
  });
  
  const zipCodes = computed(() => {
    if (!selectedCity.value) return [];
    return zipsByCity[selectedCity.value as keyof typeof zipsByCity] || [];
  });
  
  const canCalculateShipping = computed(() => {
    return selectedCountry.value && selectedCity.value && selectedZip.value;
  });
  
  // Methods
  const toggleShippingCalculator = () => {
    isExpanded.value = !isExpanded.value;
  };
  
  const updateTotals = () => {
    shippingCost.value = 22;

    emit('update-shipping', shippingCost.value);
  };
  
  // Watch for changes in location to reset the shipping cost
  watch([selectedCountry, selectedCity, selectedZip], () => {
    // Reset shipping cost when location changes
    if (shippingCost.value > 0) {
      shippingCost.value = 0;
      emit('update-shipping', 0);
    }
    
    // Reset city and zip when country changes
    if (selectedCountry.value === '') {
      selectedCity.value = '';
      selectedZip.value = '';
    }
    
    // Reset zip when city changes
    if (selectedCity.value === '') {
      selectedZip.value = '';
    }
  });
  </script>