<template>
    <Hero>
        <template #head-txt>notice</template>
    </Hero>

    <div class="container max-w-screen-md mx-auto p-4">
        <main v-if="notices.length" class="space-y-3">
            <RouterLink v-for="notice in paginatedNotices" :key="notice.id" :to="`/media/notices/` + notice.id"
                class="block">
                <listItem :title="notice.title" :descOne="getPreview(notice.content)"
                    :date="formattedDate(notice.createdAt)" :author="notice.author">
                    <template #img>
                        <div v-if="notice.banner_image" class="h-20 w-20">
                            <img :src="notice.banner_image" alt="notice image"
                                class="h-full w-full object-cover rounded dark:shadow-gray-800" @error="notice.banner_image = ''" />
                        </div>
                    </template>
                </listItem>
            </RouterLink>

            <Pagination :totalItems="notices.length" :current-page="currentPage" :items-per-page="noticesPerPage"
                @page-changed="changePage" class="mt-8" />
        </main>

        <h1 v-else class="text-2xl text-center font-bold text-gray-600 dark:text-white">No Notices are found</h1>
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

const notices = ref([])
const currentPage = ref(1)
const noticesPerPage = 5

const fetchNotices = async () => {
    try {
        const response = await axios.get('https://api.lunaiz.com/api/v1/notice')
        notices.value = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
    } catch (error) {
        console.error('Error fetching notices:', error)
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

const paginatedNotices = computed(() => {
    const startIndex = (currentPage.value - 1) * noticesPerPage
    const endIndex = startIndex + noticesPerPage
    return notices.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(notices.value.length / noticesPerPage))

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

onMounted(fetchNotices)
</script>
