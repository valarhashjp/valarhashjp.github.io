<script setup lang="ts">
import { SelectData } from "../../types";
import { useI18n } from "vue-i18n";
import Myselect from "./components/Myselect.vue";
import { reactive } from "vue";
const { t } = useI18n();

const data = reactive<{
  selectData: SelectData;
  SelectKey: string;
  name: string;
  email: string;
  detais: string;
}>({
  selectData: [
    {
      key: "Sales",
      title: "Sales",
    },
    {
      key: "BusinessCooperation",
      title: "BusinessCooperation",
    },
    {
      key: "ComplaintsandSugge",
      title: "ComplaintsandSugge",
    },
  ],
  SelectKey: "",
  name: "",
  email: "",
  detais: "",
});
const choose = (key: string) => {
  data.SelectKey = key;
};
</script>
<template>
  <main>
    <img class="banner" src="../../../public/image/img_contactus.png" alt="" />
    <div class="center">
      <h2>{{ t("ContactUs") }}</h2>
      <div class="line"></div>
      <div class="ContactUsInfo flex">
        <div class="ContactUsInfo-item">
          <span class="ContactUsInfo-titme">{{ t("ContactEmail") }}</span>
          <span class="ContactUsInfo-content">hanetsu@vhash.io</span>
        </div>
        <div class="ContactUsInfo-item">
          <span class="ContactUsInfo-titme">{{ t("Address") }}</span>
          <span class="ContactUsInfo-content">{{ t("AddressContent") }}</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="form">
        <div class="from-item form-select flex">
          <span class="form-select-title">{{ t("Inquiry") }}</span>
          <Myselect
            :selectData="data.selectData"
            :selectkey="data.SelectKey"
            @choose="choose"
          ></Myselect>
        </div>
        <div class="input-box">
          <div class="input">
            <span class="input-title">
              <span class="red">*</span>{{ t("Name") }}</span
            >
            <input
              :placeholder="t('PleaseFill')"
              class="input-main"
              type="text"
              v-model="data.name"
            />
          </div>
          <div class="input">
            <span class="input-title">
              <span class="red">*</span>{{ t("Email") }}</span
            >
            <input
              :placeholder="t('PleaseFill')"
              class="input-main"
              type="text"
              v-model="data.email"
            />
          </div>
        </div>
        <div class="Detais-box">
          <div class="input">
            <span class="input-title">
              <span class="red">*</span>{{ t("Name") }}</span
            >
            <textarea
              v-model="data.detais"
              :placeholder="t('detaisDisabled')"
            ></textarea>
          </div>
        </div>
        <div class="submitBtn">{{ t("comfirm") }}</div>
      </div>
    </div>
  </main>
</template>
<style lang="stylus" scoped>
.banner
    width 100%
.center
    width 944px
    margin 50px auto 0
    h2
        font-size 24px
        font-weight 400
        color #181E23
        line-height 29px
        margin-bottom 23px
    .line
        width 100%
        height 1px
        border 1px solid #D8D8D8
        margin-bottom 44px
    .ContactUsInfo
        justify-content space-between
        margin-bottom 40px
        .ContactUsInfo-item
            width 50%
            display flex
            flex-direction column
            font-size: 16px
            font-weight: 400
            line-height: 19px
            .ContactUsInfo-titme
                color: #999999
                margin-bottom 16px
            .ContactUsInfo-content
                color: #181E23;
    .form-select
      align-items center
      .form-select-title
        margin-right 48px
  .input-box
    display flex
    justify-content: space-between;
    margin-top 40px
    .red
      color #E02020
      margin 0 2px
    .input
      display flex
      flex-direction column
      .input-main
        margin-top 12px
        width: 455px
        height: 50px
        background: #FFFFFF
        border: 1px solid #D8D8D8
        font-size 18px
        padding-left 24px
        box-sizing border-box

  .Detais-box
    margin-top 40px
    .red
      color #E02020
      margin 0 2px
    .input-title
      margin-bottom 12px
      display block
    textarea
      width: 100%
      height: 130px
      background: #FFFFFF
      border: 1px solid #D8D8D8
      padding 14px 24px
      box-sizing border-box
      font-size 18px
  .submitBtn
      margin-top 44px
      width: 249px;
      height: 60px;
      background: #A88217
      font-size 24px
      line-height 60px
      text-align center
      color #fff
.input-main::placeholder {
        color: #D1D1D1;
        font-size 18px
    }
textarea::placeholder {
        color: #D1D1D1
        font-size 18px
    }
@media screen and (max-width: 960px)
    .center
        width 100%
        .ContactUsInfo
          padding 0 10px
        .line
          margin-bottom 22px
        .form
          padding 0 10px
          display flex
          flex-direction column
          align-items center
          .form-select
            flex-direction column
            width 100%
            max-width 460px
            .form-select-title
              margin-bottom 10px

          .input-box
            flex-direction column
            align-items: center
            width 100%
            margin-top 20px
            .input
              width 100%
              max-width 460px
              margin-bottom 20px
              .input-main
                width: 100%
          .Detais-box
            width 100%
            max-width 460px
            margin-top 0
</style>
