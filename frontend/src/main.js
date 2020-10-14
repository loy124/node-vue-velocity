import Vue from 'vue'
import App from './App.vue';
import { Icon } from 'leaflet';
import '@/assets/css/tailwind.css';
import 'leaflet/dist/leaflet.css';
import Directives from './plugin/directives';
import router from './router';
import store from './store';
import io from "socket.io-client";
const socket = io('http://localhost:8000');

Vue.prototype.$socket = socket;

Vue.config.productionTip = false
Vue.use(Directives);

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



