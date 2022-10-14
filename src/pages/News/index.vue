<script setup lang="ts">
import { NewsItem } from "src/types";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { GET_NEWS_INFO_API } from "../../../request/apis";
const route = useRoute(); // 第一步
let data = reactive<{
  newsInfo: NewsItem;
}>({
  newsInfo: {
    content: "",
    createTime: "",
    figure: "",
    id: 0,
    overview: "",
    title: "",
  },
});
const getNews = async (id: number) => {
  const res = await GET_NEWS_INFO_API(id);
  data.newsInfo = res.data;
};

onMounted(() => {
  let id = route.query.id as unknown as number;
  getNews(id);
});
</script>
<template>
  <main></main>
</template>
<style lang="stylus" scoped></style>
