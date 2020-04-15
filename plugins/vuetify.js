import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from "vuetify/es5/util/colors"

Vue.use(Vuetify)

const opts = {}

export default ctx => {
    const vuetify = new Vuetify({
      theme: {
        light:true,
        theme:{
         themes: {
             light:{
                 primary: colors.teal.lighten1,
             }
        //    dark: {
        //      primary: colors.deepPurple.lighten3,
        //      accent: colors.deepPurple.accent3,
        //      secondary: colors.amber.darken3,
        //      info: colors.teal.lighten1,
        //      warning: colors.amber.base,
        //      error: colors.deepOrange.accent4,
        //      success: colors.green.accent4
        //    }
         }
          }
        },
    })
  
    ctx.app.vuetify = vuetify
    ctx.$vuetify = vuetify.framework
  }
