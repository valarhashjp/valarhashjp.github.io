<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HomeTitle from "../Home/components/HomeTitle.vue";
const { t } = useI18n();
</script>
<template>
  <main>
    <img
      class="img"
      src="../../../public/image/img_CompanyProfile.png"
      alt=""
    />
    <div class="companyProfile flex">
      <div class="companyProfile-left">
        <div class="title">
          <HomeTitle
            :hometitle="t('Valarhash')"
            :content="t('inHashwetrust')"
          ></HomeTitle>
        </div>
        <div class="content">{{ t("companyProfile1") }}</div>
      </div>
      <div class="companyProfile-right">
        <div class="content">{{ t("companyProfile2") }}</div>
        <div class="content">{{ t("companyProfile3") }}</div>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
.companyProfile
    width 1200px
    margin 0 auto
    padding 64px 0 72px
    justify-content: space-between;
    align-items: flex-end;
    .companyProfile-left
        .title
            width 549px
            margin 150px 0
        .content
            width 500px
    .companyProfile-right
        width 567px
        .content
            width 100%
.content
    margin-bottom  100px
    font-size: 24px
    font-weight: 100
    color: #181E23
    line-height: 36px
.img
    width 100%
@media screen and (max-width: 960px)
    .companyProfile
        width 100%
        flex-direction column
        .companyProfile-left
            width 100%
            .title
                width 100%
                margin 10px auto
            .content
                width 100%
                margin 10px auto
                padding 10px 20px
        .companyProfile-right
            width 100%
            .content
                width 100%
                margin 10px auto
                padding 10px 20px
@media screen and (max-width: 560px)
    .content
        font-size 18px

</style>
