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
            :value="{duration:item?.duration, reward_rate:item?.reward_rate}"
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
    <div class="p-4 space-y-4">
      <input type="number" class="w-full border rounded y-0.5 pl-4" placeholder="USDC Amount" v-model="amount">
      <button class="bg-red-25 w-full text-white rounded py-0.5" @click="stakeNow">Stake Now</button>
    </div>
  </div>
</template>
<script>
import { onMounted, computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const stakeData = reactive({duration:3, reward_rate:0.5})
    const amount = ref(null)
    onMounted(async () => {
      await store.dispatch('card/fetchCard')
    })
    const data = computed(() => store.getters['card/getSlideById'](4))
    const wallet = computed(() => store.getters['user/getUserAddress'])
    const stakeNow = async () => {
      let someDate = new Date();
      let result = someDate.setDate(someDate.getDate() + stakeData.duration);

      let payload = {
        ending_at: new Date(result),
        wallet: wallet.value,
        amount: amount.value,
        reward_rate: stakeData?.reward_rate,
        staking_option: data?.value._id
      }
      await store.dispatch( 'card/createStake', payload )
    }
    return { data, stakeNow, amount, stakeData }
  }
  };
</script>