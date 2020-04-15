
<template>
    <header>

        <div class="brand-name">
            <nuxt-link to="/">HAS</nuxt-link>
        </div>
                
        
  
        <!-- <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div> -->

        <div class="app-links">
            <app-links></app-links>
        </div>
        
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
    .app-links{
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
        header{
            padding: 0 16px;
        }
        header:nth-child{
            justify-self: end !important;
        }
        .app-links {
            display: block;
            margin-left: 0px;
        }
    }
    @media (min-width: 768px) {
        header{
            padding: 0 64px;
        }
        .app-links {
            display: block;
        }
        .drawer-toggle {
            display: none;
        }
    }

   
</style>
