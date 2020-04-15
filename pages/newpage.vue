<template>
<div>
  <h1>{{greeting}} world!</h1>
    <nuxt-link to="/home">home</nuxt-link>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
 data:function(){
   return{
     'greeting':'piyu this yur'
   }
 }
}
</script>