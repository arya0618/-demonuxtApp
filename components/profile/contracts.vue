<template>
    <div data-app="true">
        <v-app>
           <div class="columns is-mobile" id="head">
           <div class="column order-head">
               <div class="page">
              <v-card class="info-container" v-for="(user,msg) in users" :key="msg">
            <span id="row1">
                <div class="columns is-mobile">
                     <div class="column">
                           <p style="font-size:12px;line-height:13px" icon><v-icon>mdi-account-circle</v-icon><b> {{user.name}}</b>  &nbsp;&nbsp;   <span id="status-btn" >{{user.status}}</span> </p>
               <p id="status">{{user.type}} &nbsp;<span class="vl"></span> &nbsp;{{user.area}}</p>
                     </div>
                      <!-- <div class="column get-btn"> -->
                           <!-- <v-btn id="status-btn" disabled="">{{user.status}}</v-btn> -->
                      <!-- </div> -->
                </div>
            </span>
         </v-card>
        </div>
           </div>
           </div>
        </v-app>
    </div>               
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>

</style>