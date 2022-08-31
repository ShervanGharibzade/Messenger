<template>
  <div class="relative w-96 p-4 pt-24  mt-14 bg-white mx-auto mt-30 rounded-xl">
    <div class="flex items-center my-2 w-full">
      <label for="toggleB" class="flex items-center cursor-pointer">
        <div class="relative">
          <input type="checkbox" id="toggleB" class="sr-only">
          <div class="block bg-white border-gray-400 border w-8 h-4 rounded-full"></div>
          <div class="dot absolute bg-gray-400 left-1 top-0.5 bg-white w-3 h-3 rounded-full transition"></div>
        </div>
        <div class="ml-3 text-sm">
          Allow mobile notifications
        </div>
      </label>
    </div>
    <div class="flex items-center my-2 w-full">
      <label for="toggle" class="flex items-center cursor-pointer">
        <div class="relative">
          <input type="checkbox" id="toggle" class="sr-only">
          <div class="block bg-white border-gray-400 border w-8 h-4 rounded-full"></div>
          <div class="dot absolute bg-gray-400 left-1 top-0.5 bg-white w-3 h-3 rounded-full transition"></div>
        </div>
        <div class="ml-3 text-sm">
          Notifications from your friends
        </div>
      </label>
    </div>
    <div class="flex items-center my-2 w-full">
      <label for="toggle1" class="flex items-center cursor-pointer">
        <div class="relative">
          <input type="checkbox" id="toggle1" class="sr-only">
          <div class="block bg-white border-gray-400 border w-8 h-4 rounded-full"></div>
          <div class="dot absolute bg-gray-400 left-1 top-0.5 bg-white w-3 h-3 rounded-full transition"></div>
        </div>
        <div class="ml-3 text-sm">
          Send notifications by email
        </div>
      </label>
    </div>
  </div>
</template>
