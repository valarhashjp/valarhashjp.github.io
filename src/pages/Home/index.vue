<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from "vue-i18n";
import Tips from './components/tips.vue'
import Productpicture from './components/Productpicture.vue'
const { t, locale } = useI18n();
const bannerImg: any = ref(null);
const banner: any = ref(null)
enum arrowType {
    next,
    prev
}
type productpicture = {
    mainImg: string
    thumbnailTop: string
    thumbnailBottomLetf: string
    thumbnailBottomRight: string
    Introduction: string
}
const productpictureInfo: productpicture = {
    mainImg: '../../../public/image/miner1.png',
    thumbnailTop: '../../../public/image/miner2.png',
    thumbnailBottomLetf: '../../../public/image/miner4.png',
    thumbnailBottomRight: '../../../public/image/miner3.png',
    Introduction: t('productName')
}
const tipsList = [
    {
        title: '9',
        content: t('tips1')
    }, {
        title: '1000',
        content: t('tips2')
    }, {
        title: '39',
        content: t('tips3')
    }, {
        title: '100%',
        content: t('tips4')
    },

]
const whatWeDoList = [
    {
        imgSrc: '../../../public/image/icon_1.png',
        text: t('iconText1')
    },
    {
        imgSrc: '../../../public/image/icon_2.png',
        text: t('iconText2')
    }, {
        imgSrc: '../../../public/image/icon_3.png',
        text: t('iconText3')
    }, {
        imgSrc: '../../../public/image/icon_4.png',
        text: t('iconText4')
    },
]
const data = reactive({
    bannerList: [{
        imgSrc: "../../../public/image/banner1.png",
        text: `${t('Valarhash')}${t("inHashwetrust")}`
    }],
    bannerH: ""

})
const immLoad = () => {
    if (bannerImg.value) {
        const h = bannerImg.value[0].offsetHeight
        data.bannerH = `${h}px`
    }
}
const arrowClick = (type: arrowType) => type == arrowType.next ? banner.value.next() : banner.value.prev()

onMounted(() => {
    window.addEventListener('resize', () => {
        if (bannerImg.value[0] && bannerImg.value[0].offsetHeight) {
            const h = bannerImg.value[0].offsetHeight
            data.bannerH = `${h}px`
        }
    }, false)
})



</script>
<template >
    <el-carousel ref="banner" :height="data.bannerH" indicator-position="none" arrow="never" :autoplay="false">
        <el-carousel-item v-for="(item,i) in data.bannerList" :key="i">
            <div class="bannerImg-box">
                <img class="banner-arrow banner-arrow-left" src="../../../public/image/banner_arrow_left.png" alt=""
                    @click="arrowClick(arrowType.prev)">
                <div class="bannerImg-box">
                    <img ref="bannerImg" class="bannerImg" :src="item.imgSrc" @load="immLoad">
                    <span class="bannerText">{{item.text}}</span>
                </div>
                <img class="banner-arrow banner-arrow-right" src="../../../public/image/banner_arrow_right.png" alt=""
                    @click="arrowClick(arrowType.next)">
            </div>
        </el-carousel-item>
    </el-carousel>
    <main class="100% bottom-line introduce">
        <div class="center">
            <span class="fw500 mainText">{{t('Valarhash')}}</span>
            <span class="mainText">{{t("inHashwetrust")}}</span>
        </div>
    </main>
    <article class="100% bottom-line about">
        <aside class="center flex ">
            <div class="about-left">
                <button class="aboutBtn">
                    {{t('moreAboutus')}}
                    <img class="btn_arrow" src="../../../public/image/btn_arrow.png" alt="">
                </button>
                <div class="about-tips flex">
                    <span class="about-tips-title">{{t("meetusbetter")}}</span>
                    <span class="about-tips-content">{{t('ourHistoryinNumbers')}}</span>
                </div>
            </div>
            <div class="about-content">{{t("moreAboutusContent")}}</div>
        </aside>
    </article>
    <article class="100% bottom-line tips">
        <aside class="center flex ">
            <Tips v-for="(item,i) in tipsList" :key="i" :content="item.content">
                <span class="tips-title">{{item.title}}</span>
            </Tips>
        </aside>
    </article>

    <article class="100%  selfIntroduction pr">
        <aside class="selfIntroduction-top">
            <div class="center flex selfIntroduction-center">
                <div class="selfIntroduction-center-left selfIntroduction-center-item">
                    <div class="selfIntroduction-title">
                        <span class="who">{{t('who')}}</span>
                        <span class="weAre">{{t("weAre")}}</span>
                    </div>
                    <div>
                        <span class="selfIntroduction-center-text">{{t('selfIntroductionContent1')}}</span>
                    </div>
                </div>
                <div class="selfIntroduction-center-right selfIntroduction-center-item">
                    <div>
                        <span class="selfIntroduction-center-text">{{t('selfIntroductionContent2')}}</span>
                    </div>
                    <div>
                        <span class="selfIntroduction-center-text">{{t('selfIntroductionContent3')}}</span>
                    </div>
                </div>
            </div>

            <div class="center flex ourProducts">
                <span class="ourProducts-text">{{t('ourProducts')}}</span>
                <div class="line"></div>
            </div>
        </aside>
        <aside class="selfIntroduction-bottom"></aside>
        <div class="product-picture-box pa">
            <Productpicture :productpictureInfo="productpictureInfo"></Productpicture>
        </div>
    </article>


    <article class="100% video-box pr">
        <aside class="center flex ">
            <Tips v-for="(item,i) in whatWeDoList" :key="i" :content="item.text">
                <img class="whatWeDoList-icon" :src="item.imgSrc" alt="">
            </Tips>
        </aside>
    </article>

</template>


<style lang="stylus" scoped>
    .bannerImg-box
        position relative
        .banner-arrow
            position absolute
            top 50%
            width 60px
            height 60px
            z-index 9
            transform: translateY(-50%);
        .banner-arrow-left
            left 40px
        .banner-arrow-right
            right 40px
        .bannerImg
            width 100%
        .bannerText
            position absolute
            top 50%
            left 50%
            transform: translate(-50%,-50%)
            color #fff
            font-size 59px
    .center
        width 1200px
        margin 0 auto
    .100%
        width 100%
    main 
        .mainText
            font-size 103px
            font-weight 100
        .fw500
            font-weight 500
    .bottom-line
        border-bottom 1px solid #D8D8D8
    .introduce
        padding 22px 0 28px
    .about
        padding 60px 0 30px
        .about-left
            width 500px
            height 350px
            margin-right 41px
            position relative
            .aboutBtn
                position absolute
                top 30px
                right 109px
                width 250px
                height 60px
                background #A88217
                border none
                font-size 24px
                color #fff
                .btn_arrow
                    margin-left 12px
            .about-tips
                position absolute
                bottom 0
                left 0
                flex-direction: column;
                .about-tips-title
                    font-weight: 400;
                    color: #1D1D1D;
                    line-height: 29px;
                    font-size: 24px;
                    margin-bottom 14px
                .about-tips-content
                    font-weight: 400;
                    color: #181E23;
                    line-height: 50px;
                    font-size: 42px;
        .about-content
            width 500px 
            font-size 24px
            color #1E1E1E
            line-height:29px
            font-weight 100
    .tips
        padding  0 0 70px
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
            
    .selfIntroduction
        .selfIntroduction-top
            padding-top 60px
            background-color #181E23
            height 705px
            .ourProducts
                margin-top 74px
                align-items center
                justify-content space-between
                .ourProducts-text
                    font-size: 24px;
                    color: #A88217;
                .line
                    width 1000px
                    color #3a3a3a
                    height 1px
                    border 1px solid #3A3A3A
            .selfIntroduction-center
                justify-content space-between
                .selfIntroduction-center-item
                    width 500px
                    height: 360px
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    .selfIntroduction-title
                        margin-top 102px
                        span
                            font-size 59px
                            color #fff
                            font-weight: 100
                        .who
                            font-weight 600
                    .selfIntroduction-center-text
                        font-size 24px
                        font-weight 100
                        color #FFFFFF
                        line-height 36px
                    
        .selfIntroduction-bottom
            background #F1F4F9
            height 414px
        .product-picture-box
            left 50%
            transform: translateX(-50%) 
            bottom 0
            width 1200px
            height 587px
            background rgb(237,237,237)
            z-index 9
    
    .whatWeDoList-icon
        width 64px
        height 65px
        margin 0px auto 40px

    .video-box
        background #f1f4f9


</style>