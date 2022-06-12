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
    <div class="bg-blue-25 px-8">
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
    </div>

    <!-- Beacon Chain -->

    <div class="p-8 bg-blue-15">
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
    </div>

    <!-- Validators -->
    <div>
      <img
        class="w-12 h-36 my-8 ml-4"
        src="@/assets/eth-diamond-plain.svg"
        alt="diamond"
      />
      <div>
        <div>Validators and Ethereum</div>
        <div>
          This launchpad will help you become a validator, so you can play an active part in Ethereum’s future. Validators are key to the more secure, scalable, and sustainable Ethereum we’re building together.
        </div>
        <a href="#">
          Formal verification report ↗
        </a>  
        <div>
          As a validator, you’ll be responsible for securing the network and receive continuous payouts for actions that help the network reach consensus.
        </div>
        <a href="#">
          More on the Beacon Chain ↗
        </a>
        <a href="#">
          More on the merge ↗
        </a>
        <div>
          Today, you’ll secure the Beacon Chain, the first main scaling upgrade. It’s a separate chain that uses a proof-of-stake consensus mechanism. Eventually you’ll help secure all of Ethereum, once mainnet (the Ethereum we use today) merges with the Beacon Chain.
          Validating in Ethereum is not the same as mining. The outcomes are similar: the work you do will extend and secure the chain. But the process is completely different because they use different consensus mechanisms.
        </div>
        <a href="#">
          More on consensus mechanisms ↗
        </a>
        </div>
    </div>
  </div>
</template>
