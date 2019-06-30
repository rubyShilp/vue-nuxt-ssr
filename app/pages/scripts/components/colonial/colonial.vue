<template>
<div>
    <no-ssr>
        <agile :navButtons="false" :dots='true' :speed="1000" :timing="'linear'" :infinite="true" :fade="true" :autoplay="true" :pauseOnHover="true">
            <div v-for="list of listImgs" :key="list">
                <img :src="list" style="width: 100%;height: 100%;"/>
            </div>
        </agile>
    </no-ssr>
    <div class="main">
        <!--移民国家-->
        <div class="product-info">
            <div class="wid-1180">
                <h2 class="index-h2">海外移民</h2>
                <ul class="application">
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic01.jpg" alt="美国">
                                    <p class="tit-tip">美国</p>
                                </div>
                                <div class="text-desc">
                                    <h3>美国</h3>
                                    <p>无语言要求，无移民监限制<br>投资期满后返还投资款项<br>全家得绿卡，享受美国各类福利</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic02.jpg" alt="加拿大">
                                    <p class="tit-tip">加拿大</p>
                                </div>
                                <div class="text-desc">
                                    <h3>加拿大</h3>
                                    <p>拥有优质的居住环境，高质量教育<br>福利体系完善，社会制度开明<br>双语社会，移民融合度高</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic03.jpg" alt="澳大利亚">
                                    <p class="tit-tip">澳大利亚</p>
                                </div>
                                <div class="text-desc">
                                    <h3>澳大利亚</h3>
                                    <p>移民澳大利亚，同享新西兰永居<br>享受大国福利、世界教育<br>多个城市常列世界宜居城市榜单</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic04.jpg" alt="英国">
                                    <p class="tit-tip">英国</p>
                                </div>
                                <div class="text-desc">
                                    <h3>英国</h3>
                                    <p>获批平均仅1个月，侨外最快当天获批<br>3-18岁随行子女享免费公立教育</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic05.jpg" alt="爱尔兰">
                                    <p class="tit-tip">爱尔兰</p>
                                </div>
                                <div class="text-desc">
                                    <h3>爱尔兰</h3>
                                    <p>无移民监、语言、管理背景等要求<br>先获批得身份后投资<br>护照免签185国，直通欧洲</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic06.jpg" alt="德国">
                                    <p class="tit-tip">德国</p>
                                </div>
                                <div class="text-desc">
                                    <h3>德国</h3>
                                    <p>总费用14万欧元，可分期付款<br>本科申请全家同行，0登陆无语言要求<br>1周获批90天登陆，21个月可转永居</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic07.jpg" alt="意大利">
                                    <p class="tit-tip">意大利</p>
                                </div>
                                <div class="text-desc">
                                    <h3>意大利</h3>
                                    <p>门槛较低，办理轻松<br>无背景、语言要求，无移民监<br>审批仅3-4个月，享受欧盟永居<br></p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="immigration-details.html">
                            <div class="port-1 effect-1">
                                <div class="image-box">
                                    <img src="./../../../images/pic08.jpg" alt="新西兰">
                                    <p class="tit-tip">新西兰</p>
                                </div>
                                <div class="text-desc">
                                    <h3>新西兰</h3>
                                    <p>获签后无移民监、永久有效；<br>无遗产税，无资本利得税；<br>公民同享澳大利亚永居身份<br></p>
                                </div>
                            </div>
                        </a>
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