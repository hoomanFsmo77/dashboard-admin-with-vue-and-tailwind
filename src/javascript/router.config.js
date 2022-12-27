import {createRouter,createWebHashHistory} from "vue-router";

//////////// main content
import Main from '../javascript/Main.vue'


////////// Dashboards components
import DashboardsIndex from './pages/Dashboards/index.vue'
import Default from "./pages/Dashboards/Default.vue";
const CMS=()=>import('./pages/Dashboards/CMS.vue')
const ECommerce=()=>import("./pages/Dashboards/E-commerce.vue")
const projects=()=>import("./pages/Dashboards/Projects.vue")
const charts=()=>import("./pages/Dashboards/Charts.vue")

////////// CMS components
import CMSIndex from './pages/CMS/index.vue'
const Posts=()=> import('./pages/CMS/Posts.vue')
const newPost=()=> import('./pages/CMS/newPost.vue')
const Categories=()=> import('./pages/CMS/Categories.vue')
const MediaLibrary=()=> import('./pages/CMS/MediaLibrary.vue')


////////// widget components
import widgetIndex from './pages/Widgets/index.vue'
const Data=()=>import('./pages/Widgets/Data.vue')
const Stats=()=>import('./pages/Widgets/Stats.vue')

///////// ecommerce components
import EcommerceIndex from  './pages/Ecommerce/index.vue';
const Products=()=>import('./pages/Ecommerce/Products.vue')
const Products_New=()=>import('./pages/Ecommerce/Products-New.vue')
const orders=()=>import('./pages/Ecommerce/Orders.vue')
const Order_details=()=>import('./pages/Ecommerce/Order-details.vue')
const Customers=()=>import('./pages/Ecommerce/Customers.vue')

//////// pages components
import PagesIndex from './pages/Pages/index.vue'
const Profile=()=>import('./pages/Pages/Profile.vue')
const PricingTable=()=>import('./pages/Pages/PricingTable.vue')
const Contacts=()=>import('./pages/Pages/Contacts.vue')
const Invoice=()=>import('./pages/Pages/Invoice.vue')
const knowledgeBase=()=>import('./pages/Pages/knowledgeBase.vue')
const knowledgeBase_Topic=()=>import('./pages/Pages/knowledgeBase-Topic.vue')

/////// users component
const LoginPage=()=>import('./pages/User/LoginPage.vue')
const Register=()=>import('./pages/User/Register.vue')
const Login2=()=>import('./pages/User/Login2.vue')
const Register2=()=>import('./pages/User/Register2.vue')

////// component page components
import ComponentsIndex from './pages/Components/index.vue';
const Cards=()=>import('./pages/Components/Cards.vue')
const Calender=()=>import('./pages/Components/Calender.vue')
const Gallery=()=>import('./pages/Components/Gallery.vue')
const LoadingButtons=()=>import('./pages/Components/LoadingButtons.vue')
const Maps=()=>import('./pages/Components/Maps.vue')
const Notifications=()=>import('./pages/Components/Notifications.vue')
const Preloaders=()=>import('./pages/Components/Preloaders.vue')

///// charts components
import ChartsIndex from './pages/Charts/index.vue'
const Charts=()=>import('./pages/Charts/Charts.vue')
const charts_gauge_sparkline=()=>import('./pages/Charts/charts-gauge-sparkline.vue')

///// forms components
import FormsIndex from './pages/Forms/index.vue';
const Basic_forms=()=>import('./pages/Forms/Basic-forms.vue')
const Advance_forms=()=>import('./pages/Forms/Advance-forms.vue')
const File_uploads=()=>import('./pages/Forms/File-uploads.vue')
const Text_editor=()=>import('./pages/Forms/Text-editor.vue')
const Validation=()=>import('./pages/Forms/Validation.vue')

//// tables components
import TablesIndex from  './pages/Tables/index.vue'
const Tailwind_tables=()=>import('./pages/Tables/Tailwind-tables.vue')
const Datatable=()=>import('./pages/Tables/Datatable.vue')

///// docs components
import docsIndex from './pages/Docs/index.vue'
const Introduction=()=>import('./pages/Docs/Introduction.vue')
const Directory_structure=()=>import('./pages/Docs/Directory-structure.vue')
const Nuxt=()=>import('./pages/Docs/Nuxt.vue')
const CSS_components=()=>import('./pages/Docs/CSS-components.vue')
const Customizing_CSS=()=>import('./pages/Docs/Customizing-CSS.vue')
const Credits=()=>import('./pages/Docs/Credits.vue')
const Changelog=()=>import('./pages/Docs/Changelog.vue')




const routes=[
    {
        path:'',
        name:'Main',
        component: Main,
        redirect:{
            name:'default'
        },
        children: [
            {
                path:'/Dashboards',
                name:'Dashboards',
                component:DashboardsIndex,
                children:[
                    {
                        path:'default',
                        name:'default',
                        component:Default,
                    },{
                        path:'Cms',
                        name:'Cms',
                        component:CMS,
                    },{
                        path:'ECommerce',
                        name:'ECommerce',
                        component:ECommerce,
                    },{
                        path:'projects',
                        name:'projects',
                        component:projects,
                    },{
                        path:'charts',
                        name:'charts',
                        component:charts,
                    },
                ]
            },
            {
                path:'/CMS',
                name:'CMS',
                component: CMSIndex,
                children: [
                    {
                        path:'Posts',
                        name:'Posts',
                        component:Posts,
                    },{
                        path:'newPost',
                        name:'newPost',
                        component:newPost,
                    },{
                        path:'Categories',
                        name:'Categories',
                        component:Categories,
                    },{
                        path:'MediaLibrary',
                        name:'MediaLibrary',
                        component:MediaLibrary,
                    },
                ]
            },
            {
                path:'/Widgets',
                name:'Widgets',
                component: widgetIndex,
                children: [
                    {
                        path:'Data',
                        name:'Data',
                        component:Data,
                    },{
                        path:'Stats',
                        name:'Stats',
                        component:Stats,
                    }
                ]
            },
            {
                path:'/Ecommerce',
                name:'Ecommerce',
                component: EcommerceIndex,
                children: [
                    {
                        path:'Products',
                        name:'Products',
                        component:Products,
                    },{
                        path:'Products_New',
                        name:'Products_New',
                        component:Products_New,
                    },{
                        path:'Orders',
                        name:'Orders',
                        component:orders,
                    },{
                        path:'Order_details',
                        name:'Order_details',
                        component:Order_details,
                    },{
                        path:'Customers',
                        name:'Customers',
                        component:Customers,
                    }
                ]
            },
            {
                path:'/Pages',
                name:'Pages',
                component: PagesIndex,
                children: [
                    {
                        path:'Profile',
                        name:'Profile',
                        component:Profile,
                    },{
                        path:'PricingTable',
                        name:'PricingTable',
                        component:PricingTable,
                    },{
                        path:'Contacts',
                        name:'Contacts',
                        component:Contacts,
                    },{
                        path:'Invoice',
                        name:'Invoice',
                        component:Invoice,
                    },{
                        path:'knowledgeBase',
                        name:'knowledgeBase',
                        component:knowledgeBase,
                    },{
                        path:'knowledgeBase_Topic',
                        name:'knowledgeBase_Topic',
                        component:knowledgeBase_Topic,
                    }
                ]
            },
            {
                path:'/Components',
                name:'Components',
                component: ComponentsIndex,
                children: [
                    {
                        path:'Cards',
                        name:'Cards',
                        component:Cards,
                    },{
                        path:'Calender',
                        name:'Calender',
                        component:Calender,
                    },{
                        path:'Gallery',
                        name:'Gallery',
                        component:Gallery,
                    },{
                        path:'LoadingButtons',
                        name:'LoadingButtons',
                        component:LoadingButtons,
                    },{
                        path:'Maps',
                        name:'Maps',
                        component:Maps,
                    },{
                        path:'Notifications',
                        name:'Notifications',
                        component:Notifications,
                    },{
                        path:'Preloaders',
                        name:'Preloaders',
                        component:Preloaders,
                    }
                ]
            },
            {
                path:'/Charts',
                name:'Charts',
                component: ChartsIndex,
                children: [
                    {
                        path:'Chart',
                        name:'Chart',
                        component:Charts,
                    },{
                        path:'charts-speedometer-sparkline',
                        name:'charts-speedometer-sparkline',
                        component:charts_gauge_sparkline,
                    }
                ]
            },
            {
                path:'/Forms',
                name:'Forms',
                component: FormsIndex,
                children: [
                    {
                        path:'Basic_forms',
                        name:'Basic_forms',
                        component:Basic_forms,
                    },{
                        path:'Advance_forms',
                        name:'Advance_forms',
                        component:Advance_forms,
                    },{
                        path:'File_uploads',
                        name:'File_uploads',
                        component:File_uploads,
                    },{
                        path:'Text_editor',
                        name:'Text_editor',
                        component:Text_editor,
                    },{
                        path:'Validation',
                        name:'Validation',
                        component:Validation,
                    }
                ]
            },
            {
                path:'/Tables',
                name:'Tables',
                component: TablesIndex,
                children: [
                    {
                        path:'Tailwind_tables',
                        name:'Tailwind_tables',
                        component:Tailwind_tables,
                    },{
                        path:'Datatable',
                        name:'Datatable',
                        component:Datatable,
                    }
                ]
            },
            {
                path:'/docs',
                name:'docs',
                component: docsIndex,
                redirect:{
                  name:'Introduction'
                },
                children: [
                    {
                        path:'Introduction',
                        name:'Introduction',
                        component:Introduction,
                    },{
                        path:'Directory_structure',
                        name:'Directory_structure',
                        component:Directory_structure,
                    },{
                        path:'Nuxt',
                        name:'Nuxt',
                        component:Nuxt,
                    },{
                        path:'CSS_components',
                        name:'CSS_components',
                        component:CSS_components,
                    },{
                        path:'Customizing_CSS',
                        name:'Customizing_CSS',
                        component:Customizing_CSS,
                    },{
                        path:'Credits',
                        name:'Credits',
                        component:Credits,
                    },{
                        path:'Changelog',
                        name:'Changelog',
                        component:Changelog,
                    }
                ]
            },


        ]
    },
    {
        name:'LoginPage',
        path: '/LoginPage',
        component: LoginPage
    },
    {
        name:'Register',
        path: '/Register',
        component: Register
    },
    {
        name:'Login2',
        path: '/Login2',
        component: Login2
    },
    {
        name:'Register2',
        path: '/Register2',
        component: Register2
    },


]


const router=createRouter({
    history:createWebHashHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else{
            return  {
                top:0,
                behavior:'smooth'
            }
        }

    }
})

export default router