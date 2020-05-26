<template>
  <div>
    <form
      class="border-teal-400 border-2 rounded-lg bg-gray-400 shadow-md rounded pl-8 pr-8 pt-8 mb-48 pb-6"
    >
      <div class="md:flex md:items-center mb-6 mt-4">
        <div class="md:w-1/3">
          <label
            class="items-center block text-white font-bold md:text-right mb-1 md:mb-0 pr-5"
            for="inline-full-name"
          >
            Username :
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="text "
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"

            placeholder="Enter Your Username"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Password :
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="password"
            placeholder="******************"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
           <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>

        </label>
      </div>
      <div class="flex items-center justify-between">
      <button class="bg-green-500 hover:bg-red-600 text-white font-bold ml-4 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
         Sign up
      </button>
      <button class="bg-blue-800 hover:bg-blue-500 border-1 border-blue-200 text-white font-bold mr-2 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
        Log in
      </button>
     
    </div>
              
    </form>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ['type','label']
};
</script>

<style></style>
