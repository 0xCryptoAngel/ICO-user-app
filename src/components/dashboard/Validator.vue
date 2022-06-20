<template>
  <section class="px-12 py-32 bg-blue-30">
    <div class="font-semibold mb-4 text-3xl">Become a Validator</div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      dolor sit natus assumenda ea at et sint explicabo amet eveniet?
    </div>

    <div class="flex flex-wrap justify-center my-4">
      <div class="py-4 w-120 mx-8">
        <div class="text-7xl">📚</div>
        <div class="text-2xl font-semibold my-4">1. Learn about your responsibilities</div>
        <div>The Ethereum upgrades will only be successful if validators understand the risks and responsibilities.</div>
      </div>

      <div class="py-4 w-120 mx-8">
        <div class="text-7xl">💰</div>
        <div class="text-2xl font-semibold my-4">2. Deposit your Eth</div>
        <div>Once you're comfortable, you'll go through generating your keys and depositing your ETH.</div>
      </div>

      <div class="py-4 w-120 mx-8">
        <div class="text-7xl">🕰</div>
        <div class="text-2xl font-semibold my-4">3. Wait to become active</div>
        <div>Once set up, your validator won't become active straight away. Use this time to complete the checklist and get some extra practice on a testnet.</div>
      </div>
    </div>

    <div class="flex justify-center my-4 hover:scale-105 hover:transition hover:duration-500">
      <Wallet/>
    </div>

  </section>
</template>   
<script>
  import Wallet from '@/components/dashboard/Wallet.vue'
  export default {
    components: {
      Wallet,
    }
  };
</script>
