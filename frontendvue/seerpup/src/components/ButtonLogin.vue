<template>
  <div class="m-2">
    <button
      class="bg-blue-600 hover:bg-blue-300 border border-teal-300 text-white font-bold py-2 px-10 rounded-md focus:outline-none focus:shadow-outline"
      @click="$emit('click','params')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonLogin",
  props: ['text'],
};
</script>
