//////////// Tailwind.config
import '../style/Tailwind.config/Tailwind.base.scss'
import '../style/Tailwind.config/Tailwind.component.scss'
import '../style/Tailwind.config/Tailwind.utilities.scss'


////////// Vue
import {createApp} from "vue";
import router from "./router.config.js";
import App from "./App.vue";
const app=createApp(App)
app.use(router)
app.mount('#app')