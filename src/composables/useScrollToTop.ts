import { nextTick, watch } from "vue";
import { useRoute } from "vue-router";

export default function () {
  const route = useRoute();

  watch(
    () => route.path,
    () => {
      nextTick(() => {
        window.scrollTo(0, 0);
      });
    }
  );
}
