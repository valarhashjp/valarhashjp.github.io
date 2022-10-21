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
  <main>
    <h1>
      {{data.newsInfo.title}}
    </h1>
    <img class="newsimg" :src="data.newsInfo.figure" alt="">
    <div class="html-box" v-html="data.newsInfo.content">

    </div>
  </main>
</template>
<style lang="stylus" scoped>
main
  width 100%
  max-width 750px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto
  h1
    font-size 44px
    margin-top 52px
  .newsimg
    width 100%
    margin 44px 0
  .html-box
    width 100%
</style>
