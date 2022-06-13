<template>
  <div>
    <Home/>
    <StakingOption/>
    <BeaconChain/>
    <Validators/>
    <Validator/>
    <EthScaling/>
    <Footer/>
  </div>
</template>
<script>
  import { ref } from 'vue';
  import Footer from '@/components/Footer.vue'
  import Home from '@/components/dashboard/Home.vue'
  import StakingOption from '@/components/dashboard/StakingOption.vue'
  import BeaconChain from '@/components/dashboard/BeaconChain.vue'
  import Validators from '@/components/dashboard/Validators.vue'
  import Validator from '@/components/dashboard/Validator.vue'
  import EthScaling from '@/components/dashboard/EthScaling.vue'

export default {
    components: {
      // Navbar,
      Home,
      StakingOption,
      BeaconChain,
      Validators,
      Validator,
      EthScaling,
      Footer,
    },
  };
</script>
