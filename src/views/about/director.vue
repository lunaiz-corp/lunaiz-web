<script setup>
import Hero from '../../components/hero.vue'
import listItem from '../../components/listItem.vue'

</script>

<template>
  <Hero>
    <template #head-txt>leaders of lunaiz</template>

  </Hero>

  <main class="container max-w-screen-xl items-center justify-around mx-auto p-4">
    <div class="w-full">
      <listItem title="손지민 &nbsp;&nbsp;[ SSS1267_ ]" descOne="#기획 #UI/UX #FrontEnd">
        <template #img><h1 class="text-4xl font-bold mx-auto align-middle">C E O</h1><p class="text-lg w-full text-center">대표이사</p></template>
      </listItem>
      <listItem title="유정호 &nbsp;&nbsp;[ Ddongddi ]" descOne="#기획 #감사 #FrontEnd">
        <template #img><h1 class="text-4xl font-bold mx-auto align-middle">C O O</h1><p class="text-lg w-full text-center">운영이사</p></template>
      </listItem>
      <listItem title="권민석 &nbsp;&nbsp;[ MinSeok_P ]" descOne="#Network #Security #BackEnd">
        <template #img><h1 class="text-4xl font-bold mx-auto align-middle">C T O</h1><p class="text-lg w-full text-center">기술이사</p></template>
      </listItem>
      <listItem title="김민수 &nbsp;&nbsp;[ Ayaan ]" descOne="#기획 #UI/UX #FullStack">
        <template #img><h1 class="text-4xl font-bold mx-auto align-middle">C S O</h1><p class="text-lg w-full text-center">전략이사</p></template>
      </listItem>
      <listItem title="하승민 &nbsp;&nbsp;[ NOCSML70 ]" descOne="#기획 #FullStack">
        <template #img><h1 class="text-4xl font-bold mx-auto align-middle">C B O</h1><p class="text-lg w-full text-center">사업이사</p></template>
      </listItem>
    </div>
  </main>
</template>
