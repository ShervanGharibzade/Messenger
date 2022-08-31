<template>
  <div ref="hidden" class="p-4 overflow-hidden overflow-y-scroll">
    <div class="flex ">
      <h3 class="font-semibold flex-1 p-2">About</h3>
      <i @click="closeProfile" class="fa fa-times mt-3 p-2 cursor-pointer rounded bg-gray-200 hover:bg-gray-400  " aria-hidden="true"></i>
    </div>
    <div class="grid justify-center py-4">
      <img class="rounded-full w-26 " src="https://soho.laborasyon.com/default/dist/media/img/women_avatar5.jpg" alt="pic">
      <h3 class="text-green-500 font-semibold text-2xl text-center">Amir Rahmani</h3>
      <h6 class="text-center">Laste seen: Today</h6>
    </div>
    <div class="border-y-2 border-gray-300 py-3">
      <span>About</span>
      <p class="text-gray-500">I love reading, traveling and discovering new things. You need to be happy in life.</p>
    </div>
    <div class="py-3">
      <span>Phone</span>
      <p class="text-gray-400">(555) 555 55 55</p>
    </div>
    <div class="border-y-2 border-gray-400 py-3">
      <span>Media</span>
      <div class="flex overflow-hidden overflow-x-scroll">
        <img alt="avatar" class="w-20 h-20" src="../assets/images/man_avatar3.jpg">
        <img alt="avatar" class="w-20 h-20 mx-2" src="../assets/images/man_avatar2.jpg">
        <img alt="avatar" class="w-20 h-20" src="../assets/images/man_avatar1.jpg">
        <img alt="avatar" class="w-20 h-20 mx-2" src="../assets/images/man_avatar5.jpg">
        <img alt="avatar" class="w-20 h-20" src="../assets/images/man_avatar3.jpg">
        <img alt="avatar" class="w-20 h-20 mx-2" src="../assets/images/man_avatar2.jpg">
        <img alt="avatar" class="w-20 h-20" src="../assets/images/man_avatar1.jpg">
        <img alt="avatar" class="w-20 h-20 mx-2" src="../assets/images/man_avatar5.jpg">
      </div>
    </div>
    <div class="py-4">
      <span>City</span>
      <p class="text-gray-400">Iran/Karaj</p>
    </div>
    <div>
      <span>Social links</span>
      <div class="grid grid-cols-6 py-4">
        <i class="fa fa-facebook-square text-white bg-blue-800 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
        <i class="fa fa-twitter text-white bg-blue-500 rounded-full w-8 h-8 mb-2 pt-2.5 pl-2" aria-hidden="true"></i>
        <i class="fa fa-instagram text-white bg-red-500 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
        <i class="fa fa-facebook-square text-white bg-blue-800 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
        <i class="fa fa-twitter text-white bg-blue-500 rounded-full w-8 h-8 mb-2 pt-2.5 pl-2" aria-hidden="true"></i>
        <i class="fa fa-instagram text-white bg-red-500 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
        <i class="fa fa-facebook-square text-white bg-blue-800 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
        <i class="fa fa-twitter text-white bg-blue-500 rounded-full w-8 h-8 mb-2 pt-2.5 pl-2" aria-hidden="true"></i>
        <i class="fa fa-instagram text-white bg-red-500 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
      </div>
    </div>
    <div>
      <div class="flex items-center my-2 w-full">
        <label for="toggleB" class="flex items-center cursor-pointer">
          <div class="relative">
            <input type="checkbox" id="toggleB" class="sr-only">
            <div class="block bg-white border-gray-400 border w-8 h-4 rounded-full"></div>
            <div class="dot absolute bg-gray-400 left-1 top-0.5 bg-white w-3 h-3 rounded-full transition"></div>
          </div>
          <div class="ml-3 text-sm">
            Block
          </div>
        </label>
      </div>
      <div class="flex items-center my-2 w-full">
        <label for="toggle2" class="flex items-center cursor-pointer">
          <div class="relative">
            <input type="checkbox" id="toggle2" class="sr-only">
            <div class="block bg-white border-gray-400 border w-8 h-4 rounded-full"></div>
            <div class="dot absolute bg-gray-400 left-1 top-0.5 bg-white w-3 h-3 rounded-full transition"></div>
          </div>
          <div class="ml-3 text-sm">
            Mute
          </div>
        </label>
      </div>
      <div class="flex items-center my-2 w-full">
        <label for="toggle1" class="flex items-center cursor-pointer">
          <div class="relative">
            <input type="checkbox" id="toggle1" class="sr-only group">
            <div class="block bg-white border-gray-400 border w-8 h-4 rounded-full"></div>
            <div class="dot group-checked:bg-blue-600 absolute bg-gray-400 left-1 top-0.5 bg-white w-3 h-3 rounded-full transition"></div>
          </div>
          <div class="ml-3 text-sm">
            Get notification
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    closeProfile(){
      this.$emit('closeProfile')
    }
  },
    props:['showProfile']
}
</script>
