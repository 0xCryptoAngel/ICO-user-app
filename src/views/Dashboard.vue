<template>
  <div>
    <!-- Nav Bar -->
    <div class="wallet-btn flex px-4 justify-between py-2">
      <div class="flex items-center">
        <img
          class=""
          src="@/assets/beijing.png"
          alt="beijing"
        />
        <div class="sm:block md:hidden ml-2">Staking Lauchpad</div>
        <ul class="hidden md:flex ml-2 space-x-3">
          <li>Staking Launchpad</li>
          <li>FAQ</li>
          <li>What is Staking</li>
          <li>Terms of Service</li>
          <li>User Center</li>
        </ul>
      </div>
      <button class="wallet-btn border border-black px-4 py-2 text-white">CONNECT WALLET</button>
    </div>
    
    <!-- Home  -->

    <div class="bg-blue-75 p-4 sm:flex sm:flex-col md:flex-row justify-center">
      <div>
        <div class="text-4xl md:w-full font-semibold">Become a validator and help secure the  future of Ethereum.</div>
        <div class="py-4">Earn continous reward for providing a public good to the community.</div>
        <button class="wallet-btn border border-black px-4 py-2 font-bold">CONNECT WALLET</button>
      </div>
      <img
        class="w-72 h-64 my-8 ml-4"
        src="@/assets/leslie-rhino.png"
        alt="leslie-rhino"
      />
    </div>

    <!-- Staking Options -->
    <div class="bg-blue-25">
      <div>Staking Options</div>

    </div>
  </div>
</template>
