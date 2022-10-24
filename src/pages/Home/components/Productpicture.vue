<template>
  <div class="box flex">
    <div class="main-img w50 h100">
      <img :src="productpictureInfo.mainImg" alt="" />
      <div class="productpictureInfoTextBox">
        <div class="productpictureInfoText">
          {{ productpictureInfo.mainImgText }}
        </div>
      </div>
    </div>
    <div class="thumbnail w50 h100">
      <div class="thumbnail-top w100 h50">
        <img :src="productpictureInfo.thumbnailTop" alt="" />
        <div class="productpictureInfoTextBox">
          <div class="productpictureInfoText">
            {{ productpictureInfo.thumbnailTopText }}
          </div>
        </div>
      </div>
      <div class="thumbnail-bottom w100 h50 flex">
        <div class="thumbnail-bottom-left w50 h100">
          <img :src="productpictureInfo.thumbnailBottomLetf" alt="" />
          <div class="productpictureInfoTextBox">
            <div class="productpictureInfoText">
              {{ productpictureInfo.thumbnailBottomLetfText }}
            </div>
          </div>
        </div>
        <div class="thumbnail-bottom-right w50 h100">
          <img :src="productpictureInfo.thumbnailBottomRight" alt="" />
          <div class="productpictureInfoTextBox">
            <div class="productpictureInfoText">
              {{ productpictureInfo.thumbnailBottomRightText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { h, reactive } from "vue";

defineProps({
  productpictureInfo: {
    type: Object,
    required: true,
  },
});
const data = reactive({
  activeProductpicture: 1,
});
</script>
<style lang="stylus">
    .box
        width 100%
        height 100%
    .w50
        width 50%
        overflow hidden


    .w100
        width 100%
    .h50
        height 50%

    .h100
        height 100%
    img
        width 100%
        height 100%
    .main-img,.thumbnail-top,.thumbnail-bottom-left,.thumbnail-bottom-right
        position relative
        &:hover
            .productpictureInfoTextBox
                transform: translateY(0);

    .productpictureInfoTextBox

        width 100%
        height 100%
        position absolute
        background-color: rgba(0,0,0,0.25);
        top 0px
        left 0px
        transform: translateY(100%);
        // transform: translateY(0);
        transition: all 0.3s;
        .productpictureInfoText
            position absolute
            bottom 0
            left 0
            width 100%
            height 31%
            background-color: rgba(0,0,0,0.31);
            color #fff
            font-size: 24px;
            font-weight: 600;
            display flex
            justify-content: center;
            align-items: center;
@media screen and (max-width: 960px)
    .productpictureInfoTextBox
           .productpictureInfoText
                font-size 16px
</style>
