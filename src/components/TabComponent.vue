<script lang="ts">
import { defineComponent, ref } from "vue";

interface Tab {
  id: string;
  title: string;
  component: string;
  isActive?: boolean;
}

export default defineComponent({
  name: "TabComponent",
  props: {
    defaultActiveTab: {
      type: String,
      default: "",
    },
    tabs: {
      type: Array as () => Tab[],
      required: true,
    },
  },
  setup(props) {
    const activeTabId = ref(props.defaultActiveTab || props.tabs[0]?.id || "");

    const switchTab = (tabId: string): void => {
      activeTabId.value = tabId;
    };

    return {
      activeTabId,
      switchTab,
    };
  },
});
</script>

<template>
  <div class="w-full">
    <nav class="border-b border-gray-200">
      <ul class="flex flex-wrap gap-x-16 -mb-px">
        <li v-for="tab in tabs" :key="tab.id" class="mr-2">
          <button
            @click="switchTab(tab.id)"
            class="inline-block pb-[34px] text-xl rounded-t-lg border-b transition-all duration-300 ease-in-out cursor-pointer"
            :class="[
              activeTabId === tab.id
                ? 'text-black border-black active'
                : 'text-[#707070] hover:text-gray-700 hover:border-gray-300 hover:border-b',
            ]"
          >
            {{ tab.title }}
          </button>
        </li>
      </ul>
    </nav>

    <div class="py-4 relative">
      <transition
        mode="out-in"
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 transform translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div :key="activeTabId">
          <slot :name="activeTabId"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
