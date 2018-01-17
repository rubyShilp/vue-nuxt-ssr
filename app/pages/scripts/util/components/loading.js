import Vue from 'vue';
Vue.component('fa-loading',{
    template:'<div class="pop-success-bg" v-if="showHide">'+
            '<p>{{context}}</p></div>',
    props:{
        context:{
            type:String,
            default:''
        },
        showHide:{
            type:Boolean,
            default:false
        }
    },
    updated(){
        let time=null;
        if(this.showHide){
            if(!time){
                clearTimeout(time);
            }
             time=setTimeout(function(){
                 this.showHide=false;
                 this.context='';
                 this.$store.state.showHide=false;
                 this.$store.state.context='';
             }.bind(this),2000);
        };
    }
})