
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
    },{
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
            {title:'Stats',to:'/'},
            {title:'Data',to:'/'},
        ]
    },{
        id:4,
        title:'E-commerce',
        icon:'bi bi-shop-window',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Products',to:'/'},{title:'Products-New',to:'/'},{title:'Order-details',to:'/'},{title:'Customers',to:'/'},
        ]
    },{
        id:5,
        title:'Pages',
        icon:'bi bi-stack',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Profile',to:'/'},
            {title:'Pricing table',to:'/'},
            {title:'Contacts',to:'/'},
            {title:'Invoice',to:'/'},
            {title:'knowledge base',to:'/',isNew:true},
            {title:'knowledge base-Topic',to:'/',isNew:true},
        ]
    },{
        id:6,
        title:'User',
        icon:'bi bi-person-square',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Login page',to:'/'},
            {title:'Register',to:'/'},
            {title:'Login v.2',to:'/',isNew:true},
            {title:'Register v.2',to:'/',isNew:true},
        ]
    },{
        id:7,
        title:'Components',
        icon:'bi bi-puzzle',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Cards',to:'/'},
            {title:'Calender',to:'/'},
            {title:'Gallery',to:'/'},
            {title:'Loading buttons',to:'/'},
            {title:'Maps',to:'/'},
            {title:'Notifications',to:'/'},
            {title:'Preloaders',to:'/'},
        ]
    },{
        id:8,
        title:'Charts',
        icon:'bi bi-pie-chart',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Charts',to:'/'},
            {title:'Gauge + Sparkline',to:'/'},
        ]
    },{
        id:9,
        title:'Forms',
        icon:'bi bi-ui-radios',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Basic forms',to:'/'},
            {title:'Advance forms',to:'/'},
            {title:'File uploads',to:'/'},
            {title:'Text editor',to:'/'},
            {title:'Validation',to:'/'},
        ]
    },{
        id:10,
        title:'Tables',
        icon:'bi bi-table',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Tailwind tables',to:'/'},
            {title:'Datatable',to:'/'},
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
        to:'/#'
    },{
        id:12,
        title:'Directory structure',
        icon:'bi bi-compass',
        isOpen:false,
        hasSub:false,
        to:'/#'
    },{
        id:13,
        title:'Nuxt.js',
        icon:'bi bi-keyboard',
        isOpen:false,
        hasSub:false,
        to:'/#'
    },
    {
        id:14,
        title:'Css',
        icon:'bi bi-pen-fill',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'CSS components',to:'/'},
            {title:'Customizing CSS',to:'/'},
        ]
    },
    {
        id:15,
        title:'Credits',
        icon:'bi bi-bricks',
        isOpen:false,
        hasSub:false,
        to:'/#'
    },{
        id:15,
        title:'Changelog',
        icon:'bi bi-file-earmark-plus',
        isOpen:false,
        hasSub:false,
        to:'/#'
    },


]




export {sidebarMainData,sidebarDocsData}