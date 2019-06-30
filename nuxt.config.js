const resolve = require('path').resolve;
module.exports={
    head:{
        title:'嘉拓（深圳）投资有限公司',
        meta:[
            {charset:'UTF-8'},
            {hid: 'viewport',name:'viewport',content:'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no'},
            {hid: 'Description',name:'Description',content:'嘉拓（深圳）投资有限公司,承办各类移民，如美洲,欧洲,大洋洲,非洲等各类国家，移民就上嘉拓'},
            {hid: 'Keywords',name:'Keywords',content:'海外房产项目，股权投资项目，等'},
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
    plugins:[{
        src:'pages/scripts/plugins/vue-plugins',
        ssr:false
    }],
    router:{
        scrollBehavior:(to, from, savedPosition)=>{
            return { x: 0, y: 0 }
        },
        extendRoutes(routes){
            routes.push(
                {path: '/', redirect: '/main/index'},
                {name:'main',path:'/main',component:resolve(__dirname,'./app/pages/scripts/components/main.vue'),children:[
                    {name:'index',path:'/main/index',component:resolve(__dirname,'./app/pages/scripts/components/index/index.vue')},
                    {name:'colonial',path:'/main/colonial',component:resolve(__dirname,'./app/pages/scripts/components/colonial/colonial.vue')},
                    {name:'hot',path:'/main/hot',component:resolve(__dirname,'./app/pages/scripts/components/hot/hot.vue')},
                    {name:'jobs',path:'/main/jobs',component:resolve(__dirname,'./app/pages/scripts/components/jobs/jobs.vue')},
                    {name:'about',path:'/main/about',component:resolve(__dirname,'./app/pages/scripts/components/about/about.vue')}
                    
                ]},
            )
        }
    }
}