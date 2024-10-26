<script setup>
import hero from '../../components/hero.vue';
</script>

<template>
  <hero>
    <template #head-txt>introducing our ci</template>
  </hero>

  <main class="container max-w-screen-xl mx-auto p-6 text-black dark:text-white">
    <!-- ci 및 심볼 섹션 -->
    <div class="flex flex-col md:flex-row gap-8 border-b border-gray-900 dark:border-gray-300 pb-8">
      <!-- ci -->
      <div class="flex-1 border-b md:border-b-0 md:border-r border-gray-900 dark:border-gray-300 pb-8 md:pb-0 md:pr-8">
        <p class="text-xl md:text-3xl font-bold mb-4">ci</p>
        <img 
          src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t.png" 
          class="block dark:hidden w-full h-auto"
          alt="lunaiz ci - light mode"
        />
        <img 
          src="https://cdn.lunaiz.com/lunaiz_assets/lunaiz_banner_t-d.png" 
          class="hidden dark:block w-full h-auto"
          alt="lunaiz ci - dark mode"
        />
      </div>
      <!-- 심볼 및 워드마크 -->
      <div class="flex-1 md:pl-8">
        <p class="text-xl md:text-3xl font-bold mb-4">symbol</p>
        <img 
          class="mx-auto my-4 w-1/2 max-w-xs object-contain"
          src="https://cdn.lunaiz.com/lunaiz_logo/icon-xl.png" 
          alt="lunaiz symbol"
        />
        <hr class="my-6 h-px bg-gray-900 border-0 dark:bg-gray-300">
        <p class="text-xl md:text-3xl font-bold mb-4">wordmark</p>
        <img 
          src="https://cdn.lunaiz.com/lunaiz_logo/text-l.svg" 
          class="mx-auto my-4 w-1/2 max-w-xs block dark:hidden"
          alt="lunaiz wordmark - light mode"
        />
        <img 
          src="https://cdn.lunaiz.com/lunaiz_logo/text-d.svg" 
          class="mx-auto my-4 w-1/2 max-w-xs hidden dark:block"
          alt="lunaiz wordmark - dark mode"
        />
      </div>
    </div>

    <!-- 컬러 섹션 -->
    <section class="pt-8 mt-4">
      <p class="text-xl md:text-3xl font-bold mb-6">color</p>
      <div class="flex flex-wrap justify-between gap-8">
        <div class="flex-1 md:flex-none md:w-1/3">
          <img 
            class="w-full max-w-xs mx-auto"
            src="https://cdn.lunaiz.com/lunaiz_assets/color_white.png" 
            alt="lunaiz color - white"
          />
        </div>
        <div class="flex-1 md:flex-none md:w-1/3">
          <img 
            class="w-full max-w-xs mx-auto"
            src="https://cdn.lunaiz.com/lunaiz_assets/color_black.png" 
            alt="lunaiz color - black"
          />
        </div>
        <div class="flex-1 md:flex-none md:w-1/3">
          <img 
            class="w-full max-w-xs mx-auto"
            src="https://cdn.lunaiz.com/lunaiz_assets/color_lunaizblue.png" 
            alt="lunaiz color - lunaiz blue"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* 추가적인 전역 스타일을 설정할 수 있습니다. */
</style>
