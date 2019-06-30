import Vue from 'vue';
import vueAgile from 'vue-agile';
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
Vue.use(vueAgile);
VueAMap.initAMapApiLoader({
    key: 'your amap key',
    plugin: ['AMap.Geolocation','AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor']
});