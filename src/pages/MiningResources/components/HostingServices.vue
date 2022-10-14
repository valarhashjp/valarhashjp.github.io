<template lang="">
  <div class="mining-info-title-box">
    <div class="mining-info-title flex">
      <span> {{ deatiledInfo.name }} </span>
      <div>
        <a href="#Introduce">{{ t("introduce") }}</a>
        <a href="#Specification">{{ t("specification") }}</a>
      </div>
    </div>
  </div>
  <div class="line">
    <a name="Introduce"></a>
  </div>
  <div class="center">
    <div class="detailed-box flex">
      <div class="detailed-left flex">
        <div class="detailed-mainImg flex">
          <img
            :src="deatiledInfo.showPictures[data.mainImgIndex]"
            alt=""
            class="mainimg"
          />
        </div>
        <div class="detailed-viceimg-box flex">
          <img
            v-for="(img, i) in deatiledInfo.showPictures"
            :key="i"
            :src="img"
            @click="setMainImgIndex(i)"
            class="detailed-civeimg-item"
            :style="{
              borderColor: i == data.mainImgIndex ? '#A88217' : '#d9d9d9',
            }"
          />
        </div>
      </div>
      <div class="detailed-right">
        <span class="detailed-name">{{ deatiledInfo.name }}</span>
        <div class="detailed-info flex">
          <div class="detailed-info-item">
            <span class="title">{{ t("hashrate") }}</span>
            <span class="content">{{ deatiledInfo.hashrate }}</span>
          </div>
          <div class="detailed-info-item">
            <span class="title">{{ t("powerRatio") }}</span>
            <span class="content">{{ deatiledInfo.powerRatio }}</span>
          </div>
          <div class="detailed-info-item">
            <span class="title">{{ t("powerOnWall") }}</span>
            <span class="content">{{ deatiledInfo.powerOnWall }}</span>
          </div>
        </div>
        <router-link to="/ContactUs">
          <div class="ProductConsultation">
            <img
              class="icon"
              src="../../../../public/image/icon/Envelope.png"
              alt=""
            />
            <span>{{ t("ProductConsultation") }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <a name="Specification"></a>
    <div class="specification-title">{{ t("specification") }}</div>
    <div class="line"></div>
    <div class="specification flex">
      <div class="specification-item">
        <div class="specification-item-title">{{ t("hashrate") }}</div>
        <div class="specification-item-content">
          {{ deatiledInfo.hashrate }}
        </div>
      </div>
      <div class="specification-item">
        <div class="specification-item-title">{{ t("powerRatio") }}</div>
        <div class="specification-item-content">
          {{ deatiledInfo.powerRatio }}
        </div>
      </div>
      <div class="specification-item">
        <div class="specification-item-title">{{ t("powerOnWall") }}</div>
        <div class="specification-item-content">
          {{ deatiledInfo.powerOnWall }}
        </div>
      </div>
      <div class="specification-item">
        <div class="specification-item-title">{{ t("algorithm") }}</div>
        <div class="specification-item-content">
          {{ deatiledInfo.tableInfo.algorithm }}
        </div>
      </div>
      <div class="specification-item">
        <div class="specification-item-title">{{ t("temperature") }}</div>
        <div class="specification-item-content">
          {{ deatiledInfo.tableInfo.temperature }}
        </div>
      </div>
      <div class="specification-item">
        <div class="specification-item-title">{{ t("Size") }}</div>
        <div class="specification-item-content">
          {{ deatiledInfo.tableInfo.size }}
        </div>
      </div>
      <div class="specification-item">
        <div class="specification-item-title">{{ t("Weight") }}</div>
        <div class="specification-item-content">
          {{ deatiledInfo.tableInfo.weight }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import { Resources, Resourcesitem } from "src/types";
const { t } = useI18n();
const store = useStore<{
  resources: Resources;
  activeResources: number;
  deatiledId: number;
}>();
const { resources, activeResources, deatiledId } = store.state;

const deatiledInfo = computed(() => {
  return (resources.find((a) => a.id == activeResources) as Resourcesitem)
    .resourcesList[deatiledId];
});
const data = reactive({
  mainImgIndex: 0,
});
const setMainImgIndex = (index: number) => {
  data.mainImgIndex = index;
  console.log(index);
};
</script>

<style lang="stylus" scoped>
.mining-info-title-box
    width 100%
    height 60px
    background-color #F1F4F9
    .mining-info-title
        margin 0 auto
        display flex
        width 100%
        height 60px
        max-width 1262px
        justify-content space-between
        line-height 60px
        span
            font-size 16px
            color #181E23
        div
            a
                color #181E23
                font-size 16px
                margin-left 36px
                &:active
                    color #A88217 !important


.center
    width 100%
    max-width 1262px
    margin 0 auto
    .detailed-box
        justify-content space-between
        padding  63px 0
        .detailed-left
            flex-direction column
            .detailed-mainImg
                width 100%
                max-width 450px
                height 450px
                padding  35px 39px 0
                justify-content center
                align-items center
                .mainimg
                    width 100%
            .detailed-viceimg-box
                width 100%
                max-width 450px
                flex-wrap wrap
                justify-content space-evenly
                img
                    width 80px
                    height 80px
                    background #FFFFFF
                    border 2px solid #d9d9d9
        .detailed-right
            width 100%
            max-width 582px
            .detailed-name
                font-size 30px
                color #A88217
                margin-bottom 32px
                display block
            .detailed-info
                width 100%
                height 265px
                background-color #FAFAFA
                padding 24px 32px
                flex-direction column
                justify-content space-between
                margin-bottom 44px
                .detailed-info-item
                  color #181E23
                  .title
                    display block
                    font-size 16px
                    margin-bottom 8px
                  .content
                    font-size 20px
                    font-weight 500
  .specification-title
    font-size 24px
    color #181E23
    margin-bottom 23px
  .specification
    margin-top 42px
    width 100%
    flex-direction column
    .specification-item
      display flex
      height 62px
      line-height 62px
      border 1px solid #DDDDDD
      border-bottom 0px
      &:nth-child(odd)
        background-color #FAFAFA
      &:nth-child(even)
        background-color #F1F4F9
      &:last-child
        border-bottom 1px solid #DDDDDD
      div
        width 50%
        padding-left 32px
      .specification-item-title
        font-weight 600

.line
    width 100%
    height 1px
    border 1px solid #D8D8D8
.ProductConsultation
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
  .mining-info-title
    padding 0 5px
    div
      display none
  .detailed-box
    flex-direction column
    .detailed-left
      align-items center
      .detailed-mainImg
        padding 0 !important
        height auto !important
    .detailed-right
      margin-top 10px
      display flex
      align-items center
      flex-direction column
      padding 0 10px
      max-width 100% !important
  .specification-title
    text-align center
  .specification
    padding 0 10px

</style>
