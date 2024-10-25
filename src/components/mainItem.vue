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
  <div class="block mx-auto justify-items-center max-w-full md:min-w-[20rem] md:max-w-[50rem] mt-[5rem] text-black dark:text-white">
    <div class="flex flex-wrap mx-auto justify-start">
      <div class="mx-auto md:ml-0 md:mr-[4rem]">
        <slot name="img"/>
      </div>
      <div class="mx-auto md:m-0 min-w-full md:min-w-0 text-center md:text-start mt-4 md:mt-0">
        <h1 class="text-2xl md:text-3xl font-bold">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl mt-1 md:mt-2">
          {{ descOne }}
        </p>
        <p class="text-lg md:text-xl mt-1 md:mt-2">
          {{ descTwo }}
        </p>
      </div>
    </div>
  </div>
</template>
