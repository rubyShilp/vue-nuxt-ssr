<template>
<div>
    <!--导航-->
    <div class="nav-box">
        <ul class="nav">
            <li :class="{'cur':index==1}" @click="selectUrl(1)"><nuxt-link to="/main/index">首&nbsp;&nbsp;页</nuxt-link></li>
            <li :class="{'cur':index==2}" @click="selectUrl(2)"><nuxt-link to="/main/colonial">海外移民</nuxt-link></li>
            <li :class="{'cur':index==3}" @click="selectUrl(3)"><nuxt-link to="/main/hot">热门项目</nuxt-link></li>
            <li :class="{'cur':index==4}" @click="selectUrl(4)"><nuxt-link to="/main/jobs">招贤纳士</nuxt-link></li>
            <li :class="{'cur':index==5}" @click="selectUrl(5)"><nuxt-link to="/main/about">关于我们</nuxt-link></li>
        </ul>
    </div>
    <router-view></router-view>
    <!--页脚部分-->
    <div class="footer">
        <h2>嘉拓（深圳）投资有限公司</h2>
        <ul class="phone-us">
            <li>联系热线：0755-26641927</li>
            <li><a href="/main/about">关于我们</a></li>
            <li><a href="/main/jobs">招贤纳士</a></li>
        </ul>
        <div class="copyright">
            <p>© 2019-2019 嘉拓（深圳）投资有限公司版权所有. 保留一切权利. </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            index:0
        }
    },
    mounted(){
        console.log(sessionStorage.getItem('INDEX'));
        this.index=sessionStorage.getItem('INDEX');
    },
    methods:{
        selectUrl(index){
           sessionStorage.setItem('INDEX',index);
           this.index=index;
        }
    }
}
</script>