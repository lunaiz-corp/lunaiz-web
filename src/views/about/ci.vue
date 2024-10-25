<script setup>
import Hero from '../../components/hero.vue'
</script>

<template>

  <Hero>
    <template #head-txt>introducing our ci</template>
  </Hero>

  <main class="container text-black dark:text-white max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="flex flex-initial columns-2">
        <div class="border-r min-w-[50%] border-gray-900 dark:border-gray-300">
            <p class="text-lg md:text-2xl">ci</p>
            <img src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t.png" class="block dark:hidden" alt="lunaiz ci" />
            <img src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t-d.png" class="hidden dark:block" alt="lunaiz ci" />
        </div>
        <div class="ml-1 min-w-[50%] md:ml-[1rem] md:min-w-[30rem]">
            <p class="text-lg md:text-2xl">symbol</p>
            <img class="mx-auto my-[1rem] max-w-[45%]" src="https://cdn.lunaiz.com/lunaiz_logo/icon-xl.png" />
            <hr class="h-px my-2 bg-gray-900 border-0 dark:bg-gray-300">
            <p class="text-lg md:text-2xl">wordmark</p>
            <img src="https://cdn.lunaiz.com/lunaiz_logo/text-l.svg" class="mx-auto my-[1rem] max-w-[45%] block dark:hidden" alt="lunaiz wordmark" />
            <img src="https://cdn.lunaiz.com/lunaiz_logo/text-d.svg" class="mx-auto my-[1rem] max-w-[45%] hidden dark:block" alt="lunaiz wordmark" />
        </div>
    </div>
    <div class="flex flex-wrap justify-between mt-[1rem] pt-[1rem] border-t border-gray-900 dark:border-gray-300">
        <div class="">
            <p class="text-lg md:text-2xl">color.</p>
        </div>
    </div>
    <div class="flex flex-initial columns-3 mt-[1rem] pb-[2rem] justify-between">
        <div class="">
            <img class="max-w-[45%] mx-auto" src="https://cdn.lunaiz.com/lunaiz_assets/color_white.png" />
        </div>
        <div class="">
            <img class="max-w-[45%] mx-auto" src="https://cdn.lunaiz.com/lunaiz_assets/color_black.png" />
        </div>
        <div class="">
            <img class="max-w-[45%] mx-auto" src="https://cdn.lunaiz.com/lunaiz_assets/color_lunaizblue.png" />
        </div>
    </div>
  </main>
  
</template>
