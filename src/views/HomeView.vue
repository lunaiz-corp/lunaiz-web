<script setup>
import Hero from '../components/hero.vue'
import mainItem from '../components/mainItem.vue'
</script>

<template>
  <Hero>
    <template #head-txt>our ligiht illuminates your night</template>

  </Hero>

  <main class="max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="flex flex-wrap w-full">
      <mainItem>
        <template #img><img class="w-[10rem] rounded"
            src="https://cdn.lunaiz.com/lunaiz_assets/am-to-mxm.svg"></template>
        <tempalte #title>Apple Music to Musixmatch</tempalte>
        <tempalte #desc-1>Apple Music to Musixmatch</tempalte>
        <tempalte #desc-2>Musixmatch to Apple music</tempalte>
      </mainItem>
    </div>
  </main>
</template>
