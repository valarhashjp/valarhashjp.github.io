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
  "../../../public/image/logo_antminer.png",
  "../../../public/image/logo_whatsminer.png",
  "../../../public/image/logo_jianan.png",
  "../../../public/image/logo_innosilicon.png",
  "../../../public/image/logo_iPolloStore.png",
  "../../../public/image/logo_smic.png",
  "../../../public/image/logo-bitdeer.png",
  "../../../public/image/logo-whalefin.png",
  "../../../public/image/logo_crust.png",
  "../../../public/image/logo_astar.png",
  "../../../public/image/logo_f2pool.png",
  "../../../public/image/logo_btc.png",
  "../../../public/image/logo_168node.png",
  "../../../public/image/logo_poolin.png",
  "../../../public/image/logo-antpool.png",
];
export const newsAndEventsList: NewsAndEventsList = [
  
];
export const whatWeDoList: WhatWeDoList = [
  {
    imgSrc: "../../../public/image/icon_1.png",
    text: "iconText1",
  },
  {
    imgSrc: "../../../public/image/icon_2.png",
    text: "iconText2",
  },
  {
    imgSrc: "../../../public/image/icon_3.png",
    text: "iconText3",
  },
  {
    imgSrc: "../../../public/image/icon_4.png",
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

