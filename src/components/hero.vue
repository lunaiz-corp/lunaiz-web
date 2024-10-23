<template>
    <div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto py-[12.5rem]">
        <div class="mx-auto flex flex-wrap">
            <h1
            class="block mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                <slot name="head-txt"></slot>
            </h1>
            <img class="block img h-3 mt-auto mb-5 pl-1" src="https://cdn.lunaiz.com/lunaiz_assets/dot.png" alt="..">
        </div>
    </div>
</template>