<template>
  <Pop></Pop>
  <router-link to="/"></router-link>
  <router-link :to="{name : 'ChatsView'}"></router-link>
  <router-link :to="{name : 'FriendsView'}"></router-link>
  <router-link :to="{name : 'FavoritesVeiw'}"></router-link>
  <router-view/>
</template>


   <script>
    import Pop from './components/Pop'

    export default {
     data(){
       return{
       }
     },
      components:{
       Pop
      }
   }
   </script>


