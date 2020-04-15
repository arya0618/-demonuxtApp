

<template>
   <div data-app="true">
      <v-app>
    <!-- <Header/> -->
      <div class="head-container">
         <div class="columns  is-mobile">
            <div class="column is-half">
               <p id="activity-title">Activities</p>
            </div>
            <div class="column">
                  <v-card class="side-corner"><p icon><span style="float:left">Total</span><v-icon color="blue" small>mdi-shuffle-variant</v-icon></p></v-card>
               </div>
            </div>
         </div>
      <div class="page">
         <v-card class="info-container" v-for="(user,msg) in users" :key="msg">
               <!-- <button class="test" @click="user.showPopup = !user.showPopup"></button> -->
                <v-btn icon  class="test" @click="user.showPopup = !user.showPopup">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        
          <div v-show="user.showPopup" class="popup-box">
         
             <!-- <v-list id="list-popup">
                <v-list-item id="list-popup-item">Update</v-list-item>
                <v-list-item id="list-popup-item">Delete</v-list-item>
             </v-list> -->
             <b-list-group style="" id="list-popup">
  <b-list-group-item id="list-popup-item" variant="danger">Delete </b-list-group-item>
  <b-list-group-item  id="list-popup-item" variant="primary">Upadte </b-list-group-item>
          </b-list-group>
          </div>
            <span id="row1">
              <p>  <font-awesome-icon :icon="['fas', 'user']" />&nbsp;
              {{user.name}} - {{user.time}}</p>
               <p id="status">Status: &nbsp;<b>Approved</b></p>   

               <p id="projectid">ProjectId:&nbsp;<b>{{user.id}}</b></p>   

            </span>
         </v-card>
          <!-- <div class="info-container">
         </div> -->

      </div>
      </v-app>
      </div>

  
</template>


<script>
import Vue from 'vue'
 import Header from '~/components/header.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret,faUser)
export default {
    components: {
        Header,
  },
   layout:'user',
    data() {
  return {
    messages:  ['hello', 'vue', 'js'],
    users: [
      {name: 'Mr. Pushkar', time: '5 min ago',id:1234569,showPopup:false},
      {name: 'Mr. P bird', time: '2 days ago',id:852369,showPopup:false},
      {name: 'Ms. Piyu', time: '2 days ago',id:125397,showPopup:false},
    ],
         // showPopup: false
  }
},
methods:{
   test(){

   },
    gotoCrm(){
            console.log('heeloo')
            this.$router.push('/pages/crm/crmHome')
        }
}
}
</script>
<style scoped>
.head-container{
margin-top: 10px;
}
#activity-title{
   font-size: 20px;
   margin-left: 8px;
}
.side-corner{
   margin-right:15px;
   float: right;
   width:30%;
   height:35px;
   font-size: 15px;
   text-align: center;
   padding-top: 2px;
}
.page{
    padding:2px;
    margin-top: 43px;
}
#corner-block{
    width: 10px;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 3px;
}
#row1{
   overflow: hidden;
   align-content:top;
}
#projectid{
   margin-left: 20px;
}
#status{
   margin-left: 20px;
}
.info-container{

    height: 100px;
    width:300px;
    border-radius: 6px;
    padding-top: 2px;
    padding-left: 2px;
  line-height: 30%;
     margin: 1px auto;
     font-size: 15px;
}
.test{
   float: right;
}
/* .test:after {
  content: '\2807';
  font-size: 10px;
  float:right;
  } */
.popup-box {
  position: absolute;
  left: 75%;
  width: 80px;
  height: 60px;
  transform: translateX(-50%);
  border-radius: 1px;
  line-height: 50%;
  box-shadow: 1px 1px 15px 0 rgba(0,0,0,0.2);
  padding: 5px;  
}
#shuffle-button{
 
}
#list-popup{
    width: 70px;
  line-height:30%;height: 27px;
  
}
#list-popup-item{
  line-height:30%;
  height: 27px;display: inline-block;font-size:10px;padding-left:5px
}
/* .popup-box{
    display: none; 
  position: fixed; 
 z-index: -1;
  padding-top: 10px; 
  left: 50%;
  top: 0;
  width: 50%;
  height: 50%; 
  overflow: auto; 
  background-color: rgb(0,0,0);
} */


</style>