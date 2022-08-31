<template>
  <div class="rounded pl-4 overflow-hidden border-b-2 border-gary-300 h-128 overflow-hidden">
    <div class="lg:flex sm:grid  border-b-2 border-gray-300 pb-5">
      <div class="flex mt-6">
        <img src="https://soho.laborasyon.com/default/dist/media/img/man_avatar3.jpg" class="rounded-full w-16 h-16" alt="avatar">
        <div class="pl-4">
          <h2>Reza Abedi</h2>
          <span class="text-gray-500">online</span>
        </div>
      </div>
      <div class="lg:flex-1"></div>
      <div class="relative">
        <i class="fa fa-phone mx-3 px-4 bg-green-600 py-3 mt-2 hover:border-green-400 rounded border-2 hover:rounded"
           aria-hidden="true"></i>
        <i class="fa fa-video-camera mx-3 px-4 bg-gray-500 py-3 rounded hover:border-gray-400 border-2 hover:rounded"
           aria-hidden="true"></i>
        <i class="fa fa-ellipsis-h group mx-3 px-4 bg-gray-500 py-3 rounded hover:border-gray-400 border-2 hover:rounded"
           aria-hidden="true">
            <ul class="absolute hidden z-10 group-hover:block bg-white right-5 top-14 rounded p-2">
              <li @click="showProfile" class="cursor-pointer hover:bg-gray-200 rounded px-2">
                <span class="text-sm">Profile</span>
              </li>
              <li class="cursor-pointer hover:bg-gray-200 rounded px-2">
                <span class="text-sm">Add to archive</span>
              </li>
              <li class="cursor-pointer hover:bg-gray-200 rounded mb-2 px-2">
                <span class="text-sm">Delete</span>
              </li>
              <li class="cursor-pointer hover:bg-gray-200 rounded px-2">
                <span class="border-t-2 text-sm border-gray-500">Block</span>
              </li>
            </ul>
        </i>
      </div>
    </div>
    <div class=" h-120 mx-4 my-6 border-b-2 pt-2  h-2/3border-gray-300 overflow-y-scroll">
      <div>
        <div class="relative block text-right my-4">
          <span class="bg-gray-400 rounded p-2 mr-3">hi there</span>
          <span class="text-sm block text-gray-500 pt-2 mr-3">PM 14:25</span>
        </div>
        <div class="relative block my-4">
          <span class="bg-white rounded p-2">hi</span>
          <span class="text-sm block text-gray-500 pt-2">PM 14:25</span>
        </div>
        <div class="relative block text-right my-4">
          <span class="bg-gray-400 rounded p-2 mr-3">how are u?</span>
          <span class="text-sm block text-gray-500 pt-2 mr-3">PM 14:25</span>
        </div>
        <div class="relative block my-4">
          <span class="bg-white rounded p-2">fine bro</span>
          <span class="text-sm block text-gray-500 pt-2">PM 14:25</span>
        </div>
        <div class="relative block my-4">
          <span class="bg-white rounded p-2">what about you?</span>
          <span class="text-sm block text-gray-500 pt-2 ">PM 14:25</span>
        </div>
        <div class="relative block text-right mt-8">
          <span class="bg-gray-400 rounded p-2 mr-3">nothing bro</span>
          <span class="text-sm block text-gray-500 pt-2 mr-3">PM 14:25</span>
        </div>
        <div v-for="msg in messages" class="relative block text-right my-8">
          <span class="bg-gray-400 rounded p-2 pr-2 mr-3">{{msg}}</span>
          <span class="text-sm block text-gray-500 pt-2 mr-3">PM 14:25</span>
        </div>
      </div>
    </div>
    <div class="flex border-t-2 border-gary-800">
      <div class="flex-1">
        <input type="text" @keyup.enter="sendMessage" v-model="message" placeholder="Enter your message"
               class="w-full bg-slate-50 border-0 rounded py-4 pl-2 text-sm text-black ">
      </div>
      <div>
        <i class="fa fa-paperclip mx-2 mt-2 px-3 bg-slate-300 py-2.5 rounded-full transition duration-600 hover:bg-slate-400"
           aria-hidden="true"></i>
        <i class="fa fa-microphone mx-2 mt-1 px-3 bg-slate-300 py-2.5 rounded-full transition duration-600 hover:bg-slate-400"
           aria-hidden="true"></i>
        <i @click="sendMessage" class="fa fa-paper-plane mx-2 mt-1 px-3 text-white bg-green-500 py-3  transition rounded-full duration-600 hover:bg-green-600"
           aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from '../components/Profile'
export default {
  name: 'ChatWindow',
  data() {
    return {
      message: '',
      messages: [],
      sendIcon: '',
      component:{
        'Profile':Profile
      }
    }
  },
  components:{
    Profile
  },
  methods: {
    sendMessage() {
      this.messages.push(this.message)
      this.message = '';
    },
    showProfile(){
      this.$emit('showProfile')
    }
  }
}
</script>
