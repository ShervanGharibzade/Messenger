<template>
  <div>
    <div ref="display" class="top-0 z-40 fixed bg-gray-500/30 w-full h-full z-40">
      <div class="w-96 p-4 mt-44 bg-indigo-900 mx-auto mt-30 rounded-xl">
        <img class=" mx-auto mb-10 rounded-full" src="https://soho.laborasyon.com/default/dist/media/img/women_avatar1.jpg" alt="pic">
        <h3 class="text-white text-center text-xl mb-4">Majid Farahani calling ...</h3>
        <div class="text-center ">
          <i @click="closePop" class="fa fa-times mr-2 text-2xl cursor-pointer w-16 p-4 rounded-full  bg-red-600" aria-hidden="true"></i>
          <i @click="closePop" class="fa fa-check ml-2 text-2xl cursor-pointer w-16 p-4 rounded-full  bg-green-600" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{}
  },
  methods:{
    closePop(){
      this.$refs.display.remove()
    }
  }
}
</script>
