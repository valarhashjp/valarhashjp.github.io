<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useI18n } from "vue-i18n";
let { t, locale } = useI18n();
interface navItem {
  path: string;
  title: string;
}
const navlist: Array<navItem> = [
  { path: "/", title: "Home" },
  {
    path: "/CompanyProfile",
    title: "CompanyProfile",
  },
  {
    path: "/MiningResources",
    title: "MiningResources",
  },
  {
    path: "/NodeService",
    title: "NodeService",
  },
  {
    path: "/ContactUs",
    title: "ContactUs",
  },
];
const data = reactive({
  selectLangShow: false,
  selectMinerShow: false,
  drawer: false,
});

const navHover = (li: navItem) => {
  if (li.path === "/MiningResources") {
    data.selectMinerShow = true;
  } else {
    data.selectMinerShow = false;
  }
};
const setlocale = (type: string) => {
  console.log(locale);
  locale.value = type;
};
const lang = computed(() => {
  return locale.value == "en" ? "English" : "日本";
});
</script>
<template>
  <header>
    <div class="flex al-c">
      <div class="iconlist" @click="data.drawer = true">
        <img src="/image/icon/iconlist.png" />
      </div>
      <div class="headerlogo-box">
        <img class="headerlogo" src="/image/headerLogo.png" />
      </div>
      <ul class="nav">
        <li
          class="nav-item"
          v-for="(li, i) in navlist"
          :key="i"
          @mouseenter="navHover(li)"
        >
          <router-link :to="li.path" v-if="li.path !== '/MiningResources'">{{ $t(li.title) }}</router-link>
          <span v-else>{{$t(li.title)}}</span>
          <div
            v-show="data.selectMinerShow && li.path === '/MiningResources'"
            class="selectMiner-box flex al-c"
            @mouseleave="data.selectMinerShow = false"
          >
            <router-link to="/MiningResources">
              <div class="selectLang-item">{{ t("MinerSales") }}</div>
            </router-link>
            <router-link to="/MiningResources/MinerHostingServices">
              <div class="selectLang-item">{{ t("MinerHostingServices") }}</div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="lang-box">
      <div class="flex al-c" @mouseenter="data.selectLangShow = true">
        <img src="/image/icon_language.png" alt="" />
        <span class="activeLang">{{ lang }}</span>
        <img src="/image/icon_drop-down.png" alt="" />
      </div>
      <div
        v-show="data.selectLangShow"
        class="selectLang-box flex al-c"
        @mouseleave="data.selectLangShow = false"
      >
        <div class="selectLang-item" @click="setlocale('en')">English</div>
        <div class="selectLang-item" @click="setlocale('ja')">日本</div>
      </div>
    </div>
    <el-drawer
      v-model="data.drawer"
      direction="ltr"
      :with-header="false"
      size="50%"
    >
      <div>
        <div class="logo-box">
          <img class="logo" src="/image/headerLogo.png" />
        </div>
        <ul class="drawernav">
          <li
            class="nav-item"
            v-for="(li, i) in navlist"
            :key="i"
            @click="data.drawer = false"
          >
            <router-link :to="li.path">{{ $t(li.title) }}</router-link>
          </li>
        </ul>
      </div>
    </el-drawer>
  </header>
</template>
<style lang="stylus" scoped>
header
    background-color #fff
    width 100%
    height 56px
    display flex
    padding 0 40px 0
    justify-content space-between
    align-items center
    box-sizing border-box
    margin-bottom 4px
.headerlogo
    width 168px
    height 42px
.nav
    display flex
    margin-left 100px

    .nav-item
        margin 0 25px 0
        font-size 16px
        position relative
        a
             color #181E23
        .selectMiner-box
            position: absolute;
            bottom: -136px;
            right: 50%;
            flex-direction: column;
            background-color: #fff;
            z-index: 99;
            transform: translate(50%, 0px);

            .selectLang-item
                width 239px
                height 58px
                line-height 58px
                text-align center
                box-shadow 0px 3px 6px 0px rgba(0,0,0,0.12)
                border 1px solid #D8D8D8
                &:hover
                    background #A88217
                    color #fff

.activeLang
    margin 0 3px 0 6px
    white-space nowrap
.lang-box
    position relative
    .selectLang-box
        position absolute
        bottom -136px
        right 0px
        flex-direction column
        background-color #fff
        z-index 99
        .selectLang-item
            width 149px
            height 58px
            line-height 58px
            text-align center
            box-shadow 0px 3px 6px 0px rgba(0,0,0,0.12)
            border 1px solid #D8D8D8
            &:hover
                background #A88217
                color #fff
.drawernav
  display flex
  flex-direction: column
  .nav-item
    margin-bottom 20px
    a
      color #000
.iconlist
  display none
.headerlogo-box
    display block
.logo-box
  margin-bottom 20px
@media screen and (max-width: 1280px)
    .nav
        margin-left 50px
        .nav-item
            margin 0 15px 0
            font-size 14px
    header
        padding 0 10px 0
    .activeLang
        font-size 12px
@media screen and (max-width: 960px)
    .nav
        display none
    .headerlogo
      width 84px
      height 21px
    .iconlist
      display block
      margin-right 10px
      img
        width 22px
    .headerlogo-box
      display none
   
</style>
