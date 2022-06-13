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
          <li>Staking Launchpad</li>
          <li>FAQ</li>
          <li>What is Staking</li>
          <li>Terms of Service</li>
          <li>User Center</li>
        </ul>
      </div>
      <div class="flex">
        <button class="wallet-btn border border-black px-4 py-2 text-white">CONNECT WALLET</button>
        <div class="md:hidden sm:flex sm:items-center sm:ml-4" @click="isOpen">
          <font-awesome-icon v-if="show" :icon="['fas', 'xmark']" class="font-bold text-2xl" />
          <font-awesome-icon v-else :icon="['fas', 'bars']" class="font-bold text-2xl" />
        </div>
      </div>
    </section>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <!-- Home  -->

    <section class="bg-blue-75 p-4 sm:flex sm:flex-col md:flex-row justify-center">
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
    </section>

    <!-- Staking Options -->
    <section class="bg-blue-25 px-8">
      <div class="text-4xl py-8">Staking Options</div>
      <div class="flex justify-around pb-8">
        <div class="bg-white rounded-2xl ">
          <div class="p-4 space-y-2">
            <div class="flex">
              <div class="flex items-center space-x-1">
                <img src="@/assets/ETH-logo.png" alt="ETH" class="w-6 h-6"/>
                <img src="@/assets/switch-horizontal.png" alt="switch" class="w-3 h-4"/>
                <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-6 h-6"/>
              </div>
              <div class="ml-2"><strong class="text-xl font-bold ">Ethereum /</strong>  <br/> USDC</div>
            </div>
            <div class="font-bold">5000 - 19999 USDC</div>
          </div>
          <hr class="bg-blue-25 h-1"/>
          <div class="py-8">
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <select class="border border-black rounded h-7 w-full">
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
              </select>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                Custoday Fee <strong>1.0%</strong>
              </div>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                Verifying 1 Node
              </div>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                96,376 Validators
              </div>
            </div>
          </div>
          <hr class="bg-blue-25 h-1"/>
          <div class="p-4 space-y-4">
            <input type="text" class="w-full border rounded" placeholder="USDC Amount">
            <button class="bg-red-25 w-full text-white rounded py-0.5">Stake Now</button>
          </div>
        </div>
  
        <div class="bg-white rounded-2xl sm:hidden md:block">
          <div class="p-4 space-y-2">
            <div class="flex">
              <div class="flex items-center space-x-1">
                <img src="@/assets/ETH-logo.png" alt="ETH" class="w-6 h-6"/>
                <img src="@/assets/switch-horizontal.png" alt="switch" class="w-3 h-4"/>
                <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-6 h-6"/>
              </div>
              <div class="ml-2"><strong class="text-xl font-bold ">Ethereum /</strong>  <br/> USDC</div>
            </div>
            <div class="font-bold">5000 - 19999 USDC</div>
          </div>
          <hr class="bg-blue-25 h-1"/>
          <div class="py-8">
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <select class="border border-black rounded h-7 w-full">
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
              </select>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                Custoday Fee <strong>1.0%</strong>
              </div>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                Verifying 1 Node
              </div>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                96,376 Validators
              </div>
            </div>
          </div>
          <hr class="bg-blue-25 h-1"/>
          <div class="p-4 space-y-4">
            <input type="text" class="w-full border rounded" placeholder="USDC Amount">
            <button class="bg-red-25 w-full text-white rounded py-0.5">Stake Now</button>
          </div>
        </div>
  
        <div class="bg-white rounded-2xl sm:hidden md:block">
          <div class="p-4 space-y-2">
            <div class="flex">
              <div class="flex items-center space-x-1">
                <img src="@/assets/ETH-logo.png" alt="ETH" class="w-6 h-6"/>
                <img src="@/assets/switch-horizontal.png" alt="switch" class="w-3 h-4"/>
                <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-6 h-6"/>
              </div>
              <div class="ml-2"><strong class="text-xl font-bold ">Ethereum /</strong>  <br/> USDC</div>
            </div>
            <div class="font-bold">5000 - 19999 USDC</div>
          </div>
          <hr class="bg-blue-25 h-1"/>
          <div class="py-8">
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <select class="border border-black rounded h-7 w-full">
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
                <option value="">3 day(0.5% ~ 1.5%)</option>
              </select>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                Custoday Fee <strong>1.0%</strong>
              </div>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                Verifying 1 Node
              </div>
            </div>
            <div class="flex items-center pl-4 pr-8">
              <img
                class="w-12 h-12"
                src="@/assets/triangle.png"
                alt="triangle"
              />
              <div class="h-7">
                96,376 Validators
              </div>
            </div>
          </div>
          <hr class="bg-blue-25 h-1"/>
          <div class="p-4 space-y-4">
            <input type="text" class="w-full border rounded" placeholder="USDC Amount">
            <button class="bg-red-25 w-full text-white rounded py-0.5">Stake Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Beacon Chain -->

    <section class="p-8 bg-blue-15">
      <div class="text-2xl font-bold">The Baecon Chain</div>
      <div class="flex sm:flex-col md:flex-row md:justify-around md:space-y-0 sm:items-center sm:space-y-6 mt-4">
        <div class="border border-black rounded text-xl text-center sm:w-1/2 md:w-1/4 font-bold">
          <div class="">Total ETH stacked</div>
          <div class="text-green-650">11,012,715 ETH</div>
        </div>
        <div class="border border-black rounded text-xl text-center sm:w-1/2 md:w-1/4 font-bold ">
          <div class="">Total validators</div>
          <div class="text-green-650">328,081</div>
        </div>
        <div class="border border-black rounded text-xl text-center sm:w-1/2 md:w-1/4 font-bold ">
          <div class="">Highest Return</div>
          <div class="text-green-650">4.8%</div>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="wallet-btn px-4 py-3 border border-black my-4">MORE STATS</button>
      </div>
    </section>

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
  export default {
    setup() {
      let show = ref(false);
      const isOpen = () => (show.value = !show.value);
      return { show, isOpen };
    },
  };
</script>
