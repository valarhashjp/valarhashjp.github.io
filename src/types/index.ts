export interface resourcesInfo {
  name: string;
  productImage: string;
  hashrate: string;
  powerRatio: string;
  powerOnWall: string;
  showPictures: Array<string>;
  tableInfo: tableInfo;
}
export interface tableInfo {
  algorithm: string;
  temperature: string;
  size: string;
  weight: string;
}
export type ResourcesList = Array<resourcesInfo>;
export type Resourcesitem = {
  id: number;
  name: string;
  resourcesList: ResourcesList;
};
export type Resources = Array<Resourcesitem>;

export type SelectData = Array<{
  title: string;
  key: string;
}>;
export type Store = {
  resources: Resources;
  activeResources: number;
  deatiledId: number;
};
export interface NewsItem {
  content: string;
  createTime: string;
  figure: string;
  id: number;
  overview: string;
  title: string;
}
