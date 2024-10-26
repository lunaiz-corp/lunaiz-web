<script setup>
import Hero from '../../components/hero.vue'
import ListItem from '../../components/listItem.vue'
import Pagination from '../../components/pagination.vue'
import { ref, onMounted, computed } from 'vue'
import moment from 'moment'
import axios from 'axios'

const prs = ref([])
const currentPage = ref(1)
const pressReleasesPerPage = 5

const fetchPrs = async () => {
    try {
        const response = await axios.get('https://api.lunaiz.com/api/v1/press-release')
        prs.value = response.data
    } catch (error) {
        console.error('Error fetching prs:', error)
    }
}

const formattedDate = (createdAt) => {
    const date = moment(createdAt)
    const hours = date.hours()
    const ampm = hours < 12 ? '오전' : '오후'
    return `${date.format('YYYY년 MM월 DD일')} ${ampm} ${hours % 12 || 12}시 ${date.minutes()}분`
}

const changePage = (page) => {
    if (page < 1 || page > Math.ceil(prs.value.length / pressReleasesPerPage)) {
        return
    }
    currentPage.value = page
}

const currentPressReleases = computed(() => {
    const startIndex = (currentPage.value - 1) * pressReleasesPerPage
    return prs.value.slice(startIndex, startIndex + pressReleasesPerPage)
})

onMounted(fetchPrs)
</script>

<template>
    <Hero>
        <template #head-txt>Press Release</template>
    </Hero>

    <main class="container max-w-screen-xl items-center justify-around mx-auto p-4" v-if="prs.length">
        <RouterLink :to="`/media/prs/` + pr.id" v-for="pr in currentPressReleases" :key="pr.id">
            <ListItem id="pr-list-item" :title="pr.title" :descOne="pr.content" :date="formattedDate(pr.createdAt)">
                <template #img><img class="h-[7.5rem] rounded" :src="pr.banner_image"></template>
            </ListItem>
        </RouterLink>
        <Pagination :current-page="currentPage" :totalItems="prs.length" :items-per-page="pressReleasesPerPage" @page-changed="changePage" />
    </main>
    <h1 class="text-2xl text-center font-bold" v-else>No Press Releases are found</h1>
</template>
