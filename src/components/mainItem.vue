<template>
  <div class="block mx-auto">
    <div class="flex flex-wrap">
      <div class="mr-[4rem]">
        <slot name="img"/>
      </div>
      <div>
        <slot name="my"/>
        <!-- <h1 class="text-3xl font-bold">
          <slot name="title"/>
        </h1>
        <p class="text-xl mt-2">
          <slot name="desc-1"/>
        </p>
        <p class="text-xl mt-2">
          <slot name="desc-2"/>
        </p> -->
      </div>
    </div>
  </div>
</template>
