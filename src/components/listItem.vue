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
    <div class="flex items-start p-4 max-w-screen-md mx-auto border-b border-gray-300">
        <!-- 텍스트 콘텐츠 -->
        <div class="flex-1">
            <h1 class="text-xl md:text-2xl font-bold break-keep">{{ title }}</h1>
            <p v-if="date || author" class="text-base mt-1 text-gray-600">
                <span v-if="author" class="font-semibold">{{ author }}</span>
                <span v-if="author && date"> | </span>
                <span v-if="date">{{ date }}</span>
            </p>
            <p v-if="descOne" class="text-lg mt-1 text-gray-700 truncate-content">{{ descOne }}</p>
        </div>

        <!-- 이미지 슬롯 -->
        <div class="flex-shrink-0 ml-4">
            <slot name="img" />
        </div>
    </div>
</template>

<style scoped>
/* descOne 텍스트를 한 줄로 제한하고 넘칠 경우 줄임표 추가 */
.truncate-content {
    max-width: calc(100% - 5rem);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
