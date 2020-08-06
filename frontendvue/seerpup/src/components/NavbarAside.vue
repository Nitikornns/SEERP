<template>
  <div>
    <aside class="fixed bg-gray-300 h-screen py-5 shadow">
      <div class="flex flex-col text-left">
        <router-link to="/" class="hover:bg-gray-400 px-12 py-2 rounded">
     
          <i class="fa fa-dashboard"></i>
          <span class="">ข้อมูลส่วนตัว</span>
        </router-link>
      </div>
      <div class="flex flex-col text-left">
        <router-link to="/" class="hover:bg-gray-400 px-12 py-2 rounded">
          <i class="fa fa-dashboard"></i>
          <span class="">ประวัติหลักสูตร</span>
        </router-link>
      </div>
      <div class="flex flex-col text-left">
        <router-link to="/" class="hover:bg-gray-400 px-12 py-2 rounded">
          <i class="fa fa-dashboard"></i>
          <span class="">สหกิจ</span>
        </router-link>
      </div>
      <div class="flex flex-col text-left">
        <router-link to="/" class="hover:bg-gray-400 px-12 py-2 rounded">
          <i class="fa fa-dashboard"></i>
          <span class="">ฝึกงาน</span>
        </router-link>
      </div>
      <div class="flex flex-col text-left">
        <router-link to="/" class="hover:bg-gray-400 px-12 py-2 rounded">
          <i class="fa fa-dashboard"></i>
          <span class="">กิจกรรมสาขา</span>
        </router-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "NavbarAside",
};
</script>

<style></style>
