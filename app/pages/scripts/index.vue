<template>
</template>
<script>
import {token} from './util/core.js';
export default {
  beforeMount () {
    if(!token()){
      this.$router.push({path:'/login'});
    }else{
      this.$router.push({path:'/about'})
    }
  }
}
</script>