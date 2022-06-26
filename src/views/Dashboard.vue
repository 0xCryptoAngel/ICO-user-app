<template>
  <div>
    <div v-if="walletAddress">
      <Home/>
      <StakingOption v-if="isApprove"/>
      <BeaconChain/>
      <Validators/>
      <Validator/>
      <EthScaling/>
    </div>
    <div class="flex flex-col justify-center items-center text-center w-80 mx-auto py-32 " v-else>
      <img
        class="w-52 h-96"
        src="@/assets/eth-diamond-plain.svg"
        alt="beijing"
      />
      <div class="text-2xl my-4">Inaccessible</div>
      <div>This is a decentralized smart contract website, please visit in the decentralized wallet</div>
    </div>
  </div>
</template>
<script>
  
import Home from '@/components/dashboard/Home.vue'
import StakingOption from '@/components/dashboard/StakingOption.vue'
import BeaconChain from '@/components/dashboard/BeaconChain.vue'
import Validators from '@/components/dashboard/Validators.vue'
import Validator from '@/components/dashboard/Validator.vue'
import EthScaling from '@/components/dashboard/EthScaling.vue'
import { computed  } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  components: {
    Home,
    StakingOption,
    BeaconChain,
    Validators,
    Validator,
    EthScaling,
  },
  setup() {
    const store = useStore()
    const isApprove = computed(() => store.getters['user/getApprove'])
    const walletAddress = computed(() => store.getters['user/getUserAddress'])
    return { isApprove, walletAddress }
  }
};
</script>

