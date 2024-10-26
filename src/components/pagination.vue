<template>
    <nav class="w-fit mx-auto mt-[5rem]" aria-label="Page navigation">
        <ul class="flex items-center space-x-2 text-base">
            <li>
                <button @click="prevPage" :disabled="currentPage === 1" class="text-gray-500 hover:text-gray-700">
                    <span class="sr-only">Previous</span>
                    <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                </button>
            </li>
            <li v-for="page in totalPages" :key="page">
                <button @click="goToPage(page)"
                    :class="{
                        'text-blue-600 font-bold': currentPage === page,
                        'text-gray-500 hover:text-gray-700': currentPage !== page
                    }"
                    class="px-2"
                >
                    {{ page }}
                </button>
            </li>
            <li>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="text-gray-500 hover:text-gray-700">
                    <span class="sr-only">Next</span>
                    <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
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
            default: 5
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        }
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.$emit('page-changed', this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('page-changed', this.currentPage + 1);
            }
        },
        goToPage(page) {
            this.$emit('page-changed', page);
        }
    }
};
</script>

<style scoped>
/* Remove background and border styling */
button {
    background: none;
    border: none;
}
</style>
