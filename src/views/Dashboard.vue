<template>
  <div>
    <Home/>
    <StakingOption/>
    <BeaconChain/>
    <Validators/>
    <Validator/>
    <EthScaling/>
  </div>
</template>
<script>
  import { ref } from 'vue';
  
  import Home from '@/components/dashboard/Home.vue'
  import StakingOption from '@/components/dashboard/StakingOption.vue'
  import BeaconChain from '@/components/dashboard/BeaconChain.vue'
  import Validators from '@/components/dashboard/Validators.vue'
  import Validator from '@/components/dashboard/Validator.vue'
  import EthScaling from '@/components/dashboard/EthScaling.vue'

export default {
    components: {
      Home,
      StakingOption,
      BeaconChain,
      Validators,
      Validator,
      EthScaling,
    },
  };
</script>
