<template>
  <div class="overflow-hidden my-10 rounded" >
    <slot></slot>
    <slot name="friends"></slot>
    <slot name="favorites"></slot>
  </div>
</template>

<script>
import Friends from '../views/FriendsVeiw'
import Favorites from '../views/FavoritesVeiw'
import ChatsView from '../views/ChatsView'

export default {
  name: 'SidebarGroup',
  components:{
    Friends , Favorites , ChatsView
  },
  data(){
    return{
      close:false
    }
  }
}
</script>
