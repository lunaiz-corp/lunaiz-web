<script setup>
import Hero from '../../components/hero.vue'
</script>

<template>
    <Hero>
        <template #head-txt>notice</template>
    </Hero>
    <main class="container md:min-w-[30rem] md:max-w-[70rem] items-center justify-around mx-auto p-4 text-black dark:text-white">
        <h1 class="text-xl text-start font-bold md:text-4xl">{{ notice.title }}</h1>
        <p class="text-lg ">{{ notice.author }} <span class="mx-3">|</span> {{formattedDate(notice.createdAt)}}</p>
        <hr class="h-1 my-2 bg-gray-700 border-0 dark:bg-gray-300">
        <img class="w-screen md:w-[60%] mx-auto rounded" :src="notice.banner_image" />
        <p class="text-lg break-keep">{{ notice.content }}</p>
    </main>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'NoticeView',
    data() {
        return {
            notice: {}
        };
    },
    created() {
        const noticeId = this.$route.params.id;
        axios.get(`https://api.lunaiz.com/api/v1/notice/${noticeId}`)
            .then(response => {
                this.notice = response.data;
            })
            .catch(error => {
                console.error('There was an error fetching the notice:', error);
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

