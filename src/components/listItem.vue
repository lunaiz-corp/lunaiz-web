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
  date: {
    type: String,
    required: false
  }
})
</script>

<template>
    <div class="flex flex-wrap mt-[2rem]">
        <div class="block mx-auto min-w-[30rem] max-w-[50rem] text-black dark:text-white">
            <div class="flex flex-wrap justify-start">
                <div class="mr-[4rem]">
                    <slot name="img" />
                </div>
                <div>
                    <h1 class="text-3xl font-bold">
                        {{ title }}
                    </h1>
                    <p class="text-xl mt-2">
                        {{ descOne }}
                    </p>
                    <p class="text-lg mt-2">
                        {{ date }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>