<script setup>
import Hero from '../components/hero.vue'
</script>

<template>

  <Hero>
    <template #head-txt>introducing our ci</template>
  </Hero>

  <main class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="row py-5" style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
        <div class="col-md-6 col-12 d-grid py-auto" style="border-right: 1px solid #000;">
            <p class="ps-3 fs-4 fw-bold">ci</p>
            <img class="w-100" src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t.png" />
        </div>
        <div class="col-md-6 col-12 d-grid">
            <p class="ps-3 fs-4 fw-bold">symbol</p>
            <img class="lan-img mx-auto" src="https://cdn.lunaiz.com/lunaiz_logo/icon-xl.png" />
            <hr style="opacity: 1;" class="d-md-grid d-none">
            <p class="ps-3 fs-4 fw-bold mt-md-0 mt-5">wordmark</p>
            <img class="lan-img mx-auto my-5" src="https://cdn.lunaiz.com/lunaiz_logo/text-l.svg" />
        </div>
    </div>
    <div class="row pt-5">
        <div class="col-8 d-grid">
            <p class="ps-3 fs-4 fw-bold mx-auto">primary color.</p>
        </div>
        <div class="col-4 d-grid">
            <p class="ps-3 fs-4 fw-bold mx-auto">accent color.</p>
        </div>
    </div>
    <div class="row pb-5" style="border-bottom: 1px solid #000;">
        <div class="col-4 d-grid">
            <img class="w-75 mx-auto" src="https://cdn.lunaiz.com/lunaiz_assets/color_white.png" />
        </div>
        <div class="col-4 d-grid">
            <img class="w-75 mx-auto" src="https://cdn.lunaiz.com/lunaiz_assets/color_black.png" />
        </div>
        <div class="col-4 d-grid">
            <img class="w-75 mx-auto" src="https://cdn.lunaiz.com/lunaiz_assets/color_lunaizblue.png" />
        </div>
    </div>
  </main>
  
</template>
