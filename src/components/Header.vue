<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const navlist = [
    { path: "/", title: t('Home') },
    {
        path: "/CompanyProfile",
        title: t('CompanyProfile'),
    },
    {
        path: "/MiningResources",
        title: t('MiningResources'),
    },
    {
        path: "/NodeService",
        title: t('NodeService'),
    },
    {
        path: "/ContactUs",
        title: t('ContactUs'),
    },
]
const data = reactive({
    lang: locale.value == 'en' ? 'English' : "日本",
    selectLangShow: false
})




</script>
<template>
    <header>
        <div class="flex al-c">
            <div>
                <img class="headerlogo" src="../../public/image/headerLogo.png" alt="">
            </div>
            <ul class="nav">
                <li class="nav-item" v-for="(li,i) in navlist" :key="i">
                    <router-link :to="li.path">{{li.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="lang-box">
            <div class="flex al-c" @click="data.selectLangShow = !data.selectLangShow">
                <img src="../../public/image/icon_language.png" alt="">
                <span class="activeLang">{{data.lang}}</span>
                <img src="../../public/image/icon_drop down.png" alt="">
            </div>
            <div v-show="data.selectLangShow" class="selectLang-box flex al-c">
                <div class="selectLang-item">English</div>
                <div class="selectLang-item">日本</div>
            </div>
        </div>
    </header>
</template>
<style lang="stylus" scoped>
    header 
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
            margin-right 51px
            font-size 16px
            a
                 color #181E23
    .activeLang
        margin 0 3px 0 6px
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
                
            
           
</style>