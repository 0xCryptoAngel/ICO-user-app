<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Ethereum Template` : `Ethereumasdasdasd Template` }}</template>
  </metainfo>
  <Navbar/>
  <router-view />
  <Footer/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useMeta } from 'vue-meta'

export default {
    components: {
      Navbar,
      Footer,
    },
    setup () {
      useMeta({
        title: 'My Example App',
        htmlAttrs: { lang: 'en', amp: true }
      })
    }
  };
</script>

