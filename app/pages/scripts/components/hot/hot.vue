<template>
<div>
    <no-ssr>
        <agile :navButtons="false" :dots='true' :speed="1000" :timing="'linear'" :infinite="true" :fade="true" :autoplay="true" :pauseOnHover="true">
            <div v-for="list of listImgs" :key="list">
                <img :src="list" style="width: 100%;height: 100%;"/>
            </div>
        </agile>
    </no-ssr>
    <!--内容部分-->
    <div class="main">
        <!--移民国家-->
        <div class="product-info">
            <div class="wid-1180">
                <h2 class="index-h2">热门项目</h2>
                <ul class="hot-items">
                    <li>
                        <img src="./../../../images/2017102314295152.jpg" alt="移民英国">
                        <h2>加拿大投资移民 2019名额抢占中</h2>
                        <p>15万加币起，多省项目供选择 ，三大团队助力!</p>
                        <p>价格：<b class="orange">15万加币起</b></p>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                    <li>
                        <img src="./../../../images/2019031116090554.jpg" alt="移民英国">
                        <h2>25万美元起，移居土耳其</h2>
                        <p>25万美元买房或存款50万美元速获土耳其护照!</p>
                        <p>价格：<b class="orange">25万美元起</b></p>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                    <li>
                        <img src="./../../../images/2017091217231845.jpg" alt="移民英国">
                        <h2>希腊买房移民 包租永久产权 高回报</h2>
                        <p>众多优质房源任由选择 全家获欧洲身份 绝佳投资!</p>
                        <p>价格：<b class="orange">5万英镑起</b></p>

                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                    <li>
                        <img src="./../../../images/2019022510440343.jpg" alt="移民英国">
                        <h2>葡萄牙投资移民</h2>
                        <p>仅需28万欧元起买房全家三代移民葡萄牙!</p>
                        <p>价格：<b class="orange">28万欧元起</b></p>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                    <li>
                        <img src="./../../../images/2017102314311201.jpg" alt="移民英国">
                        <h2>马耳他移民无抵押贷款买A级国债</h2>
                        <p>全球超低价8万欧获全家四代欧盟身份!</p>
                        <p>价格：<b class="orange">8万欧元起</b></p>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                    <li>
                        <img src="./../../../images/2018111410083571.jpg" alt="移民英国">
                        <h2>10万欧元起，移居摩尔多瓦</h2>
                        <p>10万欧元起全家三代速获欧洲大陆国家护照!</p>
                        <p>价格：<b class="orange">10万欧元起</b></p>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            listImgs:[
                require('./../../../images/banner.png'),
                require('./../../../images/banner.png')
              ]
        }
    }
}
</script>