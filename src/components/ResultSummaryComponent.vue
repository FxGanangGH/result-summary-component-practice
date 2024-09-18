<template>
  <div class="w-screen h-full desktop:h-screen">
    <div
      class="desktop:flex desktop:items-center desktop:justify-center desktop:size-full"
    >
      <div
        class="w-full h-full min-h-screen flex flex-col desktop:items-center desktop:justify-center desktop:flex-row desktop:max-w-screen-md desktop:min-h-0 desktop:bg-white desktop:rounded-result-summary desktop:h-1/2 desktop:drop-shadow-2xl"
      >
        <div
          class="w-full h-2/6 flex flex-col rounded-b-result-summary bg-gradient-to-b from-gradients-background-1 to-gradients-background-2 items-center justify-center pt-5 pb-8 desktop:h-full desktop:rounded-result-summary"
        >
          <h1
            class="font-hanken-grotesk text-lg capitalize text-neutral-pale-blue/70 font-semibold desktop:text-xl"
          >
            your result
          </h1>
          <span
            class="size-32 flex items-center justify-center relative bg-gradient-to-b from-gradients-circle-1 to-gradients-circle-2 rounded-full mt-5 desktop:size-44 desktop:mt-10"
          >
            <span class="text-5xl font-bold text-white font-hanken-grotesk xl:text-6xl">
              {{ data.score.final }}
            </span>
            <span
              class="absolute bottom-4 font-hanken-grotesk text-neutral-pale-blue/30 font-semibold text-sm desktop:bottom-7 desktop:text-base"
            >
              of 100
            </span>
          </span>
          <span
            class="font-hanken-grotesk capitalize text-white font-semibold text-xl mt-5 xl:text-3xl"
          >
            great
          </span>
          <p
            class="font-hanken-grotesk text-neutral-pale-blue/70 text-sm w-56 text-center mt-1 desktop:text-base desktop:mt-3"
          >
            You scored higher than {{ data.score.percentile }} of the people who have
            taken these tests.
          </p>
        </div>
        <div
          v-if="data.score.summary"
          class="w-full h-4/6 justify-center flex flex-col pt-5 px-8 pb-10 desktop:h-full bg-white rounded-r-result-summary"
        >
          <h1
            class="font-hanken-grotesk text-lg font-bold capitalize desktop:text-xl desktop:mb-3 desktop:mt-4"
          >
            summary
          </h1>
          <div
            class="flex items-center justify-between p-3 rounded-lg mt-4"
            :class="{
              'bg-primary-red/10': index === 0,
              'bg-primary-yellow/10': index === 1,
              'bg-primary-teal/10': index === 2,
              'bg-primary-blue/10': index === 3,
            }"
            v-for="(item, index) in summaryList"
            :key="index"
          >
            <div class="flex items-center gap-x-3">
              <img :src="`/images/icon-${item}.svg`" />
              <span
                class="font-hanken-grotesk font-semibold capitalize"
                :class="{
                  'text-primary-red': index === 0,
                  'text-primary-yellow': index === 1,
                  'text-primary-teal': index === 2,
                  'text-primary-blue': index === 3,
                }"
              >
                {{ item }}
              </span>
            </div>
            <div class="flex gap-x-1 justify-center h-full"></div>
            <span class="font-hanken-grotesk font-bold">
              {{ data.score.summary[item] }}<span class="opacity-50"> / 100</span>
            </span>
          </div>
          <button
            class="font-hanken-grotesk font-bold text-white bg-neutral-gray-blue mt-6 py-4 rounded-full hover:bg-gradient-to-b hover:from-gradients-background-1 hover:to-gradients-background-2 desktop:mt-10"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSummaryStore } from "@/stores/summaryStore";
import type { Summary } from "@/stores/interface";

const data = useSummaryStore();
const summaryList: (keyof Summary["summary"])[] = [
  "reaction",
  "memory",
  "verbal",
  "visual",
];
</script>
