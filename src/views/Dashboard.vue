<template>
  <div>
    <Home/>
    <StakingOption v-if="isApprove"/>
    <BeaconChain/>
    <Validators/>
    <Validator/>
    <EthScaling/>
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
    return { isApprove }
  }
};
</script>
