<script setup lang="ts">
import NodeCard, { NodeCardInfo } from "./components/NodeCard.vue";
const nodeCardList: NodeCardInfo[] = [
  {
    icon: "../../../public/image/nodeService/node_eth.png",
    name: "ETH 2.0",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_polkadot.png",
    name: "Polkadot",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_aptos.png",
    name: "Aptos",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_cosmos.png",
    name: "Cosmos",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_kusama.png",
    name: "Kusama",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_sui.png",
    name: "Sui",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_near.png",
    name: "Near",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_crust.png",
    name: "Crust",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_menson.png",
    name: "Menson",
    commission: "0.08%",
    apr: "9.32%",
  },
  {
    icon: "../../../public/image/nodeService/node_xx network.png",
    name: "XXNetwork",
    commission: "0.08%",
    apr: "9.32%",
  },
];
</script>
<template>
  <main>
    <img class="img" src="../../../public/image/img_nodeservice.png" alt="" />
    <div class="nodeCard-box flex">
      <NodeCard
        v-for="(card, i) in nodeCardList"
        :key="i"
        :node-card-info="card"
      ></NodeCard>
    </div>
  </main>
</template>
<style lang="stylus" scoped>
.img
    width 100%
.nodeCard-box
    padding 32px 0 72px
    width 1100px
    margin  0 auto
    flex-wrap wrap
    justify-content space-between
@media screen and (max-width: 960px)
    .nodeCard-box
        padding: 32px 0 0px;
        width: 100%;
        margin: 0 auto
        justify-content center
        align-items center
</style>
