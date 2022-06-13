<template>
  <section class="bg-blue-25 px-8 ">
    <div class="text-4xl py-8">Staking Options</div>
 
    <vueper-slides
      class="no-shadow px-8"
      fixed-height="500px"
      :bullets="false" 
      :arrows-outside="true"
      :visible-slides="3"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide  v-for="(slide, i) in slides" :key="i">
          <template #content>
            <component
              :is="slide"
            />
          </template>
        </vueper-slide>
      </vueper-slides>
    
  </section>
</template>
<script>
  import { ref, reactive } from 'vue';
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import Card1 from '@/components/dashboard/slides/Card1.vue'
  import Card2 from '@/components/dashboard/slides/Card2.vue'
  import Card3 from '@/components/dashboard/slides/Card3.vue'
  import Card4 from '@/components/dashboard/slides/Card4.vue'
  import Card5 from '@/components/dashboard/slides/Card5.vue'
  import Card6 from '@/components/dashboard/slides/Card6.vue'
  import 'vueperslides/dist/vueperslides.css'
 
  export default {
    components: { 
      VueperSlides, 
      VueperSlide,
      Card1,
      Card2,
      Card3,
      Card4,
      Card5,
      Card6,
    },	
    data () {
        return 
    },
    setup() {
      let menu = ref(false);
      let user = ref(false);
      const test = reactive({comp: Card1});
      const isMenu = () => (menu.value = !menu.value);
      const isUser = () => (user.value = !user.value);
      const slides = [ Card1, Card2, Card3, Card4, Card5, Card6 ]
      return { menu, isMenu, user, isUser, slides, test };
      
    },
  };
</script>
