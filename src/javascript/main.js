//////////// Tailwind.config
import '../style/Tailwind.config/Tailwind.base.scss'
import '../style/Tailwind.config/Tailwind.component.scss'
import '../style/Tailwind.config/Tailwind.utilities.scss'

////////// images
import '../assets/profiles/profile_1.svg'
import '../assets/profiles/profile_2.svg'
import '../assets/profiles/profile_3.svg'
import '../assets/profiles/profile_4.svg'
import '../assets/profiles/profile_5.svg'
import '../assets/profiles/profile_6.svg'
import '../assets/check.svg'
import '../assets/country/america.svg'
import '../assets/country/austria.svg'
import '../assets/country/england.svg'
import '../assets/country/france.svg'
import '../assets/country/india.svg'
import '../assets/country/germany.svg'
import '../assets/country/spain.svg'
import '../assets/country/thailand.svg'
import '../assets/circle.svg'
////////// Vue

////// component
import {createApp} from "vue";
import ApexCharts from 'apexcharts';
import VueApexCharts from "vue3-apexcharts";
import VCalendar from 'v-calendar';
import vue3PhotoPreview from 'vue3-photo-preview';
import column from "./components/Grid/column.vue";
import row from "./components/Grid/row.vue";
import vCollapsible from '../javascript/composables/vCollapsible.js'
////// router
import router from "./router.config.js";

///// app
import App from "./App.vue";
const app=createApp(App);

/// dependencies
app.component('row',row);
app.component('column',column);
app.use(router);
app.use(VueApexCharts);
app.use(VCalendar);
app.use(vue3PhotoPreview);
app.directive('collapsible',vCollapsible)
app.config.globalProperties.$apexcharts = ApexCharts;
app.mount('#app')