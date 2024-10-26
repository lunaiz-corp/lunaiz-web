<script setup>
import Hero from '../../components/hero.vue'
import listItem from '../../components/listItem.vue'
import Pagination from '../../components/pagination.vue'
</script>

<template>
    <Hero>
        <template #head-txt>press release</template>

    </Hero>

    <main class="container max-w-screen-xl items-center justify-around mx-auto p-4" v-if="prs.length">
        <RouterLink :to="`/media/prs/` + pr.id" v-for="pr in prs" :key="pr.id">
            <listItem id="pr-list-item" :title="pr.title" :descOne="pr.content"
                :date="formattedDate(pr.createdAt)">
                <template #img><img class="h-[7.5rem] rounded" :src="pr.banner_image"></template>
            </listItem>
        </RouterLink>
        <Pagination/>
    </main>
    <h1 class="text-2xl text-center font-bold" v-else="prs.length">No Press Releases are found</h1>
</template>

<script>
import moment from 'moment';

export default {
    data() {
        return {
            prs: []

        };
    },
    created() {
        this.fetchPrs();
    },
    methods: {
        async fetchPrs() {
            try {
                const response = await this.$axios.get('https://api.lunaiz.com/api/v1/press-release');
                this.prs = response.data;
                console.log(this.prs);
            } catch (error) {
                console.error('Error fetching prs:', error);
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
