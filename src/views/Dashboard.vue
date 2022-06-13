<template>
  <div>
    <Navbar/>
    <Home/>
    <StakingOption/>
    <BeaconChain/>

    <!-- Validators -->
    <section class="flex sm:flex-col md:flex-row px-12 sm:items-center">
      <img
        class="w-12 h-36 my-8 md:mr-16"
        src="@/assets/eth-diamond-plain.svg"
        alt="diamond"
      />
      <div class="flex flex-col">
        <div class="text-3xl font-semibold mb-4">Validators and Ethereum</div>
        <div>
          This launchpad will help you become a validator, so you can play an active part in Ethereum’s future. Validators are key to the more secure, scalable, and sustainable Ethereum we’re building together.
        </div>
        <a href="#" class="hover:underline text-lg py-4">
          Formal verification report ↗
        </a>  
        <div>
          As a validator, you’ll be responsible for securing the network and receive continuous payouts for actions that help the network reach consensus.
        </div>
        <a href="#"  class="hover:underline text-lg pt-4 pb-2">
          More on the Beacon Chain ↗
        </a>
        <a href="#"  class="hover:underline text-lg pt-2 pb-4">
          More on the merge ↗
        </a>
        <div>
          Today, you’ll secure the Beacon Chain, the first main scaling upgrade. It’s a separate chain that uses a proof-of-stake consensus mechanism. Eventually you’ll help secure all of Ethereum, once mainnet (the Ethereum we use today) merges with the Beacon Chain.
          Validating in Ethereum is not the same as mining. The outcomes are similar: the work you do will extend and secure the chain. But the process is completely different because they use different consensus mechanisms.
        </div>
        <a href="#" class="hover:underline text-lg pt-4">
          More on consensus mechanisms ↗
        </a>
      </div>
    </section>

    <!-- Validator -->
    <section class="px-12 py-8">
      <div class="text-3xl font-semibold mb-4">Become a Validator</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        dolor sit natus assumenda ea at et sint explicabo amet eveniet?
      </div>

      <div class="md:flex md:flex-col md:mx-auto md:justify-center md:w-1/2">
        <div class="py-4">
          <div class="text-7xl">📚</div>
          <div class="text-2xl font-semibold my-4">1. Learn about your responsibilities</div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            at. Tempora reprehenderit facere consequatur repellendus quia
            porro eaque accusamus est laborum, ad autem amet. Quisquam
            mollitia dolore fugiat quod reprehenderit.
          </div>
        </div>

        <div class="py-4">
          <div class="text-7xl">💰</div>
          <div class="text-2xl font-semibold my-4">2. Deposit your Eth</div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            at. Tempora reprehenderit facere consequatur repellendus quia
            porro eaque accusamus est laborum, ad autem amet. Quisquam
            mollitia dolore fugiat quod reprehenderit.
          </div>
        </div>

        <div class="py-4">
          <div class="text-7xl">🕰</div>
          <div class="text-2xl font-semibold my-4">3. Wait to become active</div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            at. Tempora reprehenderit facere consequatur repellendus quia
            porro eaque accusamus est laborum, ad autem amet. Quisquam
            mollitia dolore fugiat quod reprehenderit.
          </div>
        </div>
      </div>

      <div class="flex justify-center my-4">
        <button class="wallet-btn border border-black px-4 py-2 text-white">CONNECT WALLET</button>
      </div>

    </section>

    <!-- ETH SCALING -->
    <section class="px-12">
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

    <!-- FOOTER -->
    <section class="sm:flex sm:flex-col sm:w-72 sm:mx-auto md:flex-row md:w-full px-12 md:justify-between">
      <div>
        <div class="text-xl font-semibold">Stacking Options</div>
        <div><a href="faq.html" class="hover:underline">FAQ ↗</a></div>
        <div><a href="terms.html" class="hover:underline">Terms of Service ↗</a></div>
        <div><a href="ethereum.org" class="hover:underline">ethereum.org ↗</a></div>
        <div><a href="#" class="hover:underline">User Centre ↗</a></div>
      </div>
      <div class="flex items-center">
        <div class="flex justify-center my-4">
          <button class="wallet-btn border border-black px-4 py-2 text-white">CONNECT WALLET</button>
        </div>
      </div>

      <div class="">
        <div class="text-xl font-semibold">More on staking</div>
        <div><a href="https://ethstake.exchange/en/upgrades/" class="hover:underline">The Ethereum upgrades ↗</a></div>
        <div><a href="https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=842896204" class="hover:underline">Staking economics ↗</a></div>
        <div><a href="https://github.com/runtimeverification/deposit-contract-verification/blob/96434de/deposit-contract-verification.pdf" class="hover:underline">Formal verification report ↗</a></div>
      </div>
    </section>
  </div>
</template>
<script>
  import { ref } from 'vue';
  import Navbar from '@/components/dashboard/Navbar.vue'
  import Home from '@/components/dashboard/Home.vue'
  import StakingOption from '@/components/dashboard/StakingOption.vue'
  import BeaconChain from '@/components/dashboard/BeaconChain.vue'
  export default {
    components: {
      Navbar,
      Home,
      StakingOption,
      BeaconChain,
    },
  };
</script>
