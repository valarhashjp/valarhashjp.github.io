<script setup lang="ts">
defineProps({
  hometitle: {
    type: String,
    required: true,
    default: "",
  },
  content: {
    type: String,
    required: true,
    default: "",
  },
  textColor: {
    type: String,
    required: false,
    default: "#000000",
  },
});
</script>

<template>
  <div class="home-title" :style="{ color: textColor }">
    <span class="title">{{ hometitle }}</span>
    <span class="text">{{ content }}</span>
  </div>
</template>

<style lang="stylus" scoped>
    .home-title
        font-size 59px
        .title
            font-weight 600
@media screen and (max-width: 960px)
    .home-title
        font-size 28px
        text-align center
        .title
            font-weight 600
</style>
