<template>
  <div>
    <div class="text-center  text-4xl text-blue-800 my-20">Crossmint example in Ethereum</div>
    <div class="flex justify-center space-x-5">
      <div class="border-4 border-red-800 flex flex-col items-center p-4 rounded-xl">
        <div class="text-xl text-center mb-1">Type( {{price}} ETH )</div>
        <img
          class="w-52 h-60"
          src="./assets/type1.jpeg"
          alt="type1"
        />

        <div class="flex justify-between my-2">
          <button class="p-2 bg-blue-400 rounded w-10 h-10 flex justify-center items-center" @click="decrease">
            <div class="font-bold" >—</div>
          </button>
          <input type="text" class="w-12 border border-black mx-2 rounded text-3xl text-center" v-model="amount"/>
          <select v-model="price" class="border border-black rounded mr-2 text-3xl" @change="onchange()">
            <option value="0.01">0.01</option>
            <option value="0.02">0.02</option>
            <option value="0.03">0.03</option>
            <option value="0.04">0.04</option>
          </select>
          <button class="p-2 bg-blue-400 rounded w-10 h-10 flex justify-center items-center" @click="increase">
            <div class="font-bold text-3xl">+</div>
          </button>
        </div>
        <crossmint-pay-button
          collectionTitle="Completed Test NFT"
          collectionDescription="This is completed test NFT"
          clientId="4d0694e3-7b30-4b30-8de1-df6a7810572b"
          collectionPhoto="https://ipfs.io/ipfs/QmYHXkhnJR5S6AQQ9TvNVpmAJPbocHje6eVsqPtGdMuEiA/1.png"
          :mintConfig="mintValue.value"
          environment="staging"
        />
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, ref, watch } from 'vue'
export default {
  
  setup() {
    const mintValue = reactive({})
    const price = ref('0.01')
    const amount = ref(1)
    const decrease = () => {
      if (amount.value > 1) {
        amount.value--;
      }
    }
    const increase = () => {
      amount.value++;
    }
    const onchange = () => {
      mintValue.value = {"type":"erc-721", "price":(price.value * amount.value).toString(), "to": "0xdAb1a1854214684acE522439684a145E62505233", "num":amount.value.toString()}
      console.log("price", mintValue.value)
    }
    watch(
      amount, () => {
        mintValue.value = {"type":"erc-721", "price":(price.value * amount.value).toString(), "to": "0xdAb1a1854214684acE522439684a145E62505233", "num":amount.value.toString()}
      }
    )
    return {
      mintValue,
      amount,
      price,
      decrease,
      increase,
      onchange,
    }
  },
}
</script>