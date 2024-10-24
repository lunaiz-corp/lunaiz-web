<script setup>
import Hero from '../../components/hero.vue'
</script>

<template>

  <Hero>
    <template #head-txt>introducing our ci</template>
  </Hero>

  <main class="text-black dark:text-white max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="flex flex-initial columns-2 mt-[2rem]" style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
        <div class="max-w-fit" style="border-right: 1px solid #000;">
            <p class="text-2xl">ci</p>
            <img src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t.png" class="max-w-[45%] block dark:hidden" alt="lunaiz ci" />
            <img src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t-d.png" class="max-w-[45%] hidden dark:block" alt="lunaiz ci" />
        </div>
        <div>
            <p class="text-2xl">symbol</p>
            <img class="max-w-[45%]" src="https://cdn.lunaiz.com/lunaiz_logo/icon-xl.png" />
            <hr style="opacity: 1;" class="">
            <p class="text-2xl">wordmark</p>
            <img src="https://cdn.lunaiz.com/lunaiz_logo/text-l.svg" class="max-w-[45%] block dark:hidden" alt="lunaiz wordmark" />
            <img src="https://cdn.lunaiz.com/lunaiz_logo/text-d.svg" class="max-w-[45%] hidden dark:block" alt="lunaiz wordmark" />
        </div>
    </div>
    <div class="flex flex-wrap justify-between mt-[2rem]">
        <div class="col-8 d-grid">
            <p class="text-2xl">color.</p>
        </div>
    </div>
    <div class="flex flex-initial columns-3 my-[2rem]" style="border-bottom: 1px solid #000;">
        <div class="">
            <img class="max-w-[45%]" src="https://cdn.lunaiz.com/lunaiz_assets/color_white.png" />
        </div>
        <div class="">
            <img class="max-w-[45%]" src="https://cdn.lunaiz.com/lunaiz_assets/color_black.png" />
        </div>
        <div class="">
            <img class="max-w-[45%]" src="https://cdn.lunaiz.com/lunaiz_assets/color_lunaizblue.png" />
        </div>
    </div>
  </main>
  
</template>
