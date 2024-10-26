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
      <h1 class="text-xl md:text-2xl font-bold truncate-multiline">{{ title }}</h1>
      <p v-if="date || author" class="text-base mt-1 text-gray-600">
        <span v-if="author" class="font-semibold">{{ author }}</span>
        <span v-if="author && date"> | </span>
        <span v-if="date">{{ date }}</span>
      </p>
      <p v-if="descOne" class="text-lg mt-1 text-gray-700 dark:text-gray-300 truncate-multiline">{{ descOne }}</p>
    </div>

    <!-- 이미지 슬롯 -->
    <div class="flex-shrink-0 ml-4">
      <slot name="img" />
    </div>
  </div>
</template>

<style scoped>
.truncate-multiline {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* 두 줄까지만 표시하고 넘칠 경우 줄임표 */
  overflow: hidden;
}
</style>
