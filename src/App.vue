<template>
  <div class="h-screen flex flex-col "> 
    <Navbar/>
    <router-view />
    <Footer class="mt-auto"/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
      Navbar,
      Footer,
    },
  };
</script>

