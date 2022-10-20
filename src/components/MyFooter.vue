<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const iconList = [
  {
    link: "",
    src: "/image/icon/twitter.png",
  },
  {
    link: "",
    src: "/image/icon/Medium.png",
  },
  {
    link: "",
    src: "/image/icon/telegram.png",
  },
  {
    link: "",
    src: "/image/icon/YouTube.png",
  },
];
const footerNavList1 = [
  { text: "aboutAlarhash", link: "", type: false },
  { text: "CompanyProfile", link: "/CompanyProfile", type: true },
];
const footerNavList2 = [
  { text: "MiningResources", link: "/MiningResources", type: true },
  { text: "minerSales", link: "", type: false },
  { text: "minerHostingServic", link: "", type: false },
];
const footerNavList3 = [
  { text: "NodeService", link: "/NodeService", type: true },
];
const footerNavList4 = [
  { text: "ContactUs", link: "/ContactUs", type: true },
  { text: "hanetsu", link: "", type: false },
];
// const footerNavList = [
//   [
//     { text: "aboutAlarhash", link: "", type: false },
//     { text: "CompanyProfile", link: "/CompanyProfile", type: true },
//   ],
//   [
//     { text: "MiningResources", link: "/MiningResources", type: true },
//     { text: "minerSales", link: "", type: false },
//     { text: "minerHostingServic", link: "", type: false },
//   ],
//   [{ text: "NodeService", link: "/NodeService", type: true }],
//   [
//     { text: "ContactUs", link: "/ContactUs", type: true },
//     { text: "hanetsu", link: "", type: false },
//   ],
// ];
const lang = computed(() => {
  return locale.value == "en" ? "English" : "日本";
});
</script>
<template>
  <div>
    <div class="footer-top">
      <div class="content flex al-c">
        <div class="left-logo-box flex al-c">
          <div class="logo">
            <img src="/image/headerLogo.png" alt="" />
          </div>
          <div class="icon-box flex al-c">
            <a v-for="(icon, i) in iconList" :key="i" :href="icon.link">
              <img :src="icon.src" alt=""
            /></a>
          </div>
        </div>
        <div class="right-nav-box">
          <div class="right-nav-top flex">
            <router-link to="/">{{ t("Home") }}</router-link>
            <div class="checkLangBtn">
              <span>{{ lang }}</span>
              <img src="/image/icon/icon_language.png" alt="" />
            </div>
          </div>
          <div class="line"></div>
          <div class="right-nav-bottom flex">
            <div class="nav-item flex">
              <span v-for="(item, j) in footerNavList1" :key="j" class="link">
                <router-link :to="item.link" v-if="item.type">{{
                  $t(item.text)
                }}</router-link>
                <a :href="item.link" v-else>{{ $t(item.text) }}</a>
              </span>
            </div>
            <div class="nav-item flex">
              <span v-for="(item, j) in footerNavList2" :key="j" class="link">
                <router-link :to="item.link" v-if="item.type">{{
                  $t(item.text)
                }}</router-link>
                <a :href="item.link" v-else>{{ $t(item.text) }}</a>
              </span>
            </div>
            <div class="nav-item flex">
              <span v-for="(item, j) in footerNavList3" :key="j" class="link">
                <router-link :to="item.link" v-if="item.type">{{
                  $t(item.text)
                }}</router-link>
                <a :href="item.link" v-else>{{ $t(item.text) }}</a>
              </span>
            </div>
            <div class="nav-item flex">
              <span v-for="(item, j) in footerNavList4" :key="j" class="link">
                <router-link :to="item.link" v-if="item.type">{{
                  $t(item.text)
                }}</router-link>
                <a :href="item.link" v-else>{{ $t(item.text) }}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .footer-top
      width 100%
      padding-bottom 49px
      padding-top 72px
      .content
          width 1322px
          margin  0 auto
          justify-content space-between
          .left-logo-box
              height 214px
              flex-direction column

              .logo
                  margin-bottom 83px
                  img
                      width 256px
                      height 65px
              .icon-box
                  a
                      width 31px
                      height 30px
                      margin-left 31px
          .right-nav-box
              width 965px
              .right-nav-top
                  align-items: flex-end
                  justify-content: space-between
                  margin-bottom 33px
                  .checkLangBtn
                      width 140px
                      height 48px
                      border 1px solid #1D1D1D
                      display flex
                      align-items center
                      justify-content space-evenly
                      img
                        width 18px
                        height 18px
              .line
                  width 100%
                  height 1px
                  border: 1px solid #3A3A3A;
                  margin-bottom 22px
              .right-nav-bottom
                  justify-content: space-between;
                  align-items: baseline;
                  .nav-item
                      flex-direction column
                      // margin 107px
                      .link
                          margin-bottom 13px
                          a
                              &:hover
                                  color #A88217
                                  text-decoration underline
                          &:first-child
                            margin-bottom 26px
                            font-weight 600

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
