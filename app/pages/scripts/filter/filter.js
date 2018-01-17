import Vue from 'vue';
import {formDate} from './../util/core';
//日期格式化Date('yyyy年MM月dd日 hh:mm:ss')
Vue.filter('Date',function(value,format){
    return formDate(new Date(value),format);
});