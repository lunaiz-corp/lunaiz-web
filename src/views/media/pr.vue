<script setup>
import Hero from '../../components/hero.vue'
import listItem from '../../components/listItem.vue'
import Pagination from '../../components/pagination.vue'
</script>

<template>
    <Hero>
        <template #head-txt>press release</template>

    </Hero>

    <main class="max-w-screen-xl items-center justify-around mx-auto p-4">
        <listItem>
            <template #img><img class="h-[7.5rem] rounded" src="https://cdn.lunaiz.com/IMG.svg"></template>
        </listItem>
        <Pagination/>
    </main>
</template>
