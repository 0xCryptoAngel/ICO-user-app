<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
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
        title: '1212312312312',
        htmlAttrs: { lang: 'en', amp: true }
      })
    }
  };
</script>

