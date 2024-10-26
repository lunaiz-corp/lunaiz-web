<template>
    <nav class="w-fit mx-auto mt-10" aria-label="Page navigation">
        <ul class="flex items-center -space-x-px h-8 text-base">
            <li>
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1 1 5l4 4" />
                    </svg>
                </button>
            </li>
            <li v-for="page in totalPages" :key="page">
                <button @click="goToPage(page)" :class="{'z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white': currentPage === page, 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': currentPage !== page}"
                    class="flex items-center justify-center px-3 h-8 leading-tight border">
                    {{ page }}
                </button>
            </li>
            <li>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        totalItems: {
            type: Number,
            required: true
        },
        itemsPerPage: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            currentPage: 1
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        }
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToPage(page) {
            this.currentPage = page;
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>