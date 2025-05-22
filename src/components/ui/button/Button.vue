<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Motion } from "motion-v";
import { cn } from "@/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type ButtonVariants, buttonVariants } from ".";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Motion
    :while-hover="{ y: -4 }"
    :while-press="{ y: 1 }"
    :transition="{ type: 'tween', ease: 'easeOut', duration: 0.2 }"
    as-child
  >
    <Primitive
      data-slot="button"
      :as="as"
      :as-child="asChild"
      :class="cn(buttonVariants({ variant, size }), props.class)"
    >
      <slot />
    </Primitive>
  </Motion>
</template>
