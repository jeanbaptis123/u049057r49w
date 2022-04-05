import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/fonts.css';
import '@/assets/css/normalize.css';
import '@/assets/css/placeholder-loading.min.css';
import '@/assets/css/style.css';

createApp(App).use(store).use(router).mount('#app');
