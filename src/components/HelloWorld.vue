<template>
  <div class="flex bg-gray-200 overflow-hidden">
    <Pop></Pop>
    <div v-if="showEdit">
      <Edit @closeEdit="conditionEdit"></Edit>
    </div>
    <div v-if="showSetting">
      <Setting @closeSetting="conditionSetting"></Setting>
    </div>
    <Nav class="w-20 hidden sm:block" @setting="conditionSetting"  @edit="conditionEdit" @friends="conditionFriends" @favorites="conditionFavorites" @chats="conditionChats">
    </Nav>
    <Content :showFriend="showFriend" :showEdit="showEdit" :showFavorite="showFavorite" :showChat="showChat" class="bg-gray-200 flex-1"></Content>
  </div>
</template>

<script>
  import Nav from '../components/Nav';
  import Content from '../components/Content';
  import Pop from './Pop';
  import Power from '../components/Power';
  import Setting from '../components/Setting';
  import Edit from '../components/Edit';

  export default {
    name: 'HelloWorld',
    data(){
      return{
        showFriend:false,
        showFavorite:false,
        showChat:true,
        showEdit:false,
        showSetting:false
      }
    },
    components:{
      Nav , Content , Pop , Power , Setting , Edit
    },
    methods:{
      conditionFriends(){
        if(this.showFriend === false || this.showFriend === true ){
          this.showFriend = !this.showFriend;
          this.showFavorite = false;
          this.showChat = false;
        }
      },
      conditionFavorites(){
        if(this.showFavorite === false || this.showFavorite === true ){
          this.showFavorite = !this.showFavorite;
          this.showChat = false;
          this.showFriend = false;
        }
      },
      conditionChats(){
        if(this.showChat === false || this.showChat === true ){
          this.showChat = !this.showChat;
          this.showFriend = false;
          this.showFavorite = false;
        }
      },
      conditionEdit(){
          this.showEdit = !this.showEdit;
      },
      conditionSetting(){
        this.showSetting = !this.showSetting;
      }
    }
  }
</script>

