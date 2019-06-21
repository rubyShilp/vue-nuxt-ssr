const resolve = require('path').resolve;
module.exports={
    head:{
        title:'法大大-提供电子合同文件签署及存证服务的电子合同/电子签名SaaS平台',
        meta:[
            {charset:'UTF-8'},
            {hid: 'viewport',name:'viewport',content:'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no'},
            {hid: 'Description',name:'Description',content:'法大大是国内领先的电子合同、电子签名平台；法大大电子合同符合《电子签名法》相关规定，利用电子签名技术，确保合同合法有效，实现电子合同在线签署，电子合同在线编辑、电子合同管理等功能，同时整合提供司法鉴定、网络仲裁及律师服务。签合同就上法大大。'},
            {hid: 'Keywords',name:'Keywords',content:'电子合同，电子签名，电子签章，电子签约，网上签订合同，法大大，在线签署，电子存证，电子文件签署，司法鉴定，SaaS平台'},
            {hid: 'format-detection',name:'format-detection',content:'telephone=yes'},
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
        baseUrl: process.env.BASE_URL || 'http://127.0.0.1:8082'
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
                {path: '/', redirect: '/main/index'},
                {name:'main',path:'/main',component:resolve(__dirname,'./app/pages/scripts/components/main.vue'),children:[
                    {name:'/main/index',path:'/index',component:resolve(__dirname,'./app/pages/scripts/components/index/index.vue')},
                    {name:'/main/about',path:'/about',component:resolve(__dirname,'./app/pages/scripts/components/about/about.vue')}
                ]},
            )
        }
    }
}