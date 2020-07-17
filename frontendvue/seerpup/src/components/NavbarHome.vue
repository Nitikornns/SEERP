<template>
  <div>
    <nav class="flex items-center justify-between bg-teal-700 p-1 h-16 px-10">
      <div class="flex items-center p-1">
        <div class="flex items-center xs:ml-2 md:ml-20 h-16 w-12 mt-1 mb-1">
          <img class="" src="selogo.png" />
        </div>
        <div class="xs:ml-1 md:ml-3">
          <p class="xs:text-base md:text-2xl text-center text-white">
            SOFTWARE
          </p>
          <p class="xs:text-xs md:text-sm text-center text-white">
            ENGINEERING
          </p>
        </div>
      </div>
      <AccountDropdown/> 

      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-red-800 hover:text-white hover:border-white"
        ></button>
      </div>
    </nav>
  </div>
</template>

<script>
import AccountDropdown from "@/components/AccountDropdown";
import ButtonRegister from "@/components/ButtonRegister";

export default {
  name: "NavbarHome",
  components: {
    AccountDropdown,
    ButtonRegister,
  },
};
</script>

<style></style>
