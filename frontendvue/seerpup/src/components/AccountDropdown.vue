<template>
  <div class="relative">
    <button @click="isopen = !isopen"
      class="relative z-10 block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
    >
      <img
        class="xs:mr-2 md:mr-8 h-full w-full object-cover"
        src="neymar.jpg"
        alt="Waiting"
      />
    </button>
    <button v-if="isopen" @click="isopen = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-50"></button>
    <div v-if="isopen" class="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl">
      <a
        href=""
        class="block px-4 pr-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >แก้ไขข้อมูล</a
      >
      <a
        href=""
        class="block px-4 pr-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >ตั้งค่าข้อมูลผู้ใช้</a
      >
      <a
        href=""
        class="block px-4 pr-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >ออกจากระบบ</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountDropdown",
  data() {
      return {
          isopen: false
      }
  },
  created() {
      const handleEscape = (e) => {
          if (e.key === 'Esc' || e,key === 'Escape'){
          this.isopen = false
      }
  }

  document.addEventListener('keydown',handleEscape)

  this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown',handleEscape)
  })
  }
};
</script>

<style></style>
