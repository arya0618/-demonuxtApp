<template>
  <div>

  <!-- <router-link to="/newpage">newpage</router-link> -->
  
  <h1>{{greeting}} world!</h1>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
 data:function(){
   return{
     'greeting':'123'
   }
 }
}
</script>