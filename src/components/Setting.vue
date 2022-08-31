<template>
  <div class="top-0 fixed bg-gray-500/30 w-full h-full z-20 rounded-lg ">
    <div class="flex gap-5 justify-center">
      <div class="flex">
        <h2 class="flex-1 bg-white text-2xl relative left-8 top-24 z-20">Settings</h2>
        <i @click="close" class="fa fa-times relative top-24 left-64 hover:bg-gray-400 border px-2 border-gray-400 rounded z-10 text-xl" aria-hidden="true"></i>
      </div>
      <h3 class="cursor-pointer px-1 border-t-2 border-x-2 border-gray-300 rounded bg-white relative -left-12 top-36 z-20" @click="component='Account'">Account</h3>
      <h3 class="cursor-pointer px-1 border-t-2 border-x-2 border-gray-300 rounded bg-white relative -left-12 top-36 z-20" @click="component='Notification'">Notification</h3>
      <h3 class="cursor-pointer px-1 border-t-2 border-x-2 border-gray-300 rounded bg-white relative -left-12 top-36 z-20" @click="component='Security'">Security</h3>
    </div>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
import Account from './Account';
import Notification from './Notification';
import Security from './Security';

export default {
  data(){
    return{
      component:'Account'
    }
  },
  components:{
    'Account':Account,
    'Notification':Notification,
    'Security':Security
  },
  methods:{
    close(){
      this.$emit('closeSetting')
    }
  }
}
</script>
