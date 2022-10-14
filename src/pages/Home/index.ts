import {NewsItem} from '../../types'
export type productpicture = {
  mainImg: string;
  thumbnailTop: string;
  thumbnailBottomLetf: string;
  thumbnailBottomRight: string;
  Introduction: string;
};
export enum arrowType {
  next,
  prev,
}

export type TipsList = Array<{
  title: string;
  content: string;
}>;

export type WhatWeDoList = Array<{
  imgSrc: string;
  text: string;
}>;

export interface bannerItem {
  url: string;
  title: string;
}
export type BannerList = Array<bannerItem>;
export interface newsAndEventsItem {
  imgSrc: string;
  cardTitle: string;
  cardText: string;
  linkUrl: string;
}
export type NewsAndEventsList = Array<NewsItem>;

export const inPartnershipList = [
  "/image/logo_antminer.png",
  "/image/logo_whatsminer.png",
  "/image/logo_jianan.png",
  "/image/logo_innosilicon.png",
  "/image/logo_iPolloStore.png",
  "/image/logo_smic.png",
  "/image/logo-bitdeer.png",
  "/image/logo-whalefin.png",
  "/image/logo_crust.png",
  "/image/logo_astar.png",
  "/image/logo_f2pool.png",
  "/image/logo_btc.png",
  "/image/logo_168node.png",
  "/image/logo_poolin.png",
  "/image/logo-antpool.png",
];
export const newsAndEventsList: NewsAndEventsList = [
  
];
export const whatWeDoList: WhatWeDoList = [
  {
    imgSrc: "/image/icon_1.png",
    text: "iconText1",
  },
  {
    imgSrc: "/image/icon_2.png",
    text: "iconText2",
  },
  {
    imgSrc: "/image/icon_3.png",
    text: "iconText3",
  },
  {
    imgSrc: "/image/icon_4.png",
    text: "iconText4",
  },
];
export const tipsList: TipsList = [
  {
    title: "9",
    content: "tips1",
  },
  {
    title: "1000",
    content: "tips2",
  },
  {
    title: "39",
    content: "tips3",
  },
  {
    title: "100%",
    content: "tips4",
  },
];

