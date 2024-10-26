<script setup>
import Hero from '../../components/hero.vue'
import listItem from '../../components/listItem.vue'
import Pagination from '../../components/pagination.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <Hero>
        <template #head-txt>notice</template>

    </Hero>

    <main class="container max-w-screen-xl items-center justify-around mx-auto p-4" v-if="notices.length">
        <RouterLink :to="`/media/notices/` + notice.id" v-for="notice in notices" :key="notice.id">
            <listItem id="notice-list-item" :title="notice.title" :descOne="notice.content"
                :date="formattedDate(notice.createdAt)">
                <template #img><img class="h-[7.5rem] rounded" :src="notice.banner_image"></template>
            </listItem>
        </RouterLink>

        <Pagination />
    </main>
</template>

<script>
import moment from 'moment';

export default {
    data() {
        return {
            notices: []

        };
    },
    created() {
        this.fetchNotices();
    },
    methods: {
        async fetchNotices() {
            try {
                const response = await this.$axios.get('https://api.lunaiz.com/api/v1/notice');
                this.notices = response.data;
                console.log(this.notices);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        },
        formattedDate(createdAt) {
            const date = moment(createdAt);
            const hours = date.hours();
            const ampm = hours < 12 ? '오전' : '오후';
            return `${date.format('YYYY년 MM월 DD일')} ${ampm} ${hours % 12 || 12}시 ${date.minutes()}분`;
        }
    },
};


</script>