export default {
  data(){
    return {
      listImgs:[
                require('./../../../images/banner.png'),
                require('./../../../images/banner.png')
              ]
    }
  },
  methods:{
    selectUrl(type){
      if(type==1){
        sessionStorage.setItem('INDEX',2);
        this.$router.push('/main/colonial');
      }else{
        sessionStorage.setItem('INDEX',3);
        this.$router.push('/main/hot');
      }
     
    }
  }
}