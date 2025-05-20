<template>
  <div class="reviews-container">
    <!-- Reviews List Section -->
    <div class="reviews-list mb-12">
      <h3 class="text-lg font-medium mb-6">
        {{ reviews.length }} Reviews for {{ productName }}
      </h3>

      <div v-if="reviews.length === 0" class="text-[#707070] italic">
        No reviews yet. Be the first to review this product!
      </div>

      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="review-item py-6"
        :class="{ 'border-t border-gray-200': index > 0 }"
      >
        <div class="review-header flex flex-col mb-3">
          <div class="flex items-center gap-4">
            <h4 class="text-xl">{{ review.author }}</h4>
            <span class="text-sm text-[#707070]">{{ review.date }}</span>
          </div>
          <div class="mt-4 mb-6">
            <star-rating
              :star-size="20"
              :rating="review.rating"
              :read-only="true"
              inactive-color="#EFEFEF"
              active-color="#000000"
              :show-rating="false"
            />
          </div>
        </div>
        <div class="review-content text-[#707070]">
          <p>{{ review.content }}</p>
        </div>
      </div>
    </div>

    <!-- Add Review Form Section -->
    <div class="add-review-section">
      <h3 class="text-lg font-medium mb-3">Add a Review</h3>
      <p class="text-sm text-[#707070] mb-6">
        Your Email Address Will Not Be Published. Required Fields Are Marked *
      </p>

      <form class="mt-[46px]" @submit.prevent="submitReview">
        <div class="mb-[46px]">
          <textarea
            id="review-content"
            v-model="newReview.content"
            rows="4"
            placeholder="Your Review*"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            required
          ></textarea>
        </div>

        <div class="mb-[46px]">
          <input
            id="review-name"
            v-model="newReview.author"
            type="text"
            placeholder="Enter your name*"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            required
          />
        </div>

        <div class="mb-6">
          <input
            id="review-email"
            v-model="newReview.email"
            placeholder="Enter your Email*"
            type="email"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            required
          />
        </div>

        <div class="mb-6">
          <div class="flex items-center gap-2">
            <Checkbox
              id="save-info"
              v-model="saveInfo"
              class="rounded-none border-black text-black focus:ring-black shadow-none"
            />
            <label for="save-info" class="text-sm text-[#707070]">
              Save my name, email, and website in this browser for the next time
              I comment
            </label>
          </div>
        </div>

        <div class="mb-8 mt-12">
          <label class="block mb-2 text-[#707070]">Your Rating*</label>
          <star-rating
            v-model="newReview.rating"
            :star-size="24"
            inactive-color="#EFEFEF"
            active-color="#000000"
            :show-rating="false"
            required
          />
        </div>

        <Button variant="default" type="submit" class="w-auto px-8 py-3 font-bold"
          >Submit</Button
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import StarRating from "vue-star-rating";
import Button from "@/components/ui/button/Button.vue";
import Checkbox from "./ui/checkbox/Checkbox.vue";

const props = defineProps({
  productId: {
    type: [Number, String],
    required: true,
  },
  productName: {
    type: String,
    default: "Lira Earrings",
  },
});

const emit = defineEmits(["review-submitted"]);

// Sample reviews data - in a real app, this would come from an API
const reviews = ref([
  {
    author: "Scarlet Witch",
    date: "6 May, 2020",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
  },
  {
    author: "Scarlet Witch",
    date: "6 May, 2020",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.",
  },
]);

// Form data
const newReview = ref({
  author: "",
  email: "",
  rating: 0,
  content: "",
  date: "",
});

const saveInfo = ref(false);

// Form submission
const submitReview = () => {
  if (newReview.value.rating === 0) {
    alert("Please select a rating");
    return;
  }

  // Format current date
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  newReview.value.date = `${day} ${month}, ${year}`;

  // In a real app, you would send this to an API
  reviews.value.push({ ...newReview.value });

  // Emit event to parent component
  emit("review-submitted", newReview.value);

  // Reset form
  newReview.value = {
    author: saveInfo.value ? newReview.value.author : "",
    email: saveInfo.value ? newReview.value.email : "",
    rating: 0,
    content: "",
    date: "",
  };
};
</script>

<style scoped>
.reviews-container {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 87px;
}
</style>
