<script setup lang="ts">
import { defineProps } from 'vue'
import { useI18n } from "vue-i18n";
export interface NodeCardInfo {
    icon: string,
    name: string,
    commission: string,
    apr: string
}
const { t } = useI18n()
defineProps<{
    nodeCardInfo: NodeCardInfo
}>()
</script>
<template>
    <div class="card flex">
        <img :src="nodeCardInfo.icon" alt="">
        <span class="name">{{nodeCardInfo.name}}</span>
        <div class="commissionAndapr">
            <div class="commission flex">
                <span class="title">{{t('commission')}}</span>
                <span class="content">{{nodeCardInfo.commission}}</span>
            </div>
            <div class="line"></div>
            <div class="apr">
                <span class="title">{{t('APR')}}</span>
                <span class="content">{{nodeCardInfo.apr}}</span>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .card
        width 350px 
        height 220px
        background: #FFFFFF
        border: 1px solid #DDDDDD
        margin-bottom 30px
        flex-direction column
        align-items center
        padding-bottom 32px
        &:hover
            background #F1F4F9
        img
            width 64px
            height 64px
            margin 16px 0 12px
        .name
            font-size: 24px
            font-weight: 600
            color: #181E23
            line-height: 29px
            margin-bottom 20px
        .commissionAndapr
            width 100%
            display flex
            text-align center
            justify-content space-between
            align-items center
            .line
                width: 1px;
                height: 24px;
                border: 1px solid #CDCDCD;
            .commission,.apr
                width 49%
                display flex
                flex-direction column
                .title
                    font-size 14px
                    color #181E23
                    margin-bottom 8px
                .content
                    font-weight: 600;
                    color: #A88217;
                    font-size: 16px;    

            

</style>
