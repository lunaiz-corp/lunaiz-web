<script setup>
import Hero from '../../components/hero.vue'
</script>

<template>

  <Hero>
    <template #head-txt>introducing our ci</template>
  </Hero>

  <main class="text-black dark:text-white max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="flex flex-wrap" style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
        <div class="" style="border-right: 1px solid #000;">
            <p class="text-lg">ci</p>
            <img src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t.png" class="max-w-[45%] block dark:hidden" alt="lunaiz ci" />
            <img src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t-d.png" class="max-w-[45%] hidden dark:block" alt="lunaiz ci" />
        </div>
        <div>
            <p class="text-lg">symbol</p>
            <img class="max-w-[45%]" src="https://cdn.lunaiz.com/lunaiz_logo/icon-xl.png" />
            <hr style="opacity: 1;" class="">
            <p class="text-lg">wordmark</p>
            <img src="https://cdn.lunaiz.com/lunaiz_logo/text-l.svg" class="max-w-[45%] block dark:hidden" alt="lunaiz wordmark" />
            <img src="https://cdn.lunaiz.com/lunaiz_logo/text-d.svg" class="max-w-[45%] hidden dark:block" alt="lunaiz wordmark" />
        </div>
    </div>
    <div class="flex flex-wrap">
        <div class="col-8 d-grid">
            <p class="text-lg">primary color.</p>
        </div>
        <div class="col-4 d-grid">
            <p class="text-lg">accent color.</p>
        </div>
    </div>
    <div class="flex flex-wrap" style="border-bottom: 1px solid #000;">
        <div class="">
            <img class="" src="https://cdn.lunaiz.com/lunaiz_assets/color_white.png" />
        </div>
        <div class="">
            <img class="" src="https://cdn.lunaiz.com/lunaiz_assets/color_black.png" />
        </div>
        <div class="">
            <img class="" src="https://cdn.lunaiz.com/lunaiz_assets/color_lunaizblue.png" />
        </div>
    </div>
  </main>
  
</template>
