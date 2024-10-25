<script setup>
import Hero from '../components/hero.vue'
import mainItem from '../components/mainItem.vue'

</script>

<template>
  <Hero>
    <template #head-txt>our partners</template>

  </Hero>

  <main class="container max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="w-full">
      <mainItem title="DNN" descOne="대한민국 언론의 혁신" descTwo="Digital News Network">
        <template #img><img class="h-[6rem] rounded align-middle"
            src="https://www.dnn.ne.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e4b94994.png&w=3840&q=75"></template>
      </mainItem>
      <mainItem title="경기고등학교 방송부 KHBS" descOne="경기고등학교 소식을 가장 빠르게" descTwo="Kyunggi High Broadcasting Service">
        <template #img><img class="h-[6rem] rounded-[20px]"
            src="https://cdn.lunaiz.com/kghs/badge4x.png"></template>
      </mainItem>
    </div>
  </main>
</template>
