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
import '../assets/marker-icon.png'
////////// Vue

///// app
import {createApp} from "vue";
import App from "./App.vue";
const app=createApp(App);

////// router
import router from "./router.config.js";
app.use(router);


/// directive
import vCollapsible from '../javascript/composables/vCollapsible.js'
app.directive('collapsible',vCollapsible)


/// global component
import column from "./components/Grid/column.vue";
import row from "./components/Grid/row.vue";
app.component('row',row);
app.component('column',column);

/// plugins
import {textColor,bgColor,btnColor} from "./composables/colorPlugin.js";
app.use(textColor)
app.use(bgColor)
app.use(btnColor)

/// dependencies
import ApexCharts from 'apexcharts';
import VueApexCharts from "vue3-apexcharts";
import VCalendar from 'v-calendar';
import vue3PhotoPreview from 'vue3-photo-preview';
import Toast from "vue-toastification";
import { plugin, defaultConfig } from '@formkit/vue'
app.use(VueApexCharts);
app.use(VCalendar);
app.use(vue3PhotoPreview);
app.use(Toast)
app.use(plugin, defaultConfig)
app.config.globalProperties.$apexcharts = ApexCharts;
app.mount('#app')