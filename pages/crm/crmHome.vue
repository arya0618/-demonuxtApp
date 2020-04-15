<template>
<div data-app="true">

   
        <div class="columns">
            <div class="column is-12" style="margin-left:2px;margin-top:5px;" >
                <!-- <div class="tabs is-boxed">
                    <ul>
                        <li :class="[ lang === 'crontab' ? 'is-active' : '']"><a @click="lang='crontab'">Crontab</a>
                        </li>
                        <li :class="[ lang === 'php' ? 'is-active' : '']"><a @click="lang='php'">PHP</a></li>
                        <li :class="[ lang === 'bash' ? 'is-active' : '']"><a @click="lang='bash'">Bash</a></li>
                        <li :class="[ lang === 'python' ? 'is-active' : '']"><a @click="lang='python'">Python</a></li>
                    </ul>
                </div> -->

<div class="tabs is-centered">
  <ul class="">
    <li :class="[ tabheading === 'contracts' ? 'is-active' : '']"> 
      <a @click="tabheading='contracts'" id="a-tag" >CONTRACTS</a>
    </li>
    <li  :class="[ tabheading === 'contractors' ? 'is-active' : '']">
      <a @click="tabheading='contractors'" id="a-tag">CONTRACTORS</a>
    </li>
    <li  :class="[ tabheading === 'customers' ? 'is-active' : '']">
     <a @click="tabheading='customers'" id="a-tag">CUSTOMRES</a>
    </li>
    
  </ul>
</div>



                <div class="box help-content">
                    <code v-if="tabheading ==='contracts'">
                       <Contracts/>
                    </code>
                    <code v-if="tabheading ==='contractors'">
                        <Contractors/>
                    </code>
                    <code v-if="tabheading ==='customers'">
                        <Customers/>
                    </code>
                   
                </div>
            </div>
        </div>
  
</div>
</template>

<script>
 import Header from '~/components/header.vue'
import Contracts from '~/components/crm/contracts.vue'
import Contractors from '~/components/crm/contractors.vue'
import Customers from '~/components/crm/customers.vue'
    export default {
        name: 'HelpComponent',
        layout:'user',
    components:{
        Contracts,
        Contractors,
        Customers
    },
        data() {
            return {
               
                tabheading: 'contracts',
            }
        },
    }
</script>

<style lang="css" scoped>
    .help-content {
        background-color: white !important;
    }
    .help-tabs {
        margin-bottom: 10px !important;
    }
    .tabs li.is-active a {
        border-bottom-color: #000000;
       color:blue;
      
        border-bottom: 3px solid;
        font-weight: bold;
    }
    code, pre {
        color: #1b1e21 !important;
        background-color: white !important;
    }
    /* .tabrow{
         border-top-left-radius: 16px;
  border-top-right-radius: 16px;
    }
    .tabrow li:before {
  border-bottom-right-radius: 16px;
  border-width: 0 1px 1px 0;
}
.tabrow li:after {
  border-bottom-left-radius: 16px;
  border-width: 0 0 1px 1px;
} */
.box{
    height: auto;
    
}
#a-tag{
   
     height:30px;
     
}

</style>
