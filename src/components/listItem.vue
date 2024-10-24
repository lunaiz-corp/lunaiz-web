<template>
    <div class="flex flex-wrap">
        <div class="block mx-auto min-w-[30rem] max-w-[50rem]">
            <div class="flex flex-wrap justify-start">
                <div class="mr-[4rem]">
                    <slot name="img" />
                </div>
                <div>
                    <h1 class="text-2xl font-bold">
                        This is a title
                    </h1>
                    <p class="text-xl mt-2">
                        and this is a description
                    </p>
                    <p class="text-base mt-2">
                        0000.00.00. 오X 00:00
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>