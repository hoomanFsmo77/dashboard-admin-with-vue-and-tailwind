import {createRouter,createWebHashHistory} from "vue-router";

////////// Dashboards components
import DashboardsIndex from './pages/Dashboards/index.vue'
import Default from "./pages/Dashboards/Default.vue";
import CMS from  './pages/Dashboards/CMS.vue';
import ECommerce from "./pages/Dashboards/E-commerce.vue";
import projects from "./pages/Dashboards/Projects.vue";
import charts from "./pages/Dashboards/Charts.vue";

////////// CMS components
import CMSIndex from './pages/CMS/index.vue'
import Posts from './pages/CMS/Posts.vue'
import newPost from './pages/CMS/newPost.vue'
import Categories from './pages/CMS/Categories.vue'
import MediaLibrary from './pages/CMS/MediaLibrary.vue'


const routes=[

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
    }
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