
<template>
    <header>

        <div class="brand-name">
            <nuxt-link to="/crm/crmHome"><span>
                <v-btn class="ma-2" icon dark>
                <v-icon dark>mdi-arrow-left</v-icon>  
                </v-btn>
                <span>Contract name</span></span></nuxt-link>
        </div>
                
        <ul class="nav-list">
        <li>
            <v-btn icon dark>
                <v-icon>mdi-file-pdf-outline</v-icon>
            </v-btn>
        </li>
          <li>
            <v-btn icon dark>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
        </li>
         <li>
            <v-btn icon dark>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </li>
        </ul>
  
        <!-- <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div> -->

 
        
        <!-- <ul class="nav-list">
        <li class="nav-item">
         <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn></li>
      
        <li class="nav-item">
            <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
               <v-app-bar-nav-icon></v-app-bar-nav-icon> 
            </v-btn>
          </template>
  
          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </li>
    </ul>

         -->
    </header>
</template>

<script>
    import AppLinks from '~/components/appLinks'
export default {
    components: { AppLinks }
}
</script>

<style scoped>
    header{
        display: grid;
        grid-template: 60px / auto 1fr;
        align-items: center;
      background-color: #3252F4
    }
    .nav-list{
        justify-self: end;
        
    }
    .brand-name {
        margin: 0 5px;
        font-size: 1.3rem;
    }
    .brand-name a {
        text-decoration: none;
        color: white;
    }
    .drawer-toggle .bar {
        width: 90%;
        height: 2px;
        
    }
    .drawer-toggle {
        display: flex;
        justify-self: end;
        flex-direction: column;
        justify-content: space-around;
        height: 50%;
        width: 35px;
        padding-right: 16px;
        cursor: pointer;
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

   
</style>
