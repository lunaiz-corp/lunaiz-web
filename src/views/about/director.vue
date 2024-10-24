<script setup>
import Hero from '../../components/hero.vue'
import mainItem from '../../components/mainItem.vue'

</script>

<template>
  <Hero>
    <template #head-txt>leaders of lunaiz</template>

  </Hero>

  <main class="max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="w-full">
      <mainItem title="손지민 &nbsp;&nbsp;[ SSS1267_ ]" descOne="#기획 #운영 #UI/UX #FrontEnd">
        <template #img><img class="h-[4rem] rounded"
            src="https://cdn.lunaiz.com/lunaiz_assets/Director/CEO.svg"></template>
      </mainItem>
      <mainItem title="유정호 &nbsp;&nbsp;[ Ddongddi ]" descOne="#기획 #운영 #감사 #FrontEnd">
        <template #img><img class="h-[4rem] rounded"
            src="https://cdn.lunaiz.com/lunaiz_assets/Director/COO.svg"></template>
      </mainItem>
      <mainItem title="권민석 &nbsp;&nbsp;[ MinSeok_P ]" descOne="#Network #Security #BackEnd">
        <template #img><img class="h-[4rem] rounded"
            src="https://cdn.lunaiz.com/lunaiz_assets/Director/COO.svg"></template>
      </mainItem>
      <mainItem title="김민수 &nbsp;&nbsp;[ Ayaan ]" descOne="#기획 #운영 #FullStack">
        <template #img><img class="h-[4rem] rounded"
            src="https://cdn.lunaiz.com/lunaiz_assets/Director/CSO.svg"></template>
      </mainItem>
      <mainItem title="하승민 &nbsp;&nbsp;[ NOCSML70 ]" descOne="#기획 #FullStack">
        <template #img><img class="h-[4rem] rounded"
            src="https://cdn.lunaiz.com/lunaiz_assets/Director/CBO.svg"></template>
      </mainItem>
    </div>
  </main>
</template>
