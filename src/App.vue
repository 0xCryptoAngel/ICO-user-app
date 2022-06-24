<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | META` : `META` }}</template>
  </metainfo>
  <div>{{JSON.stringify(metainfo)}}</div>
  <Navbar/>
  <router-view />
  <Footer/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useMeta, useActiveMeta } from 'vue-meta/dist/vue-meta.esm-browser'

export default {
    components: {
      Navbar,
      Footer,
    },
    setup () {
      useMeta({
        title: 'qwertyuiopasdfghjkwertyui',
        htmlAttrs: { lang: 'en' }
      })

      const metainfo = useActiveMeta()
      return {
        metainfo
      }
    }
  };
</script>

