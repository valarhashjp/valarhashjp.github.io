<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import MyTips from "./components/MyTips.vue";
import Productpicture from "./components/Productpicture.vue";
import Video from "./components/Video.vue";
import HomeTitle from "./components/HomeTitle.vue";
import Card from "./components/Card.vue";
import {
  arrowType,
  BannerList,
  inPartnershipList,
  NewsAndEventsList,
  productpicture,
  tipsList,
  whatWeDoList,
} from "./index";
import {
  GET_BANNER_LIST_RUL_API,
  GET_NEWS_LSIT_URL_API,
} from "../../../request/apis";
const { t } = useI18n();
const bannerImg: any = ref(null);
const banner: any = ref(null);
const productpictureInfo: productpicture = {
  mainImg: "/image/miner1.png",
  thumbnailTop: "/image/miner2.png",
  thumbnailBottomLetf: "/image/miner4.png",
  thumbnailBottomRight: "/image/miner3.png",
  Introduction: t("productName"),
};

const data = reactive<{
  bannerList: BannerList;
  bannerH: string;
  newsAndEventsList: NewsAndEventsList;
  pageNum: number;
  newsNum: number;
}>({
  bannerList: [
    {
      url: "/image/banner1.png",
      title: `${t("Valarhash")}${t("inHashwetrust")}`,
    },
  ],
  bannerH: "",
  newsAndEventsList: [],
  pageNum: 1,
  newsNum: 1,
});
const immLoad = () => {
  if (bannerImg.value) {
    const h = bannerImg.value[0].offsetHeight;
    data.bannerH = `${h}px`;
  }
};
const arrowClick = (type: arrowType) =>
  type == arrowType.next ? banner.value.next() : banner.value.prev();
const getbanner = async () => {
  const res = await GET_BANNER_LIST_RUL_API();
  // data.bannerList = res.data
};
const getNews = async () => {
  const res = await GET_NEWS_LSIT_URL_API(3, data.pageNum);
  data.newsAndEventsList = res.data.results;
  data.newsNum = res.data.count;
};
const newsBack = () => {
  if (data.pageNum > 1) {
    data.pageNum--;
    getNews();
  }
};
const newsNext = () => {
  const max = Math.ceil(data.newsNum / 3);
  if (data.pageNum < max) {
    data.pageNum++;
    getNews();
  }
};
onMounted(() => {
  window.addEventListener(
    "resize",
    () => {
      if (bannerImg.value[0] && bannerImg.value[0].offsetHeight) {
        const h = bannerImg.value[0].offsetHeight;
        data.bannerH = `${h}px`;
      }
    },
    false
  );

  getbanner();
  getNews();
});
</script>
<template>
  <el-carousel
    ref="banner"
    :height="data.bannerH"
    indicator-position="none"
    arrow="never"
    :autoplay="false"
  >
    <el-carousel-item v-for="(item, i) in data.bannerList" :key="i">
      <div class="bannerImg-box">
        <img
          class="banner-arrow banner-arrow-left"
          src="/image/banner_arrow_left.png"
          alt=""
          @click="arrowClick(arrowType.prev)"
        />
        <div class="bannerImg-box">
          <img
            ref="bannerImg"
            class="bannerImg"
            :src="item.url"
            @load="immLoad"
          />
          <span class="bannerText">{{ item.title }}</span>
        </div>
        <img
          class="banner-arrow banner-arrow-right"
          src="/image/banner_arrow_right.png"
          alt=""
          @click="arrowClick(arrowType.next)"
        />
      </div>
    </el-carousel-item>
  </el-carousel>
  <main class="100% bottom-line introduce">
    <div class="center text-H1">
      <span class="fw500 mainText">{{ t("Valarhash") }}</span>
      <span class="mainText">{{ t("inHashwetrust") }}</span>
    </div>
  </main>
  <article class="100% bottom-line about">
    <aside class="center flex">
      <div class="about-left">
        <button class="aboutBtn">
          {{ t("moreAboutus") }}
          <img
            class="btn_arrow"
            src="/image/btn_arrow.png"
            alt=""
          />
        </button>
        <!-- <div class="about-tips flex">
          <span class="about-tips-title">{{ t("meetusbetter") }}</span>
          <span class="about-tips-content">{{ t("ourHistoryinNumbers") }}</span>
        </div> -->
      </div>
      <div class="about-content">{{ t("moreAboutusContent") }}</div>
    </aside>
  </article>
  <article class="100% bottom-line tips">
    <aside class="center flex">
      <MyTips v-for="(item, i) in tipsList" :key="i" :content="t(item.content)">
        <span class="tips-title">{{ item.title }}</span>
      </MyTips>
    </aside>
  </article>

  <article class="100% selfIntroduction pr">
    <aside class="selfIntroduction-top">
      <div class="center flex selfIntroduction-center">
        <div class="selfIntroduction-center-left selfIntroduction-center-item">
          <HomeTitle
            textColor="#fff"
            :hometitle="t('who')"
            :content="t('weAre')"
          ></HomeTitle>
          <div>
            <span class="selfIntroduction-center-text">{{
              t("selfIntroductionContent1")
            }}</span>
          </div>
        </div>
        <div class="selfIntroduction-center-right selfIntroduction-center-item">
          <div>
            <span class="selfIntroduction-center-text">{{
              t("selfIntroductionContent2")
            }}</span>
          </div>
          <div>
            <span class="selfIntroduction-center-text">{{
              t("selfIntroductionContent3")
            }}</span>
          </div>
        </div>
      </div>

      <div class="center flex ourProducts">
        <span class="ourProducts-text">{{ t("ourProducts") }}</span>
        <div class="line"></div>
      </div>
    </aside>
    <aside class="selfIntroduction-bottom"></aside>
    <div class="product-picture-box pa">
      <Productpicture :productpictureInfo="productpictureInfo"></Productpicture>
    </div>
  </article>

  <article class="100% video-box pr">
    <aside class="center flex al-c video-box-top">
      <div class="whatWeDo">
        <HomeTitle :hometitle="t('what')" :content="t('wedo')"></HomeTitle>
        <div class="ContactUs flex al-c">
          <span>{{ t("contactUs") }}</span>
          <img
            class="btn_arrow_yellow"
            src="/image/btn_arrow_yellow.png"
            alt=""
          />
        </div>
      </div>
      <div class="video">
        <Video ></Video>
      </div>
    </aside>
    <aside class="center flex tipsbox2">
      <MyTips v-for="(item, i) in whatWeDoList" :key="i" :content="t(item.text)">
        <img class="whatWeDoList-icon" :src="item.imgSrc" alt="" />
      </MyTips>
    </aside>
  </article>

  <article class="100% in-partnership">
    <aside class="center">
      <HomeTitle
        :hometitle="t('InPartnership')"
        :content="t('with')"
      ></HomeTitle>
      <div class="logoList mt73 flex">
        <img
          v-for="(img, i) in inPartnershipList.slice(0, 5)"
          :key="i"
          :src="img"
          alt=""
        />
      </div>
      <div class="logoList flex">
        <img
          v-for="(img, i) in inPartnershipList.slice(5, 10)"
          :key="i"
          :src="img"
          alt=""
        />
      </div>
      <div class="logoList flex">
        <img
          v-for="(img, i) in inPartnershipList.slice(10, 15)"
          :key="i"
          :src="img"
          alt=""
        />
      </div>
    </aside>
  </article>
  <article class="100% newsAndevents">
    <aside class="center">
      <HomeTitle :hometitle="t('news')" :content="t('events')"></HomeTitle>
      <div class="cardBox">
        <div
          v-for="(item, i) in data.newsAndEventsList"
          :key="i"
          class="card-item"
        >
          <Card :cardInfo="item"></Card>
        </div>
      </div>
      <div class="newspage">
        <div class="newspage-icon" @click="newsBack">&lt;</div>
        <div>{{ data.pageNum }}/{{ Math.ceil(data.newsNum / 3) }}</div>
        <div class="newspage-icon" @click="newsNext">></div>
      </div>
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
                    width 26px
                    height 26px
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
        padding-bottom 20px
        .video-box-top
            justify-content: space-between;
            padding-top 100px
            .whatWeDo
                height 200px

                .ContactUs
                    color #A88217
                    font-size 24px
                    margin-top 68px
                    span
                        margin-right 20px
                .btn_arrow_yellow
                    width 44px
                    height 44px
            .video
                width 750px
                height 421px
    .in-partnership
        .center
            padding  103px 0
            .mt73
                margin-top 73px
            .logoList
                justify-content: space-between;
                flex-wrap: wrap;
                img
                    width 180px
                    height 126px
                    margin-bottom 46px
    .newsAndevents
        .center
            padding 0 0 103px 0
        .cardBox
            margin-top 72px
            display flex
            justify-content: space-between;
            .card-item
                width  378px
        .newspage
          display flex
          justify-content: flex-end
          align-items center
          margin-top 32px
          .newspage-icon
            width 32px
            height 32px
            color #fff
            background-color rgb(120,120,120)
            text-align center
            line-height 28px
            font-size 28px
            margin 0 24px
            &:hover
              background-color rgb(168,130,23)




@media screen and (max-width: 960px)
    .center
        width 100%
    .text-H1
        width 80%
    .introduce
        padding 22px 0 28px
        .mainText
            font-size 40px
            margin 0 auto


    .bannerImg-box
        .bannerText
            font-size 35px
        .banner-arrow
            width 30px
            height 30px
    .about
        padding: 30px 0 15px
        .about-left
            width 100%
            height 215px
            margin 0
            padding 0 20px
            .aboutBtn
              position revert
              display block
              margin 0 auto 10px
            .about-tips
              position initial
              text-align center
        .about-content
            width 100%
            padding 0 20px
            margin-top 20px
        aside
            flex-direction column
            align-items: center;
    .tips
        aside
            flex-direction column
            align-items: center;
        .tips-item
            width 100%
            padding 10px 24px 10px
            height auto
    .selfIntroduction
        .selfIntroduction-top
            height auto
            .selfIntroduction-center
                    flex-direction column
                    align-items: center;
                    .selfIntroduction-center-item
                        width 95%
                        height auto
                        .home-title
                            margin-bottom 20px
                            font-size 46px
                        .selfIntroduction-center-text
                            margin-bottom 20px
                            display inline-block
                            font-size 18px
            .ourProducts
                padding-bottom 20px
        .selfIntroduction-bottom
            display none
        .product-picture-box
            position inherit
            width 100%
            height auto
    .video-box
        .video-box-top
            padding-top 0px
            flex-direction column
            align-items center
            .whatWeDo
                height auto
                .ContactUs
                    margin-top 20px
            .video
                width 100%
                height auto
    .tipsbox2
        flex-direction column
        align-items center
        .tips-item
            padding 10px 14px
            .whatWeDoList-icon
                width 30px
                height 30px
                margin: 0px auto 10px
    .in-partnership
        .center
            padding  10px 0
            .mt73
                margin-top 10px
            .logoList
                justify-content: center;
                flex-direction: column;
                align-items: center;
                img
                    width 180px
                    height 126px
                    margin-bottom 6px
     .newsAndevents
        .center
            padding 0 0 10px 0
          .cardBox
            margin-top 20px
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding 0 20px
            .card-item
                width  100%
                margin-bottom 10px
        .newspage
          justify-content center
</style>
