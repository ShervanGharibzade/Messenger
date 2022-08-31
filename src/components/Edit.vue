<template>
  <div class="top-0 fixed bg-gray-500/30 w-full h-full z-20 rounded-lg ">
    <div class="flex gap-5 justify-center">
      <div class="flex">
        <h2 class="flex-1 bg-white text-2xl relative left-8 top-24 z-10">Personal</h2>
        <i @click="close" class="fa fa-times relative top-24 left-64 hover:bg-gray-400 border px-2 border-gray-400 rounded z-10 text-xl" aria-hidden="true"></i>
      </div>
      <h3 class="cursor-pointer bg-white px-2 rounded-t border-x border-t border-gray-400 relative -left-12 top-36 z-20" @click="component='personal'">Personal</h3>
      <h3 class="cursor-pointer bg-white px-2 rounded-t border-x border-t border-gray-400 relative -left-12 top-36 z-20" @click="component='about'">About</h3>
      <h3 class="cursor-pointer bg-white px-2 rounded-t border-x border-t border-gray-400 relative -left-12 top-36 z-20" @click="component='social'">Social links</h3>
    </div>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
import Personal from './Personal'
import About from './About'
import Social from './Social'

export default {
  data(){
    return{
    component:'personal'
    }
  },
  components:{
    'personal':Personal,
    'about':About,
    'social':Social
  },
  methods:{
    close(){
      this.$emit('closeEdit')
    }
  }
}
</script>
