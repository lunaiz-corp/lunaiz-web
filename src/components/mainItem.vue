<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  descOne: {
    type: String,
    required: false
  },
  descTwo: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="block mx-auto justify-items-center min-w-[30rem] max-w-[50rem] mt-[5rem] text-black dark:text-white">
    <div class="flex flex-wrap mx-auto justify-start">
      <div class="mr-[4rem]">
        <slot name="img"/>
      </div>
      <div>
        <h1 class="text-3xl font-bold">
          {{ title }}
        </h1>
        <p class="text-xl mt-2">
          {{ descOne }}
        </p>
        <p class="text-xl mt-2">
          {{ descTwo }}
        </p>
      </div>
    </div>
  </div>
</template>
