<template>
  <footer class="mt-[94px] lg:mt-52 lg:border-t lg:border-[#D8D8D8] lg:py-12">
    <div
      class="lg:flex lg:flex-row-reverse lg:justify-between lg:w-full lg:items-center lg:mb-12"
    >
      <div class="relative lg:w-[396px]">
        <input
          type="email"
          class="w-full border-b border-black pb-1.5 lg:pb-3 outline-none appearance-none text-xs lg:text-base"
          placeholder="Give an email, get the newsletter."
        />
        <svg
          class="absolute right-0 top-2 block lg:hidden"
          width="15"
          height="6"
          viewBox="0 0 15 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.99474V2.24474C0 2.03764 0.167945 1.86974 0.375116 1.86974H12.0037V0.369743C12.0058 0.219715 12.0972 0.0853847 12.236 0.0282559C12.3747 -0.028873 12.5342 0.00219797 12.6414 0.107243L14.8921 2.35724C15.036 2.5056 15.036 2.74138 14.8921 2.88974L12.6414 5.13974C12.5332 5.24572 12.372 5.27629 12.2325 5.21725C12.0931 5.15821 12.0028 5.02113 12.0037 4.86974V3.36974H0.375116C0.167945 3.36974 0 3.20185 0 2.99474Z"
            fill="#707070"
          />
        </svg>

        <svg
          class="absolute right-0 top-2 hidden lg:block"
          width="25"
          height="9"
          viewBox="0 0 25 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z"
            fill="#707070"
          />
        </svg>
      </div>
      <div>
        <div class="mt-[11px] block lg:hidden">
          <label class="text-xs flex items-center gap-1" for="agree">
            <Checkbox id="agree" />
            i agree to the website’s terms and conditions
          </label>
        </div>
        <section class="mt-[42px] lg:mt-0 flex-1">
          <ul
            class="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-[41px]"
          >
            <li class="text-[#707070] font-light text-xs lg:text-base">
              <RouterLink v-slot="{ isExactActive }" to="/">
                <span>CONTACT</span>
              </RouterLink>
            </li>
            <li class="text-[#707070] font-light text-xs lg:text-base">
              <RouterLink v-slot="{ isExactActive }" to="/privacy-policy">
                <span :class="isExactActive ? 'underline' : ''">TERMS OF SERVICES</span>
              </RouterLink>
              
            </li>
            <li class="text-[#707070] font-light text-xs lg:text-base">
              <RouterLink v-slot="{ isExactActive }" to="/">
                <span>SHIPPING AND RETURNS</span>
              </RouterLink>
            </li>
          </ul>
        </section>
      </div>
    </div>

    <div
      class="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:mt-12"
    >
      <div class="mt-8 lg:mt-0 flex items-center gap-3">
        <span class="text-black text-xs block lg:hidden">Follow us</span>
        <div class="flex items-center gap-2">
          <svg
            width="47"
            height="1"
            viewBox="0 0 47 1"
            fill="none"
            class="block lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-4.37114e-08"
              y1="0.5"
              x2="47"
              y2="0.499996"
              stroke="black"
            />
          </svg>
          <div class="flex items-center gap-4 lg:gap-x-7">
            <IconLinkedIn />
            <IconFacebook />
            <IconInstagram />
            <IconTwitter />
          </div>
        </div>
      </div>
      <p class="text-xs mt-[42px] lg:mt-0 text-[#707070] lg:text-base">
       <span class="text-black"> © {{ new Date().getFullYear() }} Shelly</span>. Terms of use <span class="text-black">and</span> privacy
        policy.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Checkbox from "../ui/checkbox/Checkbox.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import IconTwitter from "../icons/IconTwitter.vue";
import IconLinkedIn from "../icons/IconLinkedIn.vue";
</script>
