<script setup>
import hero from '../../components/hero.vue';
import axios from 'axios';
import moment from 'moment';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

const pressRelease = ref({});
const route = useRoute();

const formattedDate = (createdAt) => {
    const date = moment(createdAt);
    const hours = date.hours();
    const ampm = hours < 12 ? '오전' : '오후';
    return `${date.format('YYYY년 MM월 DD일')} ${ampm} ${hours % 12 || 12}시 ${date.minutes()}분`;
};

// api 데이터를 기반으로 meta 정보를 동적으로 업데이트
const updateMetaTags = () => {
    if (pressRelease.value.title) {
        useHead({
            title: `${pressRelease.value.title} | my website`,
            meta: [
                { property: 'og:title', content: pressRelease.value.title },
                { property: 'og:description', content: pressRelease.value.content.substring(0, 100) },
                { property: 'og:image', content: pressRelease.value.banner_image },
                { property: 'og:url', content: window.location.href }
            ]
        });
    }
};

onMounted(() => {
    const pressReleaseId = route.params.id;
    axios.get(`https://api.lunaiz.com/api/v1/press-release/${pressReleaseId}`)
        .then(response => {
            pressRelease.value = response.data;
            updateMetaTags(); // 데이터를 기반으로 meta 태그 업데이트
        })
        .catch(error => {
            console.error('error fetching the press release:', error);
        });
});
</script>

<template>
    <hero>
        <template #head-txt>press release</template>
    </hero>
    <main class="container max-w-screen-md mx-auto p-6 text-black dark:text-white">
        <!-- 제목 -->
        <h1 class="text-2xl md:text-3xl font-bold text-start mb-4 break-words">{{ pressRelease.title }}</h1>

        <!-- 작성자와 날짜 -->
        <div class="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 flex items-center">
            <span class="font-semibold">{{ pressRelease.author }}</span>
            <span class="mx-3">|</span>
            <span>{{ formattedDate(pressRelease.createdAt) }}</span>
        </div>

        <!-- 구분선 -->
        <hr class="h-px bg-gray-300 border-0 my-6 dark:bg-gray-700">

        <!-- 이미지 -->
        <img v-if="pressRelease.banner_image" 
             :src="pressRelease.banner_image" 
             alt="press release image" 
             class="w-full max-w-lg mx-auto rounded-md mb-6 object-cover shadow-md dark:shadow-gray-800"
        />

        <!-- 내용 -->
        <p class="text-lg leading-relaxed whitespace-pre-wrap break-keep dark:text-gray-300" v-html="pressRelease.content"></p>
    </main>
</template>
