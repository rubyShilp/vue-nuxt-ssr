import {mapState} from 'vuex';
export default {
  data(){
    return {
      socket:null
    }
  },
  methods:{
    login(){
        let params={account:'LIUNIU',password:'1111qqqq'};
        this.$store.dispatch("loginModule/login",params).then(res=>{
          //sessionStorage.setItem('TOKEN',res.data.token);
          console.log(res);
          //this.$router.push({path:'/about'});
        })
     }
  }
}