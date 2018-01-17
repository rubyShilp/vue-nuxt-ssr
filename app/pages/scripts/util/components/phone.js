import Vue from 'vue';
Vue.component('fa-phone',{
    data(){
        return{
            mediaStream :null,
            track:null
        }
    },
    template:'<div>'+
            '<video id="video" autoplay style="width:640px;height:480px"></video>'+
            '<button v-on:click="picture">PICTURE</button> '+
            '<canvas id="canvas" width="640" height="480"></canvas>'+
            '</div>',
    mounted(){
        this.phone();
    },
    methods:{
        phone:function(){
            let video=document.getElementById("video");
            if(navigator.getUserMedia){
                navigator.getUserMedia({'video': true},function(stream){
                     this.mediaStream=stream;
                     this.track = stream.getTracks()[0];
                     video.src=stream;
                     video.play();
                },function(error){
                    console.log("Video capture error: ", error.code);
                })
            }else if(navigator.webkitGetUserMedia){
                navigator.webkitGetUserMedia({'video': true},function(stream){
                    this.mediaStream=stream;
                    this.track = stream.getTracks()[0];
                    video.src=window.webkitURL.createObjectURL(stream);
                    video.play();
                },function(error){
                    console.log("Video capture error: ", error.code);
                })
            }else if(navigator.mediaDevices.getUserMedia){
                navigator.mozGetUserMedia({'video': true},function(stream){
                    this.mediaStream=stream;
                    this.track = stream.getTracks()[0];
                    video.src=window.URL.createObjectURL(stream);
                    video.play(); 
                },function(error){
                    console.log("Video capture error: ", error.code);
                })
            }
        },
        picture:function(){
            let canvas=document.getElementById('canvas');
            let context=canvas.getContext("2d");
            context.drawImage(document.getElementById("video"),0,0,640,480);
            let writeImg = canvas.toDataURL('image/png',1);
            this.closePhone();
        },
        closePhone:function(){
            let video=document.getElementById("video");
            video.pause();
        }
    }
})