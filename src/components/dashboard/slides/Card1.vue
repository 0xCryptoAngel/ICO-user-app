<template>
  <div class="bg-white rounded-2xl ">
    <div class="p-4 space-y-2">
      <div class="flex">
        <div class="flex items-center space-x-1">
          <img src="@/assets/ETH-logo.png" alt="ETH" class="w-7 h-7"/>
          <img src="@/assets/switch-horizontal.png" alt="switch" class="w-3 h-4"/>
          <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-7 h-7"/>
        </div>
        <div class="ml-2"><strong class="text-xl font-bold ">Ethereum</strong> / USDC</div>
      </div>
      <div class="font-bold">{{data?.startAmount }} - {{data?.endAmount}} USDC</div>
    </div>
    <hr class="bg-blue-25 h-1"/>
    <div class="py-8">
      <div class="flex items-center pl-4 pr-8">
        <img
          class="w-12 h-12"
          src="@/assets/triangle.png"
          alt="triangle"
        />
        <select class="border border-black rounded h-7 w-full" v-model="stakeData">
          <option
            v-for="(item, i) in data?.starkingReward"
            :key="i"
            :value="{duration: item?.duration, reward_rate: item?.reward_rate }"
          >
            {{item?.duration}} day ({{item?.minRewardRate}}% ~ {{item?.maxRewardRate}}%) 
          </option>
        </select>
      </div>

      <div class="flex items-center pl-4 pr-8" v-for="(item, i) in data?.descriptions" :key="i">
        <img
          class="w-12 h-12"
          src="@/assets/triangle.png"
          alt="triangle"
        />
        <div class="h-7">
          {{item}}
        </div>
      </div>
    </div>
    <hr class="bg-blue-25 h-1"/>
    <div class="p-4">
      <input type="number" class="w-full border rounded py-0.5 pl-4 mb-1" placeholder="USDC Amount" v-model="amount">
      <div v-if="typeof(amount) == 'number'"> 
        <div v-show="!isIllegal" class="text-red-600  text-xs ">Your staking amount is illegal, please change the staking amount</div>
      </div>
      <button class="bg-red-25 w-full text-white rounded py-0.5 hover:bg-red-400 mt-4" @click="stakeNow">Stake Now</button>
    </div>
    <div v-if="isModal" class="bg-red-100 flex flex-col justify-center items-center absolute z-20 px-8 py-4 rounded-xl top-36 font-bold mx-4">
      <div class="text-center">{{message}}</div>
      <button class="bg-red-300 rounded-full px-8 py-2 text-white mt-4" @click="isModal = !isModal">CONFIRM</button>
    </div>
  </div>
</template>
<script>
import { onMounted, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const stakeData = ref({duration: 3, reward_rate: 0.5})
  
    const isModal = ref(false)
    const message = ref('')
    const amount = ref(null)
    const isIllegal = ref(false)
    onMounted(async () => {
      await store.dispatch('card/fetchCard')
    })
    const data = computed(() => store.getters['card/getSlideById'](0))
    
    const wallet = computed(() => store.getters['user/getUserAddress'])
    const ethPrice = computed(() => store.getters['user/getEtherPrice'])
    
    const stakeNow = async () => {
      let someDate = new Date();
      let result = someDate.setDate(someDate.getDate() + stakeData.value.duration);
      let ending_time = new Date(result);

      let payload = {
        ending_at: ending_time.toUTCString(),
        wallet: wallet.value,
        amount: amount.value,
        staking_option: data?.value._id,
        reward_rate: stakeData.value?.reward_rate,
        eth_amount: amount.value/ethPrice.value,
      }
      if(typeof(amount.value) == 'number') {
        if(isIllegal.value) {
          try {
            let res = await store.dispatch( 'card/createStake', payload )
            isModal.value = true
            message.value = "😊 Staking Success! Please  wait for network confirmation"
          } catch (error) {
            console.log("error", error)
            isModal.value = true
            message.value = "😒 Try Again! Please wait until staking finish"
          }
        }
      }

    }
      
    watch(
      amount,
      () => {
        if(amount.value >= data?.value.startAmount && amount.value <= data?.value.endAmount ) {
          isIllegal.value = true
        } else {
          isIllegal.value = false
        }
      }
    )
  
    return { data, stakeNow, amount, stakeData, isModal, message, isIllegal }
  }
  };
</script>