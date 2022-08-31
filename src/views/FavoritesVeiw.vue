<template>
  <header class="flex px-4 py-2">
  <h3 class="text-xl font-medium flex-1">Chats</h3>
  <div>
    <i class="fa fa-users text-xl px-2 bg-gray-300 rounded" aria-hidden="true"></i>
    <i class="fa fa-comment-o ml-4 px-2 text-xl bg-gray-300 rounded" aria-hidden="true"></i>
    <i class="fa fa-times cursor-pointer  ml-4 lg:block xl:hidden hover:bg-gray-400 lg:block w-8 mt-2 px-2 text-xl bg-gray-300 rounded" aria-hidden="true"></i>
  </div>
</header>
  <input class="w-80 bg-gray-200 mt-4 ml-6 h-8 rounded text-gray-400 text-sm pl-2" placeholder="Search in favorites" >
  <div class="h-126 overflow-hidden overflow-y-scroll">
    <ul>
      <li>
        <div v-for="user in users" class="flex my-3">
          <div class="ml-3">
            <p class="text-xl">{{ user.name }} {{ user.family }}</p>
            <p class="text-lg text-gray-500">{{ user.message }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

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
