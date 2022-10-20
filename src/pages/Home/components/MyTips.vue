<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  content: {
    type: String,
    required: true,
    default: 0,
  },
});
</script>
<template>
  <div class="tips-item flex">
    <slot></slot>
    <span class="tips-content">{{ content }}</span>
  </div>
</template>

<style lang="stylus" scoped>
.tips-item
    width 25%
    height 242px
    flex-direction column
    padding 43px 24px 52px
    text-align center
    .tips-title
        color: #A88217
        line-height: 84px
        font-size: 70px;
        margin-bottom 5px
        font-weight bold
    .tips-content

         font-size: 20px;
         font-weight 500
@media screen and (max-width: 960px)
    .tips-item
        width 100%
        height auto
        .tips-content
            font-size 18px !important
</style>
