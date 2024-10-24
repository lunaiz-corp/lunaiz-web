<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>

  <nav class="border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center rtl:space-x-reverse">
        <img src="https://cdn.lunaiz.com/lunaiz_logo/logo-l.svg" class="h-9 block dark:hidden" alt="lunaiz logo" />
        <img src="https://cdn.lunaiz.com/lunaiz_logo/logo-d.svg" class="h-9 hidden dark:block" alt="lunaiz logo" />
      </RouterLink>
      <button data-collapse-toggle="navbar-coll" type="button"
        class="inline-flex items-center p-2 w-10 h-10 z-50 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">open navbar menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-coll">
        <ul
          class="flex flex-col font-medium text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <button id="navlink-1" data-dropdown-toggle="navdrop-1"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">소개
            </button>
            <!-- Dropdown menu -->
            <div id="navdrop-1"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <RouterLink to="/about/ci"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CI</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about/director"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">임원</RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button id="navlink-2" data-dropdown-toggle="navdrop-2"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">서비스
            </button>
            <!-- Dropdown menu -->
            <div id="navdrop-2"
              class="z-10 hidden font-normal  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="https://am-to-mxm.lunaiz.com" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AM
                    to MXM</a>
                </li>
                <li>
                  <a href="https://bk.lunaiz.com" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">보겸
                    당첨 알리미</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button id="navlink-3" data-dropdown-toggle="navdrop-3"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">미디어
            </button>
            <!-- Dropdown menu -->
            <div id="navdrop-3"
              class="z-10 hidden font-normal  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <RouterLink to="/media/notice"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">공지사항</RouterLink>
                </li>
                <li>
                  <RouterLink to="/media/pr"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">보도자료</RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <RouterLink to="/partner"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">파트너</RouterLink>
          </li>
          <li class="hidden md:block">
            <button id="theme-toggle" type="button"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none hover:outline-none hover:bg-transparent dark:hover:bg-transparent rounded-lg text-sm h-[1rem]">
              <svg id="theme-toggle-dark-icon" class="hidden w-[1.3rem] h-[1.3rem]" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" class="hidden w-[1.3rem] h-[1.3rem]" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
