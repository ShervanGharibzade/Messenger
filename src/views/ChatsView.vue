<template>
  <div class="overflow-hidden relative">
    <header class="flex  px-4 py-2 mt-4">
      <h3 class="text-xl font-medium flex-1">Chats</h3>
      <div>
        <i class="fa fa-users text-xl cursor-pointer hover:bg-gray-400  px-2 bg-gray-300 rounded" aria-hidden="true"></i>
        <i class="fa fa-comment-o ml-4 cursor-pointer hover:bg-gray-400  px-2 text-xl bg-gray-300 rounded" aria-hidden="true"></i>
        <i class="fa fa-times cursor-pointer ml-4 xl:hidden hover:bg-gray-400 md:block w-8 mt-2 px-2 text-xl bg-gray-300 rounded" aria-hidden="true"></i>
      </div>
    </header>
    <input class="w-80 m-4 bg-gray-200 mt-4 h-8 rounded text-gray-400 text-sm pl-2" placeholder="Search in chats" >
    <div class="overflow-hidden relative overflow-y-scroll">
      <ul class="h-124">
        <li>
          <div v-for="user in users" class="flex my-3 group relative  cursor-pointer">
            <div v-if="user.name === 'Reza'" class="flex my-3 relative  cursor-pointer border-l-4 border-green-500">
              <img  class="w-9 h-9 rounded-full ml-3 mt-4" :src="user.url" alt="pic">
              <i v-if="user.family === 'Farahani' || user.family === 'Ameli'" class="fa fa-circle absolute left-9 top-4 rounded-full h-3 w-3 text-green-500 outline outline-offset-12 outline-white" aria-hidden="true"></i>
              <div class="ml-3">
                <p class="text-xl">{{ user.name }} {{ user.family }}</p>
                <p class="text-lg text-gray-500">{{ user.message }}</p>
              </div>
            </div>
            <div v-if="user.name !== 'Reza'" class="group flex my-3 relative  cursor-pointer">
              <img  class="w-9 h-9 rounded-full ml-3 mt-4" :src="user.url" alt="pic">
              <i v-if="user.family === 'Farahani' || user.family === 'Ameli'" class="fa fa-circle absolute left-9 top-4 rounded-full h-3 w-3 text-green-500 outline outline-offset-12 outline-white" aria-hidden="true"></i>
              <div class="ml-3">
                <p class="text-xl">{{ user.name }} {{ user.family }}</p>
                <p class="text-lg text-gray-500">{{ user.message }}</p>
              </div>
              <ul class="absolute w-32 hidden z-40 group-hover:block bg-white border border-gray-300 left-48 -top-5 rounded p-2">
                <li class="cursor-pointer hover:bg-gray-200 rounded px-2">
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
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {
      user: ''
    }
  },
  computed: {
    ...mapState([
      'users'
    ])
  }
}
</script>
