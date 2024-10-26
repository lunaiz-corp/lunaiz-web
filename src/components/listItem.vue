<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  descOne: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  }
});
</script>

<template>
    <div class="flex items-start p-4 max-w-screen-md mx-auto border-b border-gray-300 dark:border-gray-700">
        <!-- 텍스트 콘텐츠 -->
        <div class="flex-1">
            <h1 class="text-xl md:text-2xl font-bold break-keep truncate-title text-black dark:text-white">{{ title }}</h1>
            <p v-if="date || author" class="text-base mt-1 text-gray-600 dark:text-gray-400">
                <span v-if="author" class="font-semibold">{{ author }}</span>
                <span v-if="author && date"> | </span>
                <span v-if="date">{{ date }}</span>
            </p>
            <p v-if="descOne" class="text-lg mt-1 text-gray-700 dark:text-gray-300 truncate-content">{{ descOne }}</p>
        </div>

        <!-- 이미지 슬롯 -->
        <div v-if="$slots.img" class="flex-shrink-0 ml-4 w-20 h-20 overflow-hidden">
            <slot name="img" />
        </div>
    </div>
</template>

<style scoped>
/* 제목이 화면을 초과할 경우 줄임표로 표시 */
.truncate-title {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* descOne 텍스트도 너비 제한 및 줄임표 표시 */
.truncate-content {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
