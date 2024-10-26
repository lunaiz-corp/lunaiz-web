<script setup>
import Hero from '../components/hero.vue';
import mainItem from '../components/mainItem.vue';
</script>

<template>
  <Hero>
    <template #head-txt>our partners</template>
  </Hero>

  <main class="container max-w-screen-xl mx-auto p-6 text-black dark:text-white">
    <div class="w-full space-y-8">
      <!-- 파트너 목록 항목 1 -->
      <mainItem title="DNN" descOne="대한민국 언론의 혁신" descTwo="Digital News Network">
        <template #img>
          <img 
            class="h-24 w-auto rounded-md object-contain mx-auto md:mx-0" 
            src="https://www.dnn.ne.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e4b94994.png&w=3840&q=75"
            alt="DNN Logo"
          />
        </template>
      </mainItem>

      <!-- 파트너 목록 항목 2 -->
      <mainItem title="경기고등학교 방송부 KHBS" descOne="경기고등학교 소식을 가장 빠르게" descTwo="Kyunggi High Broadcasting Service">
        <template #img>
          <img 
            class="h-24 w-auto rounded-md object-contain mx-auto md:mx-0" 
            src="https://cdn.lunaiz.com/kghs/badge4x.png"
            alt="KHBS Logo"
          />
        </template>
      </mainItem>
    </div>
  </main>
</template>