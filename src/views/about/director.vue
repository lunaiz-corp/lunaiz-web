<script setup>
import hero from '../../components/hero.vue';

const leaders = [
  {
    name: "손지민 [ SSS1267_ ]",
    title: "CEO 대표이사",
    skills: "#기획 #UI/UX #FrontEnd",
    description: "",
    sns: [
      { platform: "Instagram", url: "https://instagram.com/sss1267_", icon: "bi-instagram" },
      { platform: "Github", url: "https://github.com/Dev-SSS1267", icon: "bi-github" },
      { platform: "Website", url: "https://dev-sss1267.github.io/About-Me", icon: "bi-globe2" }
    ]
  },
  {
    name: "유정호 [ Ddongddi ]",
    title: "COO 운영이사",
    skills: "#기획 #감사 #FrontEnd",
    description: "",
    sns: [
      { platform: "Github", url: "https://github.com/Ddongddi", icon: "bi-github" }
    ]
  },
  {
    name: "권민석 [ MinSeok_P ]",
    title: "CTO 기술이사",
    skills: "#Network #Security #BackEnd",
    description: "",
    sns: [
      { platform: "GitHub", url: "https://github.com/minseoka", icon: "bi-github" }
    ]
  },
  {
    name: "김민수 [ Ayaan ]",
    title: "CSO 전략이사",
    skills: "#기획 #UI/UX #FullStack",
    description: "",
    sns: [
      { platform: "Github", url: "https://github.com/kms0219kms", icon: "bi-github" },
      { platform: "Website", url: "https://devayaan.me", icon: "bi-globe2" }
    ]
  },
  {
    name: "하승민 [ NOCSML70 ]",
    title: "CBO 사업이사",
    skills: "#기획 #FullStack",
    description: "",
    sns: [
      { platform: "Instagram", url: "https://instagram.com/nocsml70", icon: "bi-instagram" },
      { platform: "GitHub", url: "https://github.com/nocsml70", icon: "bi-github" }
    ]
  }
];
</script>

<template>
  <hero>
    <template #head-txt>leaders of lunaiz</template>
  </hero>

  <main class="container max-w-screen-md mx-auto py-10 px-6 space-y-8 text-black dark:text-white">
    <!-- 팀원 정보 섹션 -->
    <section v-for="leader in leaders" :key="leader.name" class="border-b border-gray-300 dark:border-gray-700 pb-6">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <!-- 기본 정보 -->
        <div class="flex-1 space-y-1">
          <h1 class="text-2xl md:text-3xl font-extrabold">{{ leader.name }}</h1>
          <p class="text-lg font-medium text-gray-600 dark:text-gray-400">{{ leader.title }}</p>
          <p class="text-base text-gray-700 dark:text-gray-300">{{ leader.skills }}</p>
        </div>

        <!-- SNS 링크 -->
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a v-for="link in leader.sns" :key="link.platform" :href="link.url" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center space-x-1">
            <i :class="`bi ${link.icon}`"></i>
            <span>{{ link.platform }}</span>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import 'bootstrap-icons/font/bootstrap-icons.css';
</style>
