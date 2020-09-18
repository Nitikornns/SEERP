<template>
    <div class="m-3">
    <label>
      {{ label }}
      <input
        :type="type"
        v-model="text"
        class="bg-white border border-gray-300 rounded p-2"
        @change="$emit('change', { text: text })"
      />
    </label>



    <!-- <form
      class="border-teal-300 border-2 rounded-lg bg-gray-600 shadow-md rounded pl-8 pr-8 pt-8 mb-48 pb-6"
    >
      <div class="md:flex md:items-center mb-6 mt-4">
        <div class="md:w-1/3">
         555
        </div>
        <div class="md:w-2/3">
555
        </div>
      </div>

     <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
        <div class="md:w-2/3">
          
        </div>
      </div>

   <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <button
          class="bg-blue-600 hover:bg-blue-300 border border-teal-300 text-white font-bold ml-6 py-3 px-10 rounded-md focus:outline-none focus:shadow-outline"
          type="button"
          @click="$emit()"
        >
          Log in
        </button>
      </div>
    </form> -->
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ["type", "label"],
  data: () => ({
    text: null,
  }),
  methods: {},
};
</script>

<style></style>
