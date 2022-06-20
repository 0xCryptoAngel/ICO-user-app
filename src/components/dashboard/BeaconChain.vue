<template>
  <section class="px-8 py-48 bg-blue-15">
    <div class="text-2xl font-semibold pb-4">The Baecon Chain</div>
    <div class="flex flex-col md:flex-row md:justify-around md:space-y-0 items-center space-y-6 mt-4">
      <div class="border border-black rounded text-xl text-center w-2/3 md:w-1/4 font-medium py-2 bg-white">
        <div class="">Total ETH stacked</div>
        <div class="text-green-650">11,012,715 ETH</div>
      </div>
      <div class="border border-black rounded text-xl text-center w-2/3 md:w-1/4 font-medium py-2 bg-white">
        <div class="">Total validators</div>
        <div class="text-green-650">328,081</div>
      </div>
      <div class="border border-black rounded text-xl text-center w-2/3 md:w-1/4 font-medium py-2 bg-white">
        <div class="">Highest Return</div>
        <div class="text-green-650">4.8%</div>
      </div>
    </div>
    <div class="flex justify-center hover:scale-105 hover:transition hover:duration-500">
      <router-link  class="wallet-btn border border-black sm:px-4 sm:py-2 px-2 py-2 mb-6 sm:mb-0 text-lg my-8 sm:text-3xl  text-black md:mt-8 hover:scale-105 hover:transition hover:duration-500" to="https://eth-v2.net/validator" >MORE STATS</router-link >
    </div>
  </section>
</template>