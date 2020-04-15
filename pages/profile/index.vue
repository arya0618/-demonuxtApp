<template>
    <div data-app="true">
    <Header/>
    <v-app>
    <v-sheet class="d-flex" color="grey lighten-3" height="80" width="100%">
            <!-- <sheet-footer>
             
            </sheet-footer> -->
            <div class="cloumn">
                <span icon style="margin-left:5px">
                     <v-icon  light  size="80">mdi-account-circle</v-icon>
                </span>
                <span id="user-name">
                    Person Name
                </span>
            </div>

    </v-sheet>
    <v-card>
    <div class="cloumn is-mobile">
        <table  cellspacing="10" cellpadding="10" id="user-info-tbl">
  <tr style="padding:10px">
    <td id="td-1st">Call</td>
    <td id="td-2nd">200 200 300</td> 
  </tr>
  <tr>
    <td id="td-1st">Email</td>
    <td id="td-2nd">test@test.com</td> 
  </tr>
  <tr>
    <td id="td-1st">Company</td>
    <td id="td-2nd">TON construction</td> 
  </tr>
  <tr>
    <td id="td-1st">Address</td>
    <td id="td-2nd">flat no 22, plot no45, xyz bunglow, mumbai</td> 
  </tr>
  <tr>
    <td id="td-1st">spoke</td>
    <td id="td-2nd">test @ test. com test</td> 
  </tr>
   <tr>
    <td id="td-1st">Status</td>
    <td id="td-2nd">created</td> 
  </tr>
  <tr>
    <td id="td-call">
         <v-btn class="ma-2" tile   width="140" color="primary" dark> <v-icon left>mdi-phone</v-icon> Call</v-btn>
    </td>
    <td id="td-msg">
        <v-btn class="ma-2" tile width="140" color="success">
        <v-icon left>mdi-message</v-icon> Line
      </v-btn>    
    </td> 
  </tr>
</table>
        <div class="columns">
            <div class="column is-12" style="margin-top:5px;" >
                
        <div class="tabs">
            <ul class="">
                <li :class="[ tabheading === 'contracts' ? 'is-active'  : '']" id="tab-head"> 
                <a @click="tabheading='contracts'" id="a-tag" >info1</a>
                </li>
                <li  :class="[ tabheading === 'contractors' ? 'is-active'  : '']" id="tab-head">
                <a @click="tabheading='contractors'" id="a-tag">info2</a>
                </li>
                <li  :class="[ tabheading === 'customers' ? 'is-active'  : '']" id="tab-head">
                <a @click="tabheading='customers'" id="a-tag">info3</a>
                </li>
            </ul>
        </div>

        </div>
        </div>
 </div>
    </v-card>
                <!-- <div class="box" v-if="!showBox"> -->
                    <code v-if="tabheading ==='contracts'">
                        <v-card style="width:200px;padding:10px"> 
                             <p>1 </p>
                        </v-card>
                         <v-card style="width:200px;padding:10px"> 
                             <p>1 </p>
                        </v-card>
                      <v-card style="width:200px;padding:10px"> 
                             <p>1 </p>
                        </v-card>
                     
                    </code>
                    <code v-if="tabheading ==='contractors'">
                        <p>1 2</p>
                    </code>
                    <code v-if="tabheading ==='customers'">
                        <p>1 2 3 </p>
                    </code>
                   
                <!-- </div> -->
    </v-app>
    </div>
</template>
<script>
import Header from "~/components/headerProfile.vue";
export default {
    components:{
        Header
    },
     data() {
            return {
               showBox:false,
                tabheading: 'contracts',
            }
        },
}
</script>
<style scoped>
#user-name{
    margin-left: 20px;
    margin-top: -112px;
    font-size: 22px;
}
#user-info-tbl{
     border-spacing: 15px;
     border: none;
     margin-top: 10px;
}
#td-1st{
    padding-top: 10px;
    padding-right: 20px;
    padding-left: 10px;
}
#td-2nd{
    padding-top: 10px;
    padding-left: 10px;
   width:200px;
    display: inline-block;
     font-weight: bold;

}
#td-call{
    padding-top: 20px;
    padding-right: 5px;
    padding-left: 20px;
}
#td-msg{
    padding-top: 20px;
    padding-left: 10px; 
}
/* .help-content {
    background-color: white !important;
    } */
 .help-tabs {
    margin-bottom: 10px !important;
    }
#tab-head{
        font-size: 15px; 
         padding-left: 15px;
        padding-right: 15px;

    }
.box{
    margin-top: 10px;
    height:0px;
    padding: 0px;
    width:100%
}
 .tabs li.is-active a {
        border-bottom-color: #000000;
       color:blue;
      
        border-bottom: 3px solid;
        font-weight: bold;
    }
   
</style>