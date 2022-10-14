<template >
    <main>
        <img class="img" src="../../../../public/image/img_MinerHostingServices.png" alt="" />
        <div>
            {{t('comingSoon')}}
        </div>
    </main>
</template>
<script  setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style lang="stylus" scoped>
    main 
        div
            width 100%
            text-align center
            padding 49px 0 72px
            font-size 24px
            font-weight 600
            color #181E23
    .img
        width 100%
</style>