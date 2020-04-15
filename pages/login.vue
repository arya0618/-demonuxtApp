
<template>
   <div data-app="true">
      <Header/>

      <v-app>
         <div class="lable-container">
            <h1><strong>Login</strong></h1>
         </div>
         <div class="input-container">
            <!-- <fieldset id="outer-line">  -->
            <!-- <legend>Email:</legend> -->
            <!-- <label class="label-email">email</label> -->
            <!-- <form id="app" v-on:submit="checkEmptyfield" action="/userHome" method="post"> -->
            <!-- <v-alert   color="pink lighten-1" dense outlined id="error-block" v-if="errors.length" light>
                <ul>
                  <li v-for="error in errors" :key="error">{{ error }} 
                     
                       <button type="button" class="close" aria-label="Close" @click="errors.length= !errors.length">
                     <span aria-hidden="true">&times;</span>
                     </button> 
                  </li>
               </ul>
              
            </v-alert> -->

            <v-alert
            id="error-block"
        v-model="alert"
        dismissible
         color="error"
        v-if="errors.length"
      >
      <ul>
                  <li v-for="error in errors" :key="error">{{ error }} </li></ul>
      
      </v-alert>
            <!-- <ValidationProvider rules="required" v-slot="{ errors }"> -->
               <!-- <v-alert  id="error-block" v-if="errors.length" dense outlined type="error">{{ errors[0] }}</v-alert> -->
               <input
                  class="input"
                  id="input-name"
                  v-model="name"
                  type="text"
                  name="name"
                  >
               <input
                  class="input"
                  id="span-side"
                  value="@scg.com"
                  type="text"
                  disabled
                  > 
            <!-- </ValidationProvider> -->
            <!-- </fieldset>  -->
            <div id="next-container">
               <!-- <router-link to="/foo" tag="button">foo</router-link> -->
               <span>
                  Can not Login?
                  <span>
                     <a  @click.stop="dialog = true" style="color:blue">Contact Admin</a>
                     <!-- <v-btn  color="primary" dark @click.stop="dialog = true">Open Dialog   </v-btn> -->
                     <v-dialog  v-model="dialog" max-width="290">
                        <v-card>
                           <v-card-title class="headline">Contact details of Admin:</v-card-title>
                           <v-card-text>
                              <p><strong>  Email:</strong>admin@test.com</p>
                              <p><strong>Phone :</strong> 895682 78595</p>
                           </v-card-text>
                           <v-card-actions>
                              <v-spacer></v-spacer>
                              <!-- <v-btn color="red darken-1" text @click="dialog = false">
                                 Disagree
                              </v-btn> -->
                              <v-btn
                                 color="green darken-1"
                                 text
                                 @click="dialog = false"
                                 light
                                 >
                                 Submit
                              </v-btn>
                           </v-card-actions>
                        </v-card>
                     </v-dialog>
                  </span>
               </span>
               <!-- <nuxt-link class="tag is-link is-normal next-button" to="/userHome" v-on:click="checkEmptyfield">Next</nuxt-link> -->
               <input  class="tag is-link is-normal next-button" type="button" @click="checkEmptyfield" value="Next">
            </div>
            <!-- <input type="submit" value="Submit"> -->
            <!-- </form> -->
         </div>
         <div class="end-continer">
         </div>
         <!-- <p>{{name}}</p> -->
      </v-app>
   </div>
</template>



<script>
import Header from "~/components/header.vue";
//import VueTagsInput from '@johmun/vue-tags-input';
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    Header,
        ValidationProvider

  },
 
  data: function() {
    return {
      greeting: "this is login",
      errors: [],
      name: null,
       dialog: false,
       alert:true
    };
  },

  methods: {
    checkEmptyfield(){
      console.log("name", this.name);
   //   this.errors = [];
        if (this.name) {
         console.log('type',typeof(this.name))
      //   if (typeof this.name == Number) {
      //     console.log('in if--')
      //     return this.errors.push("number is not required");
          this.$router.push('/userHome')

         }
      //   // this.$router.push({
      //   //   path: "/userHome"
      //   // });
      // }

       if (!this.name) this.errors.push("Email required.");
      // //if(!this.age) this.errors.push("Age required.");
      //e.preventDefault();
    }
  },
  xshow(){
     this.errors.length = 0;
  }
};
</script>
<style >
.lable-container {
  margin-top: 20px;
}
#input-name {
  width: 100px;
  height: 30px;
  border: 1px solid black;
}
.end-continer {
  margin-top: 30px;
}
#error-block{
  width:50%;
  color:white;
}
.vl {
  display: inline-block;
  border-left: 2px solid black;
  height: 1px;
}
#outer-line {
  width: 30%;
  border: 1px solid;
  border-style: solid;
  outline: 2px black;
  padding: 5px;
}
#span-side {
width:20%;
  margin-top: 1px;
  margin-left: -5px;
  color: black;
  font-size: 12px;
  border: 1px solid black;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  border-radius: none;
}
.input-container {
  margin-top: 20px;
}
.label-email {
  position: absolute;
  padding-bottom: 1px;
  left: 20px;
}
.next-button {
  margin-left: 20px;
}
#next-container {
  margin-top: 50px;
}
</style>