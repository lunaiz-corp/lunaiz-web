<script setup>
import hero from '../../components/hero.vue';
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

// api 데이터를 기반으로 meta 정보를 동적으로 업데이트
const updateMetaTags = () => {
    if (notice.value.title) {
        useHead({
            title: `${notice.value.title} | my website`,
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
            console.error('error fetching the notice:', error);
        });
});
</script>

<template>
    <hero>
        <template #head-txt>notice</template>
    </hero>
    <main class="container max-w-screen-md mx-auto p-6 text-black dark:text-white">
        <!-- 제목 -->
        <h1 class="text-2xl md:text-3xl font-bold text-start mb-4 break-words">{{ notice.title }}</h1>

        <!-- 작성자와 날짜 -->
        <div class="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 flex items-center">
            <span class="font-semibold">{{ notice.author }}</span>
            <span class="mx-3">|</span>
            <span>{{ formattedDate(notice.createdAt) }}</span>
        </div>

        <!-- 구분선 -->
        <hr class="h-px bg-gray-300 border-0 my-6 dark:bg-gray-700">

        <!-- 이미지 -->
        <div v-if="notice.banner_image" class="h-40 mb-6">
            <img :src="notice.banner_image" alt="notice image"
                class="w-full h-full object-cover rounded-md dark:shadow-gray-800" @error="notice.banner_image = ''" />
        </div>

        <!-- 내용 -->
        <p class="text-lg leading-relaxed whitespace-pre-wrap break-keep dark:text-gray-300" v-html="notice.content">
        </p>
    </main>
</template>
