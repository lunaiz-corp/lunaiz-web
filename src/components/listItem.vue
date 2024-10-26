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
    <div class="flex flex-wrap mt-[4rem] md:mt-[2rem]">
        <div class="block mx-auto max-w-full md:min-w-[30rem] md:max-w-[70rem] text-black dark:text-white">
            <div class="flex flex-wrap justify-self-start justify-start">
                <div class="mx-auto md:ml-0 md:mr-[3rem]">
                    <slot name="img" />
                </div>
                <div class="mx-auto mt-4 min-w-full md:min-w-0 md:m-0 text-center md:text-left">
                    <h1 class="text-xl md:text-2xl font-bold break-keep">
                        {{ title }}
                    </h1>
                    <p class="text-lg md:text-xl mt-1 md:mt-2 break-keep">
                        {{ descOne }}
                    </p>
                    <p class="text-base md:text-lg mt-1 md:mt-2 break-keep">
                        {{ date }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>