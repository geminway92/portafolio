import { createApp } from 'vue'
import Router from './router';
import App from '../src/App.vue'
import './css/styles.css'


createApp(App).use(Router).mount('#app')
