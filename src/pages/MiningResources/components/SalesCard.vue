<script setup lang="ts">
import { resourcesInfo } from "src/types";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const router = useRouter();
const { t } = useI18n();
defineProps<{
  cardInfo: resourcesInfo;
}>();
const data = reactive({
  productConsultationShow: 46,
});
const to = ()=>{
  router.push({
    path:'/ContactUs'
  })
}
</script>
<template>
  <div
    class="cardBox flex"
    @mouseenter="data.productConsultationShow = 0"
    @mouseleave="data.productConsultationShow = 46"
  >
    <div class="card-info">
      <div class="title">{{ cardInfo.name }}</div>
      <div class="info-item">
        <span class="info-title">{{ t("hashrate") }}</span>
        <span class="info-content">{{ cardInfo.hashrate }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">{{ t("powerRatio") }}</span>
        <span class="info-content">{{ cardInfo.powerRatio }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">{{ t("powerOnWall") }}</span>
        <span class="info-content">{{ cardInfo.powerOnWall }}</span>
      </div>
    </div>
    <div class="card-img-box">
      <img class="card-img" :src="cardInfo.productImage" alt="" />
      <span @click.stop="to">
        <div
          class="ProductConsultation"
          :style="{
            transform: `translateX(-50%) translateY(${data.productConsultationShow}px)`,
          }"
        >
          <img
            class="icon"
            src="../../../../public/image/icon/Envelope.png"
            alt=""
          />
          <span>{{ t("ProductConsultation") }}</span>
        </div>
      </span>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.cardBox
    width 100%
    height 282px
    border 1px solid #DDDDDD
    padding 28px 32px
    justify-content space-between
    &:hover
      background-color #F1F4F9

    .card-info
        .title
            font-size: 18px
            font-weight: 500
            color: #A88217
            line-height: 21px
            margin-bottom 24px
        .info-item
            display flex
            flex-direction column
            color #181E23
            margin-bottom 24px
            .info-title
              font-size 12px
              line-height 14px
              margin-bottom 8px
            .info-content
              font-size 14px
    .card-img-box
      width 330px
      height 100%
      position relative
      display flex
      justify-content center
      align-items center
      overflow hidden
      .card-img
        width 100%
        height 100%
        margin 0 auto
      .ProductConsultation
        position absolute
        width: 253px;
        height: 46px;
        background: #A88217;
        bottom 0
        left 50%
        display flex
        color #fff
        align-items center
        justify-content center
        transition all 0.5s
        .icon
          width 24px
          height 24px
          margin-right 8px
@media screen and (max-width: 960px)
  .cardBox
    flex-direction column
    height auto
    .card-info
      text-align center
    .card-img-box
      max-width 330px
      width 100%
      margin  0 auto 
</style>
