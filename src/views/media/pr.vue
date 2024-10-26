<template>
    <Hero>
        <template #head-txt>press release</template>
    </Hero>

    <div class="container max-w-screen-md mx-auto p-4">
        <main v-if="prs.length" class="space-y-3">
            <RouterLink v-for="pr in paginatedPrs" :key="pr.id" :to="`/media/prs/` + pr.id" class="block">
                <listItem :title="pr.title" :descOne="getPreview(pr.content)" :date="formattedDate(pr.createdAt)"
                    :author="pr.author">
                    <template #img>
                        <div v-if="pr.banner_image" class="h-20 w-20">
                            <img :src="pr.banner_image" alt="pr image"
                                class="h-full w-full object-cover rounded dark:shadow-gray-800" @error="pr.banner_image = ''" />
                        </div>
                    </template>
                </listItem>
            </RouterLink>

            <Pagination :totalItems="prs.length" :current-page="currentPage" :items-per-page="pressReleasesPerPage"
                @page-changed="changePage" class="mt-8" />
        </main>

        <h1 v-else class="text-2xl text-center font-bold text-gray-600 dark:text-white">No Press Releases are found</h1>
    </div>
</template>

<script setup>
import Hero from '../../components/hero.vue'
import listItem from '../../components/listItem.vue'
import Pagination from '../../components/pagination.vue'
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import moment from 'moment'
import axios from 'axios'

const prs = ref([])
const currentPage = ref(1)
const pressReleasesPerPage = 5

const fetchPrs = async () => {
    try {
        const response = await axios.get('https://api.lunaiz.com/api/v1/press-release')
        prs.value = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
    } catch (error) {
        console.error('Error fetching press releases:', error)
    }
}

const formattedDate = (createdAt) => {
    const date = moment(createdAt)
    const hours = date.hours()
    const ampm = hours < 12 ? '오전' : '오후'
    return `${date.format('YYYY년 MM월 DD일')} ${ampm} ${hours % 12 || 12}시 ${date.minutes()}분`
}

const getPreview = (content) => {
    const maxLength = 20
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content
}

const paginatedPrs = computed(() => {
    const startIndex = (currentPage.value - 1) * pressReleasesPerPage
    const endIndex = startIndex + pressReleasesPerPage
    return prs.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(prs.value.length / pressReleasesPerPage))

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

onMounted(fetchPrs)
</script>
