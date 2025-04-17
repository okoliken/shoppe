<template>
  <footer class="mt-[94px] lg:mt-52 lg:border-t lg:border-[#D8D8D8] lg:py-12">
    <div class="lg:flex lg:flex-row-reverse lg:justify-between lg:w-full lg:items-center lg:mb-12">

      <div class="relative lg:w-[396px]">
        <input
          type="email"
          class="w-full border-b border-black pb-1.5 outline-none appearance-none text-xs lg:text-base"
          placeholder="Give an email, get the newsletter."
        />
        <svg
          class="absolute right-0 top-2"
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
      </div>
      <div>
        <div class="mt-[11px] block lg:hidden">
          <label class="text-xs flex items-center gap-1" for="agree">
            <Checkbox id="agree" />
            i agree to the website’s terms and conditions
          </label>
        </div>
        <section class="mt-[42px] lg:mt-0 flex-1">
          <ul class="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-[41px]">
            <li class="text-[#707070] font-light text-xs lg:text-base">CONTACT</li>
            <li class="text-[#707070] font-light text-xs lg:text-base">TERMS OF SERVICES</li>
            <li class="text-[#707070] font-light text-xs lg:text-base">SHIPPING AND RETURNS</li>
          </ul>
        </section>
      </div>
    </div>


<div class="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:mt-12">
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
        <div class="flex items-center gap-4">
          <IconFacebook />
          <IconInstagram />
          <IconTwitter />
        </div>
      </div>
    </div>
    <p class="text-xs mt-[42px] lg:mt-0 text-[#707070] lg:text-base">
      © {{ new Date().getFullYear() }} Shelly. Terms of use and privacy policy.
    </p>
</div>
  </footer>
</template>

<script setup lang="ts">
import Checkbox from "../ui/checkbox/Checkbox.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import IconTwitter from "../icons/IconTwitter.vue";
</script>
