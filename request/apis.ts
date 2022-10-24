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

type T_SEND_EMAIL_API= (from:{
  inquiry:string,
  name:string,
  email:string,
  details:string
})=>Promise<{
  data:any
}>

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


const SEND_EMAIL_URL = 'common/sendEmail'
export const SEND_EMAIL_API:T_SEND_EMAIL_API = (data)=>request(SEND_EMAIL_URL,data,{method:'post'})