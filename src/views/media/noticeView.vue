<script setup>
import Hero from '../../components/hero.vue';
import axios from 'axios';
import moment from 'moment';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

const notice = ref({});
const route = useRoute();

const formattedDate = (createdAt) => {
    const date = moment(createdAt);
    const hours = date.hours();
    const ampm = hours < 12 ? '오전' : '오후';
    return `${date.format('YYYY년 MM월 DD일')} ${ampm} ${hours % 12 || 12}시 ${date.minutes()}분`;
};

// API 데이터를 기반으로 meta 정보를 동적으로 업데이트
const updateMetaTags = () => {
    if (notice.value.title) {
        useHead({
            title: `${notice.value.title} | lunaiz.`,
            meta: [
                { property: 'og:title', content: notice.value.title },
                { property: 'og:description', content: notice.value.content.substring(0, 100) },
                { property: 'og:image', content: notice.value.banner_image },
                { property: 'og:url', content: window.location.href }
            ]
        });
    }
};

onMounted(() => {
    const noticeId = route.params.id;
    axios.get(`https://api.lunaiz.com/api/v1/notice/${noticeId}`)
        .then(response => {
            notice.value = response.data;
            updateMetaTags(); // 데이터를 기반으로 meta 태그 업데이트
        })
        .catch(error => {
            console.error('Error fetching the notice:', error);
        });
});
</script>

<template>
    <Hero>
        <template #head-txt>notice</template>
    </Hero>
    <main class="container max-w-screen-md mx-auto p-6 text-black dark:text-white">
        <h1 class="text-2xl md:text-3xl font-bold text-start mb-4 break-words">{{ notice.title }}</h1>
        <div class="text-base md:text-lg text-gray-600 mb-4 flex items-center">
            <span class="font-semibold">{{ notice.author }}</span>
            <span class="mx-3">|</span>
            <span>{{ formattedDate(notice.createdAt) }}</span>
        </div>
        <hr class="h-px bg-gray-300 border-0 my-6 dark:bg-gray-700">
        <img v-if="notice.banner_image" :src="notice.banner_image" alt="Notice Image" class="w-full max-w-lg mx-auto rounded-md mb-6 object-cover shadow-md" />
        <p class="text-lg leading-relaxed whitespace-pre-wrap break-keep" v-html="notice.content"></p>
    </main>
</template>
