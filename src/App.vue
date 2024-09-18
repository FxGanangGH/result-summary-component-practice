<script setup lang="ts">
import ResultSummaryComponent from "./components/ResultSummaryComponent.vue";
import { useSummaryStore } from "./stores/summaryStore";
import { onMounted } from "vue";

const data = useSummaryStore();

onMounted(() => {
  data.fill();
});
</script>

<template>
  <ResultSummaryComponent />
</template>
