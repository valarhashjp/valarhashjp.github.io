<script setup lang="ts">
import { SelectData } from "../../../types";
import { defineProps, reactive } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

defineProps<{
  selectkey: String;
  selectData: SelectData;
}>();
const emit = defineEmits(["choose"]);
const data = reactive<{
  selectItemShow: boolean;
}>({
  selectItemShow: false,
});
const setSelectItemShow = (isshow: boolean) => {
  data.selectItemShow = isshow;
};
const choose = (key: string) => {
  emit("choose", key);
};
</script>

<template>
  <div class="select-box" @click="setSelectItemShow(!data.selectItemShow)">
    <span class="placeholderText" v-if="!selectkey">{{
      t("PleaseSelect")
    }}</span>
    <span class="value" v-else> {{ selectkey }} </span>
    <img
      class="iocndown"
      src="/image/icon/iocndown.png"
      :style="{
        transform: `translateY(-50%) rotate(${
          data.selectItemShow ? '180' : '0'
        }deg)`,
      }"
    />
    <div class="select-item-box" v-if="data.selectItemShow">
      <div
        class="select-item"
        v-for="(item, i) in selectData"
        @click="choose(item.key)"
      >
        {{ t(item.title) }}
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.select-box
    width: 296px
    height: 42px
    background: #FFFFFF
    border: 1px solid #D8D8D8
    line-height 42px
    padding  0 16px 0 24px
    position  relative
    cursor pointer
    .value
        font-size 18px
        color #181E23
    .placeholderText
        color #D1D1D1
        font-size 18px
    .iocndown
        width 12px
        height 12px
        position absolute
        right 24px
        top 50%
        transition all 0.5s
        transform: translateY(-50%);
    .select-item-box
        width 296px
        height auto
        background-color #fff
        box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.12)
        border: 1px solid #D8D8D8
        position absolute
        bottom auto
        left 0
        .select-item
          height: 58px;
          line-height 58px
          padding-left 52px
          &:hover
            background #A88217
            color #fff
  @media screen and (max-width: 960px)
    .select-box
      width 100%
      .select-item-box
        width 100%
</style>
