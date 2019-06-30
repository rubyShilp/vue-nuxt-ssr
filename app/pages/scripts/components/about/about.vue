<template>
  <div class="main">
        <div class="wid-1180">
            <div class="bread-crumbs">
                <span>当前位置：</span><span><a href="index.html">首页</a></span><span>></span><span class="blue">关于我们</span>
            </div>
            <div class="map">
                <el-amap vid="amap" :plugin="plugin" :zoom='18' :center='center'  style='width:100%;height:500px'> 
                    <el-amap-marker vid="marker" :position="center" :label="label">
                    </el-amap-marker>  
                    <el-amap-circle
                      vid="circle"
                      :center="center"
                      radius="80"
                      fill-opacity="0.2"
                      strokeColor="#38f"
                      strokeOpacity="0.8"
                      strokeWeight="1"
                      fillColor="#38f"
                    ></el-amap-circle>
                </el-amap>
            </div>
            <div class="company-info">
                <h2>联系我们</h2>
                <p><b>电话：</b><span class="blue">0755-26641927</span></p>
                <p><b>地址：</b><span class="blue">深圳市南山区科苑路16号东方科技大厦2513室</span></p>
            </div>
            <div class="company-info pd-top30">
                <h2>公司简介</h2>
                <p>嘉拓投资现目前为众多客户作出移民身份规划，拥有超8年的移民团队服务，嘉拓是</p>
                <p>行业内真正开启国际市场业务的综合服务公司，同时为更多的客户作出合理的家庭资产配置,</p>
                <p>嘉拓一直秉承着为更多的客户提供更优质的服务！</p>
                <p>同时嘉拓还为客户在股权投资方面做出了更多优质的项目，3年来，成功上市的企业</p>
                <p>也有5家，为客户真正做到了资产增值，我们希望今后为更多的客户推荐更多的上市企业和</p>
                <p>优质的服务，让客户真正的感到放心、舒心、开心！</p>
            </div>
            <div class="company-info">
                <h2>公司理念</h2>
                <p><b>愿景：</b>打造百年传承</p>
                <p><b>核心价值观：</b>创新、突破、品质、诚信</p>
                <p><b>发展观: </b>服务观、事业观、人才观、创新精神、服务精神、敬业精神</p>
                <p><b>服务宗旨：</b>全心全意服务客户</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
        plugin:[{
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 100,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions:'all',
          pName: 'Geolocation',
      }],
      center:[113.945964,22.547737],
      label:{
        content:'<span>公司名称</span>:嘉拓（深圳）投资有限公司<br><span>地址</span>:深圳市南山区科苑路16号东方科技大厦2513室<br><span>电话</span>:0755-26641927',
        offset:[0,-115]
      },
    }
  }
}
</script>
