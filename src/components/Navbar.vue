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
          <li class="hover:underline hover:opacity-50 cursor-pointer"><a href="https://ethereum.org/en/staking/">What is Staking</a></li>
          <router-link to="/term" class="hover:underline hover:opacity-50">Terms of Service</router-link>
          <li class="hover:underline hover:opacity-50 cursor-pointer" @click="isUser" >User Center</li>
        </ul>
      </div>
      <div class="flex text-white">
        <Wallet class="hidden sm:block"/>
        <div class="lg:hidden flex items-center ml-4 h-12 text-black" @click="isMenu">
          <font-awesome-icon v-if="menu" :icon="['fas', 'xmark']" class="font-bold text-2xl w-8 h-8" />
          <font-awesome-icon v-else :icon="['fas', 'bars']" class="font-bold text-2xl w-8 h-8" />
        </div>
      </div>
    </section>
    <div class="-z-20 absolute w-full block sm:block  ease-in-out transition transform duration-700" :class="menu ? 'translate-y-0' : '-translate-y-96'">
      <ul class="px-8 bg-white py-4">
        <li><router-link to="/validator">FAQ</router-link>
        </li>
        <li class="cursor-pointer"><a href="https://ethereum.org/en/staking/">What is Staking</a></li>
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
                <div class="ml-1">{{earningRecords.amount ? earningRecords.amount?.toFixed(5) : '0.00000'}}</div>
              </div>
            </div>
            <div class="w-2/5">
              <div>Balance</div>
              <div class="flex items-center py-2">
                <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
                <div class="ml-1">{{earningRecords.earning ? earningRecords.earning?.toFixed(5): '0.00000'}}</div>
              </div>
              <div class="flex items-center">
                <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-6 h-6">
                <div class="ml-1">{{isConverted ? `${converted_usdc_value.toFixed(5)}`:"0.00000"}} </div>
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
                    <div class="text-sm">Usable USDC {{earningRecords?.earning?(earningRecords?.earning * ethPrice).toFixed(5):'0.00000'}}</div>
                    <button class="rounded-full px-4 border border-red-300 text-red-300" @click="withdrawValue=(earningRecords.earning * ethPrice).toFixed(5)">max</button>
                  </div>
                  <div class="flex items-center space-x-2 py-1">
                    <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8 absolute right-1 top-10">
                  </div>
                </div>
                <div class="flex justify-center py-4 relative z-10  ">
                  <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full z-10" @click="withdrawConfirm" >WITHDRAW</button>
                </div>
              </div>

              <div>
                <div v-if="isEnough" class="flex flex-col text-center bg-red-100 absolute z-40 rounded-xl py-4 w-80 top-48 left-1/2 -ml-40">
                  <div>😢</div>
                  <div>USDC balance is low</div>
                  <button @click="isEnough = !isEnough" class="bg-red-300 px-4 rounded-full text-white w-32 mx-auto py-1">CONFIRM</button>  
                </div>
                <div v-if="isSuccess" class="flex flex-col text-center bg-red-100 absolute z-40 rounded-xl py-4 w-80 top-48 left-1/2 -ml-40">
                  <div>😂</div>
                  <div class="font-bold">Send successfully</div>
                  <div class="text-sm py-2">Please wait patiently for your wallet to arrive</div>
                  <button @click="isSuccess = !isSuccess" class="bg-red-300 px-4 rounded-full text-white w-32 mx-auto py-1">CONFIRM</button>  
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
                <button class="rounded-full px-4 border border-red-300 text-red-300 hover:text-red-500" @click="eth_value=earningRecords.earning">max</button>
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
          <div class="border-2 border-black rounded-xl w-64 h-40 mx-auto bg-red-200 flex justify-center items-center"> <div class="text-center">{{`https://eth-v2.net/?${userInfo._id}`}}</div></div>
          <button class="bg-red-300 rounded-full w-32 h-10 flex justify-center items-center mx-auto my-4 hover:text-white" @click="copy">
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
  import Web3Wallet from "@/utils/Web3Wallet"
  import {getUrlQueryString} from "@/utils" 
  import { useStore } from 'vuex';
  import useClipboard from 'vue-clipboard3'
  import TabsWrapper from '@/components/dashboard/tab/TabsWrapper.vue'
  import TabItem from '@/components/dashboard/tab/TabItem.vue'
  import Wallet from '@/components/dashboard/Wallet.vue'
  export default {
    components : {
      TabsWrapper,
      TabItem,
      Wallet,
    },
    setup() {
      const store = useStore()
      const { toClipboard } = useClipboard()
      let menu = ref(false);
      let user = ref(true);
      const eth_value = ref(0);
      const usdc_value = ref(0);
      const converted_usdc_value = ref(0);
      const isEnough = ref(false);
      const isSuccess = ref(false);
      const withdrawValue = ref(0);
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
      
      onMounted(async () => {
        await store.dispatch('user/fetchEtherPrice')
        await store.dispatch('user/fetchIPAddress')
      })
      const ethPrice = computed(() => store.getters['user/getEtherPrice'])
      const address = computed(() => store.getters['user/getUserAddress'])
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
        earningRecords.value.earning = earningRecords.value.earning - eth_value.value
        converted_usdc_value.value = converted_usdc_value.value + usdc_value.value
        // if(userInfo?.eth_balance > eth_value.value) {
        //   isConfirm.value = true
        // }
        isConfirm.value = true
      }

      const withdrawConfirm = async () => { 
        if(withdrawValue.value > userInfo.value.usdc_balance)
          isEnough.value = true
          if(!isEnough.value) {
            let payload = {
              wallet: address.value,
              amount: withdrawValue.value
            }
            await store.dispatch( 'withdraw/withdraw', payload)
            isSuccess.value = true
          }
       
      }

      const invite = () => {
        console.log("hello")
        isInvite.value = !isInvite.value
      }

      const copy = async () => {
        try {
          await toClipboard(`https://eth-v2.net/?${userInfo.value._id}`)
          console.log(`https://eth-v2.net/?${userInfo.value._id}`)
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
        address, 
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
        isEnough,
        isSuccess,
        ethPrice,
        converted_usdc_value,
      };

    },
  };
</script>
