<template>
    <div data-app="true">
        <v-app>
           
        <div class="columns is-mobile" id="head">
           <div class="column order-head">
               <!--   <span>
                  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
        <span  aria-haspopup="true" aria-controls="dropdown-menu4">
         <span class=" is-small"  style="font-size:15px" icon>Select<v-icon>mdi-menu-down</v-icon></span>
        
    </span>
  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content">
     <a  class="dropdown-item">
     Latest
      </a>
      <a class="dropdown-item">
        old
      </a>
    </div>
  </div>
                  </div>
                </span>-->
                 <label style="margin-left:8px; font-size:15px"  >OrderBy:</label>
<select v-model="age" style="font-size:15px" >
  <!-- <option   disabled>Please select one</option> -->
  <option :value="null" disabled icon style="color:gray;font-style: italic;">Select<v-icon>mdi-menu-down</v-icon></option>
 <option v-for="option in options" v-bind:key="option.value" >
    {{ option }}
  </option>
</select>
            </div> 
           
         <div class="column">  <v-card class="side-corner"><p icon><span style="float:left">Total 05</span><v-icon color="blue" small>mdi-shuffle-variant</v-icon></p></v-card></div>
        </div>
        <div class="page">
              <v-card class="info-container" v-for="(user,msg) in users" :key="msg">
               
            <span>
                     <!-- <a   style="color:blue">Contact Admin</a> -->
                   
                     <v-dialog  v-model="dialog" max-width="290">
                        <v-card>
                           <v-card-title class="headline"></v-card-title>
                           <v-card-text style="color:black">
                              <p>Do you want to do the</p>
                            <p>'Get to know' process ?</p>
                            <p>(Accept this job)</p>
                           </v-card-text>
                           <v-card-actions>
                              <v-spacer></v-spacer>
                              <!-- <v-btn color="red darken-1" text @click="dialog = false">
                                 Disagree
                              </v-btn> -->
                              <v-btn
                                 color="primary"
                                 id="yes-btn"
                                 @click="gotoProfile"
                                 dark
                                 >
                                 yes
                              </v-btn>
                              &nbsp;
                              <v-btn
                                 color="blue"
                                 
                                 @click="dialog = false"
                                 dark
                                 >
                                 no
                              </v-btn>
                           </v-card-actions>
                        </v-card>
                     </v-dialog>
                  </span>
            <span id="row1">
                <div class="columns is-mobile">
                     <div class="column">
                           <p style="margin-left:3px;margin-top:5px;padding-top:10px"> {{user.name}} </p>
               <p id="status">{{user.type}} &nbsp;<span class="vl"></span> &nbsp;{{user.area}}</p>
                     </div>
                      <div class="column get-btn">
                           <v-btn  color="primary" dark @click.stop="dialog = true" id="" small>Get to know</v-btn>
                      </div>
                </div>
            </span>
         </v-card>
        </div>

       

 <!-- <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        style="margin-top:550px,bottom: 5%;
      right: 5%;"
      >
        <template v-slot:activator>
          <v-btn
                      v-model="fab"
            color="blue darken-2"
          dark
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
         </v-speed-dial> -->
        <v-btn  dark   icon class="floting-btn" >
            <!-- <v-icon light>mdi-account-circle</v-icon> -->
            <i class="fa fa-user-plus"></i>
          </v-btn>
        </v-app>
    </div>
</template>

<script>
export default {
      data() {
  return {
      users: [
      {name: 'Pushkar Abhishek', type: 'Civil',area:'Mumbai',showPopup:false},
      {name: 'Tanya S', type: 'Home',area:'Bangkok',showPopup:false},
      {name: 'Piyusha Patel', type: 'Shop',area:'Pune',showPopup:false},
      {name: 'Thomas', type: 'Civil',area:'Newyork',showPopup:false},
      {name: 'Bob cooks', type: 'Civil',area:'London',showPopup:false},
    ],
      dialog: false,
      age:null,
      options:['latest','old']
    
  }
  },
  methods:{
    gotoProfile(){
       this.$router.push('/profile/')
    }
  }

}
</script>
<style scoped>
.page{
    padding:2px;
    margin-top: -23px;
}
#corner-block{
    width: 10px;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 3px;
}
.side-corner{
   margin-right:15px;
   float: right;
   width:45%;
   height:32px;
   font-size: 12px;
   text-align: center;
   padding-top: 2px;
}
#row1{
   overflow: hidden;
   align-content:top;
   margin-top: -10px;
}
#projectid{
   margin-left: 20px;
}
#status{
   margin-left: 2px;
}
#yes-btn{
    background-color: blue;
}
.get-btn{
    margin-top: 18px;
}
.info-container{

    height: 80px;
    width:300px;
    border-radius: 6px;
    padding-top: 2px;
    padding-left: 2px;
  line-height: 70%;
     margin: 15px auto;
     font-size: 15px;
     box-shadow: 1px 1px 2px 1px;
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

#list-popup{
    width: 70px;
  line-height:30%;height: 27px;
  
}
#list-popup-item{
  line-height:30%;
  height: 27px;display: inline-block;font-size:10px;padding-left:5px
}
.vl {
  border-left: 1px solid #778899;
  height: 15px;
}
.order-head{
  color: black;
  font-size: 20px;
  margin-left: -30px;
}
#head{
   margin-top: -55px;  
}
.v-speed-dial {
  position: absolute;
  display: flex;
}
.v-btn--floating {
  position: relative;
}
.floting-btn{
position:fixed;
	width:60px;
	height:60px;
	bottom:200px;
	right:40px;
	background-color:#007FFF;
	color:white;
	border-radius:50px;
	text-align:center;
  font-size: 20px;
	box-shadow: 2px 2px 3px #999;
}
</style>