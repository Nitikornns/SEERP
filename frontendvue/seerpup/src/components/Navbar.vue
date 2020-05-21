<template>
<div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-700 p-1">
  <div class="flex items-center flex-shrink-0 text-white m-0">
           <img class="object-contain h-16 w-12 ml-20 mr-20" src="selogo.png"/>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-red-800 hover:text-white hover:border-white">
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        หน้าหลัก
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        ประวัติส่วนตัว
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        อาจารย์ที่ปรึกษา
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Profile</a>
    </div>
  </div>
</nav>

</div>
  
</template>

<script>
export default {
    name : "Navbar"
}
</script>

<style>

</style>