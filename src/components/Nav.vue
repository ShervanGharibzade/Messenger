<template>
  <div class="place-items-center relative bg-white h-128">
    <div class="bg-green-400 h-16 w-full pl-6 pt-2 mt-0 cursor-pointer">
      <i  class="fa fa-commenting-o bg-green-400 text-4xl text-white duration-100 " aria-hidden="true"></i>
    </div>
    <div class="h-8/2 w-full pl-6 pt-6 mt-0 cursor-pointer">
      <i @click="chats" class="fa fa-comment-o text-xl text-black hover:text-green-400 duration-100 " aria-hidden="true"></i>
    </div>
    <div class="h-8/2 w-full pl-6 pt-6 mt-0 cursor-pointer">
      <i  @click="friends" class="fa fa-user-o text-xl text-black hover:text-green-400 duration-100 " aria-hidden="true"></i>
    </div>
    <div  @click="favorites" class="h-8/2 w-full pl-6 pt-6 mt-0 cursor-pointer">
      <i class="fa fa-star-o text-xl text-black hover:text-green-400 duration-100 " aria-hidden="true"></i>
    </div>
    <div class="pt-60"></div>
    <div class="h-8/2 w-full pl-6 pt-6 mt-0 cursor-pointer">
      <i @click="Edit" class="fa fa-pencil text-xl text-black hover:text-green-400 duration-100" aria-hidden="true"></i>
    </div>
    <div class="h-8/2 w-full pl-6 pt-6 mt-0 cursor-pointer">
      <i @click="Setting" class="fa fa-cog text-xl text-black cursor-pointer hover:text-green-400 duration-100" aria-hidden="true"></i>
    </div>
    <div class="h-8/2 w-full pl-6 pt-6 my-2 cursor-pointer ">
      <i @click="LoginPage" class="fa fa-power-off text-xl text-black hover:text-green-400 duration-100" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      component:''
    }
  },
  methods:{
    friends(){
      this.$emit('friends')
    },
    favorites(){
      this.$emit('favorites')
    },
    chats(){
      this.$emit('chats')
    },
    Edit(){
      this.$emit('edit')
    },
    Setting(){
      this.$emit('setting')
    },
    LoginPage(){
      this.$router.push({ path: '/login' })
    }
  }

}
</script>
