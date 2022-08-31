<template>
  <div class="top-0 fixed bg-gray-500/30 w-full h-full">
    <div class="w-96 p-4 mt-44 bg-white mx-auto rounded-xl">
      <i class="fa fa-commenting-o p-4 bg-white rounded-full relative left-36 -top-14 text-5xl" aria-hidden="true"></i>
      <div>
        <h3 class="text-center relative -top-10 text-2xl">Sign in</h3>
        <input class="w-full mb-4 pl-2 h-10 text-xl bg-white border border-gray-400 rounded" type="text" placeholder="Username or email">
        <br>
        <input class="w-full pl-2 h-10 text-xl bg-white border border-gray-400 rounded" type="text" placeholder="Password">
        <div class="flex">
          <div class="my-3 flex-1">
            <input type="checkbox">
            <span class="text-sm ml-2">Remember me</span>
          </div>
            <span class="cursor-pointer mt-3 text-sm">Reset password</span>
        </div>
        <button class="my-3 text-center cursor-pointer hover:bg-green-600 w-full h-10 bg-green-500 rounded">Sign in</button>
        <div>
          <p class="text-sm text-gray-400 text-center mt-2">Login with your social media account.</p>
          <div class="grid grid-cols-7 py-4">
            <i class="fa fa-facebook-square cursor-pointer hover:bg-blue-900 text-white bg-blue-800 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
            <i class="fa fa-twitter text-white cursor-pointer hover:bg-blue-600 bg-blue-500 rounded-full w-8 h-8 mb-2 pt-2.5 pl-2" aria-hidden="true"></i>
            <i class="fa fa-instagram text-white cursor-pointer hover:bg-red-600 bg-red-500 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
            <i class="fa fa-facebook-square cursor-pointer hover:bg-blue-900 text-white bg-blue-800 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
            <i class="fa fa-twitter text-white cursor-pointer hover:bg-blue-600 bg-blue-500 rounded-full w-8 h-8 mb-2 pt-2.5 pl-2" aria-hidden="true"></i>
            <i class="fa fa-instagram text-white cursor-pointer hover:bg-red-600 bg-red-500 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
            <i class="fa fa-facebook-square cursor-pointer hover:bg-blue-900 text-white bg-blue-800 rounded-full w-8 h-8 mb-2 pt-2 pl-2" aria-hidden="true"></i>
          </div>
        </div>
        <p class="pt-2 border-t border-gray-300 text-sm text-gray-400 text-center">Don't have an account?</p>
        <button class="text-sm text-center w-full">Register now!</button>
      </div>
    </div>
  </div>
</template>
