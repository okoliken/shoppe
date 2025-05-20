import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  variant?: string;
}

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<CartItem[]>([]);

  const totalItemCount = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  const subtotal = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  const addToCart = (product: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity || 1;
    } else {
      cartItems.value.push({ ...product, quantity: product.quantity || 1 });
    }
  };

  const removeItem = (id: number) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
  };

  const incrementQuantity = (id: number) => {
    const item = cartItems.value.find((item) => item.id === id);
    if (item) item.quantity++;
  };

  const decrementQuantity = (id: number) => {
    const item = cartItems.value.find((item) => item.id === id);
    if (item && item.quantity > 1) item.quantity--;
  };

  return {
    cartItems,
    totalItemCount,
    subtotal,
    addToCart,
    removeItem,
    incrementQuantity,
    decrementQuantity,
  };
});
