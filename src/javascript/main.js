//////////// Tailwind.config
import '../style/Tailwind.config/Tailwind.base.scss'
import '../style/Tailwind.config/Tailwind.component.scss'
import '../style/Tailwind.config/Tailwind.utilities.scss'

////////// images
import '../assets/profile_1.svg'
import '../assets/profile_2.svg'
import '../assets/profile_3.svg'
import '../assets/profile_4.svg'
import '../assets/profile_5.svg'
import '../assets/profile_6.svg'
import '../assets/check.svg'

////////// Vue
import {createApp} from "vue";
import ApexCharts from 'apexcharts';
import VueApexCharts from "vue3-apexcharts";
import router from "./router.config.js";
import App from "./App.vue";
import row from "./components/Grid/row.vue";
import column from "./components/Grid/column.vue";
const app=createApp(App)
app.component('row',row)
app.component('column',column)
app.use(router)
app.use(VueApexCharts)
app.config.globalProperties.$apexcharts = ApexCharts;
app.mount('#app')