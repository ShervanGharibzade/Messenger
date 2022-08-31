<template>
  <div class="flex max-w-7xl mx-auto bg-gray-200 rounded">
    <div v-if="showChat || showFriend || showFavorite ">
      <SidebarGroup class="sm:top-0 z-10 my-0 top-0 absolute mm:z-10 mm:right-0 mm:w-full lg:relative lg:transform  md:right-0 lg:transition lg:duration-200 lg:right-0 lg:top-0 lg:w-96 md:h-128 sm:my-0 lg:my-10 lg:h-122 sm:absolute sm:w-full sm:h-128  sm:z-10 md:w-full md:absolute md:right-0 xl:z-0 xl:flex-1 xl:w-96 xl:relative  bg-white">
        <div v-if="showChat">
          <ChatsView></ChatsView>
        </div>
        <div v-if="showFriend">
          <FriendsVeiw class="mt-4"></FriendsVeiw>
        </div>
        <div v-if="showFavorite">
          <FavoritesVeiw class="mt-4"></FavoritesVeiw>
        </div>
      </SidebarGroup>
    </div>
    <div v-if="showProfile">
      <Profile @closeProfile="conditionProfile" :showProfile="showProfile" class="absolute mt-4 top-0 h-128 right-0 w-96 bg-white z-40"></Profile>
    </div>
    <ChatWindow @showProfile="conditionProfile" class="flex-1 mt-4"></ChatWindow>
  </div>
</template>

<script>
import SidebarGroup from '../components/SidebarGroup';
import ChatWindow from '../components/ChatWindow';
import ChatsView from '../views/ChatsView';
import FriendsVeiw from '../views/FriendsVeiw';
import FavoritesVeiw from '../views/FavoritesVeiw';
import Profile from '../components/Profile';

export default {
  name: 'HelloWorld',
  data(){
    return{
      showProfile:false,
      show:true
    }
  },
  components:{
    SidebarGroup , ChatWindow , ChatsView , FriendsVeiw , FavoritesVeiw , Profile
  },
  props: [ 'showFriend' , 'showFavorite' , 'showChat' ],
  methods:{
    conditionProfile(){
      this.showProfile = !this.showProfile;
      },
  }
}
</script>
