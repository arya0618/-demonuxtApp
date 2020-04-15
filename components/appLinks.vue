<template data-app="true">

    <ul class="nav-list">
        <li class="nav-item">
            <v-btn icon dark>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </li>
        <li class="nav-item">
            <v-btn icon dark @click="showDropdown = !showDropdown">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
            <v-btn icon dark v-if="showDropdown" @click="showDropdown = !showDropdown">
                X
            </v-btn>
        </li>
        <v-card v-show="showDropdown" class="popup-box">
            <div class="main-user">
                <div icon id="user-icon">
                    <v-icon large>mdi-account-circle</v-icon>
                    <span id="usr-name"><strong>Mayur Bajaj</strong></span>
                    <p id="usr-position">Senior Manager</p>
                </div>
            </div>
            <hr class="dashed">
            <v-list class="vlist">
                <v-list-item class="vlist-item">
                    <div>

                        <div class="toggle-header" role="tab" icon>
                            <p block href="#" v-b-toggle.crm id="header-toggle-p">
                                <v-icon>mdi-account-hard-hat</v-icon> &nbsp; <b style="color:#1034a6"> CRM</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span icon id="menu-down"><v-icon>mdi-menu-down</v-icon></span></p>
                        </div>
                        <b-collapse id="crm"  role="tabpanel">

                         <v-card style="box-shadow:none">
                                <ul style=" list-style-type: square;">
                                    <li><nuxt-link to="/crm/crmHome">Contracts</nuxt-link></li>
                                    <li>Contrators</li>
                                    <li>Customers</li>
                                </ul>
                            </v-card>

                        </b-collapse>

                    </div>
                </v-list-item>

            <hr class="solid">
                <v-list-item class="vlist-item">
                    <div>

                        <div class="toggle-header" role="tab" icon>
                            <p block href="#" v-b-toggle.construction id="header-toggle-p">
                                <v-icon>mdi-account-cog-outline</v-icon>&nbsp; <b style="color:#1034a6"> Construction Management</b> &nbsp;&nbsp;
                                <span icon id="menu-down"><v-icon>mdi-menu-down</v-icon></span></p>
                        </div>
                        <b-collapse id="construction"  role="tabpanel">

                             <v-card style="box-shadow:none">
                                <ul style=" list-style-type: square;">
                                    <li>  <router-link to="/">Contractors</router-link></li>
                                    <li>Contracts</li>
                                  
                                </ul>
                            </v-card>
                        </b-collapse>
                    </div>
                </v-list-item>
                 <hr class="solid">
                <v-list-item class="vlist-item">
                    <div>
                        <div class="toggle-header" role="tab" icon>
                            <p block href="#" v-b-toggle.sales id="header-toggle-p">
                                <v-icon>mdi-account-cog-outline</v-icon>&nbsp; <b style="color:#1034a6"> SALES</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span icon id="menu-down"><v-icon>mdi-menu-down</v-icon></span></p>
                        </div>
                        <b-collapse id="sales"  role="tabpanel">

                            <v-card style="box-shadow:none">
                                <ul style=" list-style-type: square;">
                                    <li>Marketing</li>
                                    <li>Region</li>
                                  
                                </ul>
                            </v-card>

                        </b-collapse>

                    </div>
                </v-list-item>
                 <hr class="solid">

                <v-list-item class="vlist-item">
                    <div>

                        <div class="toggle-header" role="tab" icon>
                            <p block href="#" v-b-toggle.tools id="header-toggle-p">
                                <v-icon color="teal darken-2">mdi-bulldozer</v-icon>&nbsp; <b style="color:#1034a6">TOOLS </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span icon id="menu-down"><v-icon>mdi-menu-down</v-icon></span></p>
                        </div>
                        <b-collapse id="tools"  role="tabpanel">

                             <v-card style="box-shadow:none">
                                <ul style=" list-style-type: square;">
                                    <li>Global</li>
                                    <li>National</li>
                                </ul>
                            </v-card>

                        </b-collapse>

                    </div>
                </v-list-item>
                 <hr class="solid">
                <v-list-item class="vlist-item">
                     <div>

                        <div class="toggle-header" role="tab" icon>
                            <p block href="#" v-b-toggle.help id="header-toggle-p">
                                <v-icon color="teal darken-2">mdi-bulldozer</v-icon>&nbsp; <b style="color:#1034a6"> HELP </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span icon id="menu-down"><v-icon>mdi-menu-down</v-icon></span>
                                </p> 
                        </div>
                        <b-collapse id="help"  role="tabpanel">

                            <v-card style="box-shadow:none">
                                <ul style=" list-style-type: square;">
                                    <li><nuxt-link to="/">Contracts</nuxt-link></li>
                                   
                                </ul>
                            </v-card>

                        </b-collapse>

                    </div>
                </v-list-item>
                 <hr class="solid">
                <v-list-item class="vlist-item">
                     <div icon>

                       <p block href="#" v-b-toggle.help id="header-toggle-p">
                            <v-icon color="teal darken-2">mdi-logout-variant</v-icon>&nbsp; <b style="color:red"><nuxt-link to="/crm/crmHome"> LOGOUT </nuxt-link></b> 
                        </p> 
                    </div>
                </v-list-item>

                <v-list-item>

                </v-list-item>
            </v-list>
        </v-card>
    </ul>

</template>



<script>
export default {
    data(){
        return{
            accordion: false,
            showDropdown:false
        }
    },
    methods:{
        gotoCrm(){
            console.log('heeloo')
            this.$router.push('/pages/crm/crmHome')
        }
    }
}
</script>>
<style scoped>
    .nav-list {
        list-style: none;
        padding: 0;
       
    }
    .nav-item {
        margin: 0 0px;
        
    }
    .nav-item a {
        text-decoration: none;
        color:white;
    }
    .nav-item a:hover,
    .nav-item a:active{
        color: #b4b4b4;
    }
    @media (max-width: 767px) {
        .nav-list {
            display: flex;
            margin-left: 10px;
        }
        .nav-item{
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }
    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }
    .menu-drawer{
       
        display: inline;
        
    }
    .popup-box{
        margin-top: 49px;
         position: absolute;
      
        height: 700px;
        width: 500px;
        top: 12px;
        color: black;
        transform: translateX(-50%);
        background-color: white;
        border-radius: 1px;
        box-shadow: 1px 1px 15px 0 rgba(0,0,0,0.2);
        padding: 5px 2px;
        z-index: 1;
    }
    hr.dashed{
      border-top: 3px dashed #bbb;
    }
    #user-icon{
margin-right: -20px;
    }
    .main-user{
margin-right: -20px;
    }
    #usr-position{
        line-height:15px;
        font-size: 15px;
        margin-left: 40px;
        color: darkgray;
    }
     #usr-name{
        line-height:20px;
        font-size: 20px;
    }
   .vlist{
     
       margin-top: 10px;
       margin-left: 3px;
   }
     
.vlist-item{
       margin-top: -10px;
 margin-left: 3px;
padding-top: 5px;
}
.v-expansion-panel-header{
  
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    display: flex;
    font-size: .9375rem;
    line-height: 0.7;
    min-height: 30px;
    outline: none;
    padding:0px 14px;
    position: relative;
    transition: min-height .3s cubic-bezier(.25,.8,.5,1);
    width: 100%;
    margin: 0px;
}


.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
.header-toggle{
     box-shadow: none  !important;
}
#header-toggle-p{
    font-size: 15px;
background-color: none;
 box-shadow: none  !important;

}
.v-expansion-panels{
 box-shadow: none  !important;
}
.v-expansion-panel {
  box-shadow: none  !important;
}
.hr.solid{
   border-top: 2px solid black;  
}
#menu-down{
float: right;
}
</style>