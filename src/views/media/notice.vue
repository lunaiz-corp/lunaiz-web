<script setup>
import Hero from '../../components/hero.vue'
import listItem from '../../components/listItem.vue'
import Pagination from '../../components/pagination.vue'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import moment from 'moment';
import axios from 'axios';

const notices = ref([]);
const currentPage = ref(1);
const noticesPerPage = 10;

const fetchNotices = async () => {
    try {
        const response = await axios.get('https://api.lunaiz.com/api/v1/notice');
        notices.value = response.data;
        renderNotices();
        renderPagination();
    } catch (error) {
        console.error('Error fetching notices:', error);
    }
};

const formattedDate = (createdAt) => {
    const date = moment(createdAt);
    const hours = date.hours();
    const ampm = hours < 12 ? '오전' : '오후';
    return `${date.format('YYYY년 MM월 DD일')} ${ampm} ${hours % 12 || 12}시 ${date.minutes()}분`;
};

const renderNotices = () => {
    const startIndex = (currentPage.value - 1) * noticesPerPage;
    const endIndex = startIndex + noticesPerPage;
    return notices.value.slice(startIndex, endIndex);
};

const renderPagination = () => {
    const totalPages = Math.ceil(notices.value.length / noticesPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
};

const changePage = (page) => {
    if (page < 1 || page > Math.ceil(notices.value.length / noticesPerPage)) {
        return;
    }
    currentPage.value = page;
};

onMounted(fetchNotices);
</script>

<template>
    <Hero>
        <template #head-txt>notice</template>
    </Hero>

    <main class="container max-w-screen-xl items-center justify-around mx-auto p-4" v-if="notices.length">
        <RouterLink :to="`/media/notices/` + notice.id" v-for="notice in renderNotices()" :key="notice.id">
            <listItem id="notice-list-item" :title="notice.title" :descOne="notice.content"
                :date="formattedDate(notice.createdAt)">
                <template #img><img class="h-[7.5rem] rounded" :src="notice.banner_image"></template>
            </listItem>
        </RouterLink>

        <Pagination :totalItems="Math.ceil(notices.length / noticesPerPage)" :current-page="currentPage" @page-changed="changePage" />
    </main>
</template>