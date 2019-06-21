<template>
<div>
    <!--导航-->
    <div class="nav-box">
        <ul class="nav">
            <li class="cur"><a href="index.html">首&nbsp;&nbsp;页</a></li>
            <li><a href="colonial.html">海外移民</a></li>
            <li><a href="hot.html">热门项目</a></li>
            <li><a href="jobs.html">招贤纳士</a></li>
            <li><a href="abouts.html">关于我们</a></li>
        </ul>
    </div>
    <router-view></router-view>
    <!--页脚部分-->
    <div class="footer">
        <h2>联系XXXX</h2>
        <ul class="phone-us">
            <li>联系热线：400-888-8888</li>
            <li><a href="abouts.html">关于我们</a></li>
            <li><a href="jobs.html">招贤纳士</a></li>
        </ul>
        <div class="copyright">
            <p>© 2019-2019 深圳XXXXXX版权所有. 保留一切权利. </p>
        </div>
    </div>
</div>
</template>
