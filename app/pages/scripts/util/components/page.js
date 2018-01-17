import Vue from 'vue';
Vue.component('fa-page',{
    template:'<div class="page-number">'+
		        	'<i class="i-icon pre-icon01" v-on:click="setCurrent(1)"></i><i class="i-icon pre-icon02" v-on:click="setCurrent(current-1)"></i>'+
		        	'<a href="javascript:;" v-for="p in grouplist" v-on:click="setCurrent(p)" v-bind:class="{on:current===p}">{{p}}</a>'+
                    '<i class="i-icon next-icon01" v-on:click="setCurrent(current+1)"></i><i class="i-icon next-icon02" v-on:click="setCurrent(page)"></i>'+
		        	'</div>',
    props:{
        current: {            // 当前页码
            type: Number,
            default: 1
        },
        total: {            // 数据总条数
            type: Number,
            default: 0
        },
        display: {            // 每页显示条数
            type: Number,
            default: 10
        },
        pagegroup: {        // 分页条数 -- 奇数
            type: Number,
            default: 5,
            coerce:function(v){
                v = v > 0 ? v : 5;
                return v % 2 === 1 ? v : v + 1;
            }
        }
    },
    computed:{
        page:function(){ // 总页数
            return Math.ceil(this.total / this.display);
        },
        grouplist:function(){
            var pages = [];
            if (this.page === 0) {
                pages.push(1);
            } else if (this.page <= this.pagegroup) {
                for (let i = 1; i <= this.page; i++) {
                    pages.push(i);
                }
            } else if (this.page - this.current < this.pagegroup) {
                for (var i = this.page - 5; i <= this.page; i++) {
                    pages.push(i);
                }

            } else if (this.page > this.pagegroup && (this.current - 2) < 1) {
                for (var i = 1; i <= 3; i++) {
                    pages.push(i);
                }
                pages.push('...');
                for (var i = this.page - 1; i <= this.page; i++) {
                    pages.push(i);
                }
            } else if (this.page > this.pagegroup && (this.current - 2) > 0) {
                for (var i = this.current - 1; i <= this.current + 1; i++) {
                    pages.push(i);
                    if (pages.length == 3) {
                        break;
                    }
                }
                pages.push('...');
                for (var i = this.page - 1; i <= this.page; i++) {
                    pages.push(i);
                }
            }
            return pages;
        }
    },
    methods:{
        setCurrent:function(current){
            if( this.current != current && current > 0 && current < this.page + 1) {
                this.current = current;
                this.$emit('pagechange',this.current);                    
            } 
        }
    }
})