<template>
  <section class="px-12 sm:flex sm:flex-col md:flex-row md:space-x-8 bg-blue-10 py-12">
    <div class="">
      <div >
        <div class="text-3xl font-semibold mb-4">How is Ethereum scaling?</div>
        <div>
          Several upgrades are underway that will make Ethereum more scalable,
          secure, and sustainable. These upgrades will improve Ethereum while
          seamlessly continuing on the chain of today. Here’s more on the
          different upgrades:
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-2xl font-semibold my-4">Proof-of-stack (PoS) and the Beacon Chain</div>
        <div>
          PoS is a more secure, decentralized, and environmentally-friendly
          consensus mechanism than the proof-of-work (PoW) that secures Ethereum
          today. It rewards validators for building the chain, but slashes their
          deposits if they try to attack it, incentivising healthy behaviour. This
          upgrade is already live in the form of the Beacon Chain.
        </div>
        <a href="https://ethereum.org/en/upgrades/beacon-chain/" class="hover:underline text-lg pt-2 pb-4">More on the Beacon Chain ↗</a>
      </div>

      <div class="flex flex-col">  
        <div class="text-2xl font-semibold my-4">The Merge</div>
        <div>
          The merge will see the Ethereum Mainnet we use
          today merge with the Beacon Chain. This is when
          Ethereum will fully transition to proof-of-stake.
        </div>
        <a href="https://ethereum.org/en/upgrades/merge/" class="hover:underline text-lg pt-2 pb-4">More on the merge ↗</a>
      </div>

      <div class="flex flex-col">
        <div class="text-2xl font-semibold my-4">Sharding</div>
        <div>
          Sharding will make more data available to the network by
          introducing 64 parallel chains. Each new chain will be
          able to handle at least as much data as mainnet today, probably more.
        </div>
        <a href="https://ethereum.org/en/upgrades/shard-chains/" class="hover:underline text-lg pt-2 pb-4">More on the shard chains ↗</a>
      </div>
    </div>

    <div class="space-y-4 py-8">
      <div class="bg-blue-35 p-4">
        <div class="text-xl font-semibold">The upgrades</div>
        <div class="py-2">
          Dig deeper into Ethereum upgrades.
        </div>
        <a href="https://ethereum.org/en/upgrades/" class="hover:underline text-lg pt-2 pb-4">
          <div class="text-base"><strong>How does this all happen?</strong>↗</div>
        </a>
      </div>
      <div class="bg-blue-35 p-4">
        <div class="text-xl font-semibold">Deposit contract formally verified</div>
        <div class="py-2">
          The deposit contract has been verified at a byte-code level to ensure your safety.
        </div>
        <a href="https://github.com/runtimeverification/deposit-contract-verification/blob/96434de/deposit-contract-verification.pdf" class="hover:underline text-lg pt-2 pb-4">
          <div class="text-base"><strong>Formal verification report</strong>↗</div>
        </a>
      </div>
      <div class="bg-blue-35 p-4">
        <div class="text-xl font-semibold">Validators FAQ</div>
        <div class="py-2">
          Learn more about the roles and responsibilities of Ethereum validators.
        </div>
        <a href="faq.html" class="hover:underline text-lg pt-2 pb-4">
          <div class="text-base"><strong>More on validators</strong></div>
        </a>
      </div>
    </div>
  </section>
</template>    