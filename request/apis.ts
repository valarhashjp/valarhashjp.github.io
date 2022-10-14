import request from "./request";
import { bannerItem } from "../src/pages/Home/index";
import { NewsItem } from "../src/types/index";
const GET_BANNER_LIST_URL = "common/banner/list";

type T_GET_BANNER_LIST_RUL_API = () => Promise<{
  data: Array<bannerItem>;
}>;

type T_GET_NEWS_LSIT_URL_API = (
  pageSize: number,
  pageNum: number
) => Promise<{
  data: {
    count: number;
    results: Array<NewsItem>;
  };
}>;

type T_GET_NEWS_INFO_API = (
 ID:number
) => Promise<{
  data: NewsItem;
}>;

export const GET_BANNER_LIST_RUL_API: T_GET_BANNER_LIST_RUL_API = () =>
  request(GET_BANNER_LIST_URL);

const GET_NEWS_LSIT_URL = "common/news/list";
export const GET_NEWS_LSIT_URL_API: T_GET_NEWS_LSIT_URL_API = (
  pageSize: number,
  pageNum: number
) => request(`${GET_NEWS_LSIT_URL}?pageSize=${pageSize}&pageNum=${pageNum}`);

const GET_NEWS_INFO = "common/news";
export const GET_NEWS_INFO_API:T_GET_NEWS_INFO_API = (ID: number) =>
  request(`${GET_NEWS_INFO}/${ID}`);
