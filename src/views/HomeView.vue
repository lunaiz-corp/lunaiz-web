<script setup>
import Hero from '../components/hero.vue'
import mainItem from '../components/mainItem.vue'

</script>

<template>
  <Hero>
    <template #head-txt>our ligiht illuminates your night</template>

  </Hero>

  <main class="max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="w-full">
      <mainItem title="Apple Music to Musixmatch" descOne="Apple Music to Musixmatch" descTwo="Musixmatch to Apple music">
        <template #img><img class="h-[10rem] rounded"
            src="https://cdn.lunaiz.com/lunaiz_assets/am-to-mxm.svg"></template>
      </mainItem>
      <!-- <mainItem title="보겸 당첨 알리미" descOne="보겸TV와 보겸S 채널의 이벤트 소식을 받아보세요!" descTwo="진행중이거나 지난 이벤트의 정보를 확인할 수 있습니다">
        <template #img><img class="h-[10rem] rounded-[20px]"
            src="https://yt3.googleusercontent.com/vw50YH9rq1iJiaAGJwCguGkLWlUOPiNSjylXAK8FaC2ezH9oegK8gEH5XxzuwsEpch-8_WBJ=s160-c-k-c0x00ffffff-no-rj"></template>
      </mainItem> -->
    </div>
  </main>
</template>
