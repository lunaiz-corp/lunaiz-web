<script setup>
import Hero from '../../components/hero.vue'
</script>

<template>
    <Hero>
        <template #head-txt>press release</template>
    </Hero>
    <main class="container max-w-screen-md mx-auto p-6 text-black dark:text-white">
        <!-- 제목 -->
        <h1 class="text-2xl md:text-4xl font-bold text-start mb-4 break-words">{{ pressRelease.title }}</h1>
        
        <!-- 작성자와 날짜 -->
        <div class="text-base md:text-lg text-gray-600 mb-4 flex items-center">
            <span class="font-semibold">{{ pressRelease.author }}</span>
            <span class="mx-3">|</span>
            <span>{{ formattedDate(pressRelease.createdAt) }}</span>
        </div>

        <!-- 구분선 -->
        <hr class="h-px bg-gray-300 border-0 my-6 dark:bg-gray-700">

        <!-- 이미지 -->
        <img v-if="pressRelease.banner_image" 
             :src="pressRelease.banner_image" 
             alt="Press Release Image" 
             class="w-full max-w-lg mx-auto rounded-md mb-6 object-cover shadow-md"
        />

        <!-- 내용 -->
        <p class="text-lg leading-relaxed whitespace-pre-wrap break-keep" v-html="pressRelease.content"></p>
    </main>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'PressReleaseView',
    data() {
        return {
            pressRelease: {}
        };
    },
    created() {
        const pressReleaseId = this.$route.params.id;
        axios.get(`https://api.lunaiz.com/api/v1/press-release/${pressReleaseId}`)
            .then(response => {
                this.pressRelease = response.data;
            })
            .catch(error => {
                console.error('There was an error fetching the press release:', error);
            });
    },
    methods: {
        formattedDate(createdAt) {
            const date = moment(createdAt);
            const hours = date.hours();
            const ampm = hours < 12 ? '오전' : '오후';
            return `${date.format('YYYY년 MM월 DD일')} ${ampm} ${hours % 12 || 12}시 ${date.minutes()}분`;
        }
    }
};
</script>
