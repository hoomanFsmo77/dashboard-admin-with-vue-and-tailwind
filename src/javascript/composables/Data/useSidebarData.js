
const sidebarMainData=[
    {
        id:1,
        title:'Dashboards',
        icon:'bi bi-house-door',
        isOpen:true,
        hasSub:true,
        subMenuList:[
            {title:'default',to:{name:'default'},isSelected:true},
            {title:'Cms',to:{name:'Cms'}},
            {title:'E-commerce',to:{name:'ECommerce'}},
            {title:'Projects',to:{name:'projects'}},
            {title:'Charts',to:{name:'charts'}},
        ]
    },
    {
        id:2,
        title:'CMS',
        icon:'bi bi-book',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Posts',to:{name:'Posts'}},
            {title:'Add new post',to:{name:'newPost'}},
            {title:'Categories',to:{name:'Categories'}},
            {title:'Media Library',to:{name:'MediaLibrary'}},
        ]
    },
    {
        id:3,
        title:'Widgets',
        icon:'bi bi-diagram-3',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Stats',to:{name:'Stats'}},
            {title:'Data',to:{name:'Data'}},
        ]
    },
    {
        id:4,
        title:'Ecommerce',
        icon:'bi bi-shop-window',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Products',to:{name:'Products'}},
            {title:'Products_New',to:{name:'Products_New'}},
            {title:'Orders',to:{name:'Orders'}},
            {title:'Order_details',to:{name:'Order_details'}},
            {title:'Customers',to:{name:'Customers'}},
        ]
    },
    {
        id:5,
        title:'Pages',
        icon:'bi bi-stack',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Profile',to:{name:'Profile'}},
            {title:'Pricing table',to:{name:'PricingTable'}},
            {title:'Contacts',to:{name:'Contacts'}},
            {title:'Invoice',to:{name:'Invoice'}},
            {title:'knowledge base',to:{name:'knowledgeBase'},isNew:true},
            {title:'knowledge base-Topic',to:{name:'knowledgeBase_Topic'},isNew:true},
        ]
    },
    {
        id:6,
        title:'User',
        icon:'bi bi-person-square',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Login page',to:{name:'LoginPage'}},
            {title:'Register',to:{name:'Register'}},
            {title:'Login v.2',to:{name:'Login2'},isNew:true},
            {title:'Register v.2',to:{name:'Register2'},isNew:true},
        ]
    },
    {
        id:7,
        title:'Components',
        icon:'bi bi-puzzle',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Cards',to:{name:'Cards'}},
            {title:'Calender',to:{name:'Calender'}},
            {title:'Gallery',to:{name:'Gallery'}},
            {title:'Loading buttons',to:{name:'LoadingButtons'}},
            {title:'Maps',to:{name:'Maps'}},
            {title:'Notifications',to:{name:'Notifications'}},
            {title:'Preloaders',to:{name:'Preloaders'}},
        ]
    },
    {
        id:8,
        title:'Charts',
        icon:'bi bi-pie-chart',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Charts',to:{name:'Chart'}},
            {title:'speedometer + Sparkline',to:{name:'charts-speedometer-sparkline'}},
        ]
    },
    {
        id:9,
        title:'Forms',
        icon:'bi bi-ui-radios',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Basic forms',to:{name:'Basic_forms'}},
            {title:'Advance forms',to:{name:'Advance_forms'}},
            {title:'File uploads',to:{name:'File_uploads'}},
            {title:'Text editor',to:{name:'Text_editor'}},
            {title:'Validation',to:{name:'Validation'}},
        ]
    },
    {
        id:10,
        title:'Tables',
        icon:'bi bi-table',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Tailwind tables',to:{name:'Tailwind_tables'}},
            {title:'Datatable',to:{name:'Datatable'}},
        ]
    },

]
let sidebarDocsData=[
    {
        id:11,
        title:'Introduction',
        icon:'bi bi-code-slash',
        isOpen:false,
        hasSub:false,
        to:{name:'Introduction'}
    },{
        id:12,
        title:'Directory structure',
        icon:'bi bi-compass',
        isOpen:false,
        hasSub:false,
        to:{name:'Directory_structure'}
    },{
        id:13,
        title:'Nuxt.js',
        icon:'bi bi-keyboard',
        isOpen:false,
        hasSub:false,
        to:{name:'Nuxt'}
    },
    {
        id:14,
        title:'Css',
        icon:'bi bi-pen-fill',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'CSS components',to:{name:'CSS_components'}},
            {title:'Customizing CSS',to:{name:'Customizing_CSS'}},
        ]
    },
    {
        id:15,
        title:'Credits',
        icon:'bi bi-bricks',
        isOpen:false,
        hasSub:false,
        to:{name:'Credits'}
    },{
        id:15,
        title:'Changelog',
        icon:'bi bi-file-earmark-plus',
        isOpen:false,
        hasSub:false,
        to:{name:'Changelog'}
    },


]


export {sidebarDocsData,sidebarMainData}