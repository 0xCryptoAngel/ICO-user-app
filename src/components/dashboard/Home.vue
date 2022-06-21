<template>
  <section class="home-bg p-4 sm:flex sm:flex-col md:flex-row md:py-52 md:px-32 justify-center">
    <div class="text-black">    
      <div class="md:text-5xl md:w-full font-medium home-font text-3xl pt-24">Become a validator and help secure the  future of Ethereum</div>
      <div class="py-4">Earn continous reward for providing a public good to the community</div>
      <Wallet/>
    </div>
    <img
      class="w-72 h-64 my-16 ml-4"
      src="@/assets/leslie-rhino.png"
      alt="leslie-rhino"
    />
  </section>
</template>

<script>
  import Wallet from '@/components/dashboard/Wallet.vue'
  export default {
    components: {
      Wallet,
    }
  };
</script>

