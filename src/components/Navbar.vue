<template>
  <div>
    <!-- Nav Bar -->
    <section class="wallet-btn flex px-4 justify-between py-2">
      <div class="flex items-center">
        <img
          class=""
          src="@/assets/beijing.png"
          alt="beijing"
        />
        <div class="sm:block md:hidden ml-2">Staking Lauchpad</div>
        <ul class="hidden md:flex ml-2 space-x-3">
          <li></li>
          <router-link to="/">Staking Launchpad</router-link>
          <router-link to="/faq">FAQ</router-link>
          <li>What is Staking</li>
          <router-link to="/term">Terms of Service</router-link>
          <li>User Center</li>
        </ul>
      </div>
      <div class="flex">
        <button class="wallet-btn border border-black px-4 py-2 text-white">CONNECT WALLET</button>
        <div class="md:hidden sm:flex sm:items-center sm:ml-4" @click="isOpen">
          <font-awesome-icon v-if="show" :icon="['fas', 'xmark']" class="font-bold text-2xl w-8 h-8" />
          <font-awesome-icon v-else :icon="['fas', 'bars']" class="font-bold text-2xl w-8 h-8" />
        </div>
      </div>
    </section>
    <div v-if="show" class="z-10 absolute w-full md:hidden sm:block">
      <div class="bg-blue-20 px-8 py-4">
        <div class="font-semibold">Launced network: Prater Testnet</div>
        <a href="#" class="text-blue-300 hover:text-black">Switch to mainnet launchpad ↗</a>
        <div class="pt-4"><em>Visit this website on desktop to become a validator.</em></div>
      </div>
      <ul class="px-8 bg-white py-4">
        <li>FAQ</li>
        <li>What is Staking</li>
        <li>Terms of Service</li>
        <li>User Center</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      let show = ref(false);
      const isOpen = () => (show.value = !show.value);
      return { show, isOpen };
    },
  };
</script>
