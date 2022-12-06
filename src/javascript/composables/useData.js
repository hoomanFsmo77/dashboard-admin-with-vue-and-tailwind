
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
            {title:'Charts',to:{name:'Charts'}},
            {title:'Gauge + Sparkline',to:{name:'charts-gauge-sparkline'}},
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

let defaultPageData=[
    {
        icon:'bi bi-speedometer',
        title:'Earnings',
        achieve:'$10,500',
        change:'20%',
        state:'increase',
        theme:'red',
    },{
        icon:'bi bi-book',
        title:'Readers',
        achieve:'584',
        change:'3%',
        state:'increase',
        theme:'blue',
    },{
        icon:'bi bi-journal-bookmark',
        title:'Bookmarks',
        achieve:'876',
        change:'10%',
        state:'increase',
        theme:'indigo',
    },{
        icon:'bi bi-globe-americas',
        title:'Visitors',
        achieve:'3,500',
        change:'5%',
        state:'increase',
        theme:'green',
    },
]

let chart1={
    series: [
        {
        name: 'Total Revenue',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Organic Search',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Facebook Ads',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
    ],
    chartOptions: {
        responsive:[
            {
                breakpoint:500,
                options:{
                    redrawOnWindowResize: true,
                    width: '200px',
                    legend:{
                        fontSize: '12px'
                    }
                }
            }
        ],
        chart: {
            type: 'bar',
            height: 350,
            fontFamily:'Montserrat,sans-serif',
            foreColor:'rgba(108,117,125,1)',
            stacked: false,
            toolbar:{
                show:true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: true,
                    zoomout: true,
                    pan: false,
                    reset:false,
                    customIcons: [],
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {

            }
        },
        fill: {
            opacity: 1,
            colors: ['rgba(79,70,229,0.9)', 'rgba(79,70,229,0.3)', 'rgba(220,38,38,0.9)']
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
        legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '16px',
            fontFamily: 'Montserrat,sans-serif',
            fontWeight: 400,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            customLegendItems: [],
            offsetX: 0,
            offsetY: 0,
            labels: {
                colors: undefined,
                useSeriesColors: false
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors:['rgba(79,70,229,0.9)', 'rgba(79,70,229,0.3)', 'rgba(220,38,38,0.9)'],
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 15,
                vertical: 10
            },
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
        }
    },
}


let activityData=[
    {
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'2 min ago',
        src:'./assets/profile_1.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'4 min ago',
        src:'./assets/profile_2.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'3 min ago',
        src:'./assets/profile_3.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'4 min ago',
        src:'./assets/profile_4.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'5 min ago',
        src:'./assets/profile_5.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'6 min ago',
        src:'./assets/profile_6.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'3 min ago',
        src:'./assets/profile_3.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'5 min ago',
        src:'./assets/profile_4.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'4 min ago',
        src:'./assets/profile_5.svg',
    },{
        name:'lorem ipsum',
        activity:'Lorem ipsum dolor',
        time:'1 min ago',
        src:'./assets/profile_1.svg',
        isLast:true
    },

]
let tableData1={
    th:[
        {title:'name',width:'21%'},
        {title:'company',width:'10%'},
        {title:'status',width:'10%'},
        {title:'contact',width:'10%'},
        {title:'date',width:'10%'},
    ],
    td:[
        {
            image:'./assets/profile_1.svg',
            name:'sorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'On Hold',
            statusClass:'yellow',
            progress:'13%',
            date:'2021/1/1',
        },
        {
            image:'./assets/profile_2.svg',
            name:'Lorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'Open',
            statusClass:'indigo',
            progress:'20%',
            date:'2021/2/1',
        },
        {
            image:'./assets/profile_3.svg',
            name:'Lorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'Open',
            statusClass:'indigo',
            progress:'48%',
            date:'2021/1/1',
        },
        {
            image:'./assets/profile_4.svg',
            name:'norem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'Closed',
            statusClass:'red',
            progress:'65%',
            date:'2021/5/1',
        },
        {
            image:'./assets/profile_5.svg',
            name:'Lorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'Open',
            statusClass:'indigo',
            progress:'77%',
            date:'2021/3/1',
        },
        {
            image:'./assets/profile_6.svg',
            name:'Lorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'in Progress',
            statusClass:'green',
            progress:'100%',
            date:'2021/1/1',
        },
        {
            image:'./assets/profile_1.svg',
            name:'Lorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'On Hold',
            statusClass:'yellow',
            progress:'13%',
            date:'2021/1/1',
        },
        {
            image:'./assets/profile_4.svg',
            name:'Lorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'Open',
            statusClass:'indigo',
            progress:'35%',
            date:'2021/1/1',
        },
        {
            image:'./assets/profile_2.svg',
            name:'Lorem ipsum',
            email:'Lorem ipsum dolor',
            companyName1:'Lorem ipsum',
            companyName2:'Lorem',
            status:'Closed',
            statusClass:'red',
            progress:'13%',
            date:'2021/1/1',
        },
    ]
}
let chart2={
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        chart: {
            type: 'donut',
            fontFamily: 'Montserrat,sans-serif',

        },
        fill:{
            colors: ['rgba(2,132,199,1)', 'rgba(2,132,199,0.8)', 'rgba(2,132,199,0.6)','rgba(2,132,199,0.5)','rgba(2,132,199,0.4)']

        },
        legend:{
          show:false,

        },
        dataLabels:{
          enabled:false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
}

let chart3={
    series: [42, 47, 52, 58, 65],
    chartOptions: {
        chart: {
            width: 201,
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1,
            colors:['rgba(79,70,229,1)','rgba(79,70,229,0.9)','rgba(79,70,229,0.8)','rgba(79,70,229,0.7)','rgba(79,70,229,0.6)']
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            show:false
        },
        dataLabels:{
            enabled:false
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        }
    },
}


export {sidebarMainData,sidebarDocsData,defaultPageData,chart1,activityData,tableData1,chart2,chart3}