<script setup lang="ts">
import { NewsItem } from "src/types";
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps<{
  cardInfo: NewsItem;
}>();
</script>
<template>
  <div>
    <img :src="cardInfo.figure" class="image" />
    <div class="card-content">
      <div class="card-title">{{ cardInfo.title }}</div>
      <div class="card-text">{{ cardInfo.overview }}</div>
      <div class="card-link flex al-c">
        <router-link :to="{path:'/news',query:{id:cardInfo.id}}" >
          {{ t("continueRreading") }}
        </router-link>
        <img
          class="new_more"
          src="/image/new_more.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.image
    width 378px
    height 212px
.card-content
    padding 15px 20px
    background #181E23
    .card-title
        width 100%
        font-size 24px
        color #fff
        font-weight 500
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    .card-text
        margin 24px 0
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 3
        overflow hidden
        font-size 16px
        color #fff
        font-weight 300
    .card-link
        a
            color #A88217
        .new_more
            width 15px
            height 14px
            margin-left 10px
@media screen and (max-width: 960px)
        .image
            width 100%
            height 212px
</style>
