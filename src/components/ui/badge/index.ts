import { cva, type VariantProps } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#A18A68] text-white [a&]:hover:bg-primary/90",
        danger:
          "border-transparent bg-red-700 text-white [a&]:hover:bg-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export type BadgeVariants = VariantProps<typeof badgeVariants>;
