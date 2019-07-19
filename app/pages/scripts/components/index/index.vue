<template>
<div>
    <!--banner-->
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
                <h2 class="index-h2">热门项目<a href="javaScript:;" @click="selectUrl(2)" class="more">更多</a></h2>
                <ul class="hot-items">
                    <li>
                        <a href="javaScript:;">
                            <img src="./../../../images/2017102314295152.jpg" alt="移民英国">
                            <h2>加拿大投资移民 2019名额抢占中</h2>
                            <p>15万加币起，多省项目供选择 ，三大团队助力!</p>
                            <p>价格：<b class="orange">15万加币起</b></p>
                        </a>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                    <li>
                        <a href="javaScript:;">
                            <img src="./../../../images/2019031116090554.jpg" alt="移民英国">
                            <h2>25万美元起，移居土耳其</h2>
                            <p>25万美元买房或存款50万美元速获土耳其护照!</p>
                            <p>价格：<b class="orange">25万美元起</b></p>
                        </a>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                    <li>
                        <a href="javaScript:;">
                            <img src="./../../../images/2019022510440343.jpg" alt="移民英国">
                            <h2>葡萄牙投资移民</h2>
                            <p>仅需28万欧元起买房全家三代移民葡萄牙!</p>
                            <p>价格：<b class="orange">28万欧元起</b></p>
                        </a>
                        <div class="telphone">
                            <a href="details.html" class="big-btn">查看详情</a>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2786876367&amp;site=ciya.cn&amp;menu=yes" class="big-btn">咨询</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--移民国家-->
        <div class="product-info bg-gray">
            <div class="wid-1180">
                <h2 class="index-h2">海外移民<a href="javaScript:;" @click="selectUrl(1)" class="more">更多</a></h2>
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
        <!--联系我们-->
        <div class="product-info">
            <div class="wid-1180">
                <h2 class="index-h2">私人订制</h2>
                <ul class="custom-project">
                    <li><input placeholder="您的姓名" v-model="sendMail.name"/></li>
                    <li><input placeholder="您的电话" v-model="sendMail.mobile"/></li>
                    <li><select name="message" v-model="sendMail.objective">
                            <option value="" disabled="" selected="">移民目的</option>
                            <option value="子女教育">子女教育</option>
                            <option value="应对CRS">应对CRS</option>
                            <option value="养老规划">养老规划</option>
                            <option value="出行便利">出行便利</option>
                            <option value="海外置业">海外置业</option>
                            <option value="居住环境">居住环境</option>
                            <option value="投资理财">投资理财</option>
                            <option value="福利保障">福利保障</option>
                            <option value="税务规划">税务规划</option>
                            <option value="工作就业">工作就业</option>
                            <option value="创业经商">创业经商</option>
                            <option value="资产保值">资产保值</option>
                        </select></li>
                    <li><select name="city" v-model="sendMail.country">
                            <option value="" disabled="" selected="">移民国家</option>
                            <option value="美国">美国</option>
                            <option value="马耳他">马耳他</option>
                            <option value="圣基茨和尼维斯">圣基茨和尼维斯</option>
                            <option value="英国">英国</option>
                            <option value="意大利">意大利</option>
                            <option value="西班牙">西班牙</option>
                            <option value="澳大利亚">澳大利亚</option>
                            <option value="德国">德国</option>
                            <option value="葡萄牙">葡萄牙</option>
                            <option value="荷兰">荷兰</option>
                            <option value="加拿大">加拿大</option>
                            <option value="爱尔兰">爱尔兰</option>
                            <option value="希腊">希腊</option>
                            <option value="塞浦路斯">塞浦路斯</option>
                            <option value="韩国">韩国</option>
                        </select>
                    </li>
                    <li style="width:160px;">
                        <a href="javaScript:;" @click="getSendMail()" class="big-btn">获取私人订制方案</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="layerTips" v-if="isMessage">
        <div class="layerTipsBox">{{message}}</div>
    </div>
</div>
</template>
<script src="./index.js"></script>
