<template>
  <div class="relative bg-gray-300">
    <Navbar />
    <!-- <NavbarAside/> -->
    <div class="flex justify-center">
      <img
        class="object-contain h-56 w-56 mb-2 mt-16 ml-auto mr-auto"
        src="selogo.png"
      />
    </div>

    <div class="flex items-center justify-center">
      <h1 class="text-center text-xl">SOFTWARE ENGINEERING</h1>
    </div>
    <div class="flex items-center justify-center">
      <h3 class="text-center text-4xl">UNIVERSITY OF PHAYAO</h3>
    </div>

    <div class="flex items-center justify-center mt-12">
      <InputText />
    </div>
  </div>
</template>

<script>
import InputText from "@/components/InputText";
import Navbar from "@/components/Navbar";
import AccountDropdown from "@/components/AccountDropdown";
import NavbarAside from "@/components/NavbarAside";

export default {
  name: "Login",
  components: {
    InputText,
    Navbar,
    AccountDropdown,
    NavbarAside,
  },
  data: () => ({}),
};
</script>

<style>
</style>
