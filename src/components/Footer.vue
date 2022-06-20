<template>
  <section class="flex flex-col w-full md:flex-row md:w-full px-12 md:justify-between bg-blue-75 py-8 bg-footer">
    <div>
      <div class="text-xl font-semibold">Stacking Options</div>
      <div><router-link to="/validator" class="hover:underline">FAQ ↗</router-link></div>
      <div><router-link to="/term" class="hover:underline">Terms of Service ↗</router-link></div>
      <div><a href="https://ethereum.org/en/" class="hover:underline">ethereum.org ↗</a></div>
      <div><a href="#" class="hover:underline">User Centre ↗</a></div>
    </div>
    <div class="flex items-center">
      <div class="flex justify-center my-4 hover:scale-105 hover:transition hover:duration-500">
        <button class="wallet-btn border border-black px-4 py-2 text-xl sm:text-3xl sm:font-semibold text-black">CONNECT WALLET</button>
      </div>
    </div>

    <div class="">
      <div class="text-xl font-semibold">More on staking</div>
      <div><a href="https://ethstake.exchange/en/upgrades/" class="hover:underline">The Ethereum upgrades ↗</a></div>
      <div><a href="https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=842896204" class="hover:underline">Staking economics ↗</a></div>
      <div><a href="https://github.com/runtimeverification/deposit-contract-verification/blob/96434de/deposit-contract-verification.pdf" class="hover:underline">Formal verification report ↗</a></div>
    </div>
  </section>
</template>