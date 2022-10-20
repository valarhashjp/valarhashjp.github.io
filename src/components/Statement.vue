<template>
  <div class="footer-bottom">
    <div class="footer-bottm-text">
      <span>{{ t("footerText1") }}</span>
      <span>{{ t("footerText2") }}</span>
      <span class="Terms">{{ t("footerText3") }}</span>
      <span class="line"></span>
      <span class="Privacy">{{ t("footerText4") }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>
<style lang="stylus" scoped>
   .footer-bottom
    width 100%
    height 100px
    background #F1F4F9
    text-align center
    line-height 100px
    span
      color #1D1D1D
      font-weight 100
      font-size 14px
    .line
      width: 1px;
      height: 12px;
      border: 1px solid #808080;
    .Terms
      margin 0 15px 0 20px
    .Privacy
      margin-left 15px

a
    color #1D1D1D
@media screen and (max-width: 960px)
    .footer-top
        width 100%
        padding 10px 0
        .content
            width 100%
            margin  0 auto
            justify-content center
            flex-direction column
            .left-logo-box
                height auto
                flex-direction column
                margin-bottom 20px

                .logo
                    margin-bottom 20px
                    img
                        width 256px
                        height 65px
                .icon-box
                    width 100%
                    display flex
                    justify-content space-evenly
                    a
                        width 31px
                        height 30px
                        margin-left 0
            .right-nav-box
                width 100%
                padding 0 20px
    .footer-bottom
      display flex
      align-items: center;
      justify-content: center;
      height auto
      padding 10px
      .footer-bottm-text
        display flex
        flex-direction: column;
        line-height 26px
        .line
          display none

@media screen and (max-width: 560px)
    .right-nav-bottom
        flex-wrap wrap
        .nav-item
            width 50%
</style>
