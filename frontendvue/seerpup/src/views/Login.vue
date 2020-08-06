<template>
  <div class="">
    <NavbarLogin />
    <div
      class=""
    >
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

      <!-- <div class="flex flex-col  mx-auto text-center h-full m-8">

                <InputText
                  type="text"
                  @change="user.username = $event.text"
                  label="Username"
                />
            

 
                  <InputText
                    type="password"
                    @change="user.password = $event.text"
                    label="Password"
                  />
   
              <ButtonLogin text="Login" @click="login"></ButtonLogin>

      </div>     -->

      <form
        class="w-full max-w-md mx-auto my-auto bg-gray-500 shadow-md rounded pl-8 pr-8 pt-8 mb-8 pb-8 mt-8"
      >
        <div class="my-4 ml-8 mt-4">
          <InputText
            type="text"
            @change="user.username = $event.text"
            label="Username"
          />
        </div>
        <div class="my-4 ml-8">
          <InputText
            type="password"
            @change="user.password = $event.text"
            label="Password"
          />
        </div>
        <ButtonLogin
          class="mt-4 ml-32 mt-8"
          type="submit"
          text="Login"
          @click="login"
        ></ButtonLogin>
      </form>
    </div>
  </div>
</template>

<script>
import InputText from "@/components/InputText";
import ButtonLogin from "@/components/ButtonLogin";
import NavbarLogin from "@/components/NavbarLogin";
import AccountDropdown from "@/components/AccountDropdown";
import NavbarAside from "@/components/NavbarAside";

export default {
  name: "Login",
  components: {
    ButtonLogin,
    InputText,
    NavbarLogin,
    AccountDropdown,
    NavbarAside,
  },
  data: () => ({
    user: {
      username: null,
      password: null,
    },
  }),
  methods: {
    login() {
      if (this.user.username === "admin" && this.user.password === "password") {
        this.$router.push({ name: "Home" });
      } else {
        alert("Username or password are not correct.");
      }
    },
    ChangeUser(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
