<template>
  <div class="MinerSalesBanner">
    <img src="../../../../public/image/img_hostingService.png" alt="" />
  </div>

  <div class="box">
    <div class="resourcesTitle">
      <span
        v-for="(item, i) in resources"
        :key="item.id"
        @click="setActiveResources(item.id)"
        :class="item.id === activeResources ? 'active' : ''"
        >{{ $t(item.name) }}</span
      >
    </div>
    <div class="info-card-box flex">
      <div
        class="info-card-item"
        v-for="(info, i) in resources[activeResources].resourcesList"
        :key="i"
        @click="setDeatiledId(i)"
      >
        <SalesCard :cardInfo="info"></SalesCard>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { Resources } from "../../../types/index";
import SalesCard from "./SalesCard.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useStore<{
  resources: Resources;
  activeResources: number;
}>(); // 使用useStore方法
const resources = computed(() => {
  return store.state.resources;
});
const activeResources = computed(() => {
  return store.state.activeResources;
});
const setActiveResources = (id: number) => {
  store.commit("SET_ACTIVE_RESOURCES", id);
};
const setDeatiledId = (index: number) => {
  store.commit("SET_DETAILED_ID", index);
  router.push({
    path: "/MiningResources/MinerHostingServices",
  });
};
</script>
<style lang="stylus" scoped>
.MinerSalesBanner
    width 100%
    img
        width 100%
.box
    width 1260px
    margin  0 auto
    .resourcesTitle
        margin 24px 0
        height 60px
        width 100%
        line-height 60px
        span
            margin-right 50px
        .active
            color #A88217
.info-card-box
    justify-content space-between
    flex-wrap wrap
    .info-card-item
            width 48%
            margin-bottom 30px

@media screen and (max-width: 960px)
  .box
    width 100%
    .resourcesTitle
      display flex
      justify-content space-evenly
      span
        margin 0

    .info-card-box
      justify-content center
      flex-direction column
      align-items center
      padding 0 20px
      .info-card-item
        width 100%
</style>
