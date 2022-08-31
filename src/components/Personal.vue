<template>
  <div class="relative w-96 p-4 pt-28 mt-14 bg-white mx-auto mt-30 rounded-xl">
    <div>
      <label>Fullname</label>
      <br>
      <div class="flex my-4">
        <i class="fa fa-user-o bg-gray-400 rounded-l w-6 pt-1 pl-1" aria-hidden="true"></i>
        <input class="w-full h-8 border-2 border-gray-300 rounded-r" type="text" />
      </div>
    </div>
    <div>
      <label>Avatar</label>
      <div class="flex gap-4">
        <img class="w-9 h-9 rounded-full" src="https://soho.laborasyon.com/default/dist/media/img/man_avatar3.jpg" alt="avatar">
        <input type="file" class="w-fill p-1 rounded-lg"/>
      </div>
    </div>
    <div>
      <label>City</label>
      <div class="flex my-4">
        <i class="fa fa-map-marker bg-gray-400 rounded-l w-6 pt-2 pl-2" aria-hidden="true"></i>
        <input class="w-full h-8 border-2 border-gray-300 rounded-r " type="text">
      </div>
    </div>
    <div>
      <label>Phone</label>
      <div class="flex my-4">
        <i class="fa fa-phone bg-gray-400 rounded-l w-6 pt-2 pl-1.5"></i>
        <input class="w-full pl-2 h-8 border-2 border-gray-300 rounded-r " type="text" placeholder="(555) 555 55 55">
      </div>
    </div>
    <div>
      <label>Website</label>
      <div class="flex my-4">
        <i class="fa fa-link bg-gray-400 rounded-l w-6 pt-2 pl-1.5" aria-hidden="true"></i>
        <input class="w-full pl-2 h-8 border-2 border-gray-300 rounded-r " type="text">
      </div>
    </div>
    <div class="flex justify-end">
      <button class="bg-green-600 rounded text-white px-5 p-2">Save</button>
    </div>
  </div>
</template>

