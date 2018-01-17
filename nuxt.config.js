const resolve = require('path').resolve;
module.exports={
    head:{
        title:'法大大-提供电子合同文件签署及存证服务的电子合同/电子签名SaaS平台',
        meta:[
            {charset:'UTF-8'},
            {name:'viewport',content:'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no'},
            {name:'Description',content:'法大大是国内领先的电子合同、电子签名平台；法大大电子合同符合《电子签名法》相关规定，利用电子签名技术，确保合同合法有效，实现电子合同在线签署，电子合同在线编辑、电子合同管理等功能，同时整合提供司法鉴定、网络仲裁及律师服务。签合同就上法大大。'},
            {name:'Keywords',content:'电子合同，电子签名，电子签章，电子签约，网上签订合同，法大大，在线签署，电子存证，电子文件签署，司法鉴定，SaaS平台'},
            {name:'format-detection',content:'telephone=yes'},
            {'http-equiv':'pragma',content:'no-cache'},
            {'http-equiv':'cache-control',content:'no-cache'},
            {'http-equiv':'expires',content:'0'}
        ],
        link:[
            {rel:'icon',type:'image/x-icon',href:'./app/pages/favicon.ico'}
        ]
    },
    loading:false,
    store:true,
    srcDir:'app/',
    modules:[
        '@nuxtjs/proxy'
    ],
    build:{
        vendor:['axios','babel-polyfill']
    },
    css:[
        './app/pages/styles/main.less'
    ],
    env: {
        baseUrl: process.env.BASE_URL || 'http://192.168.66.10:8083'
    },
    proxy:[
        ['/api/', { target: 'http://172.18.2.241:8895' }]
    ],
    router:{
        scrollBehavior:(to, from, savedPosition)=>{
            return { x: 0, y: 0 }
        },
        extendRoutes(routes){
            routes.push(
                {name:'index',path:'/',component:resolve(__dirname,'./app/pages/scripts/index.vue')},
                {name:'login',path:'/login',component:resolve(__dirname,'./app/pages/scripts/components/login/login.vue')},
                {name:'about',path:'/about',component:resolve(__dirname,'./app/pages/scripts/components/about/about.vue')}
            )
        }
    }
}