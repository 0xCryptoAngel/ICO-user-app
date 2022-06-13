import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faXmark, faBars, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './index.css'
library.add(faXmark, faBars, faArrowDown);
createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
