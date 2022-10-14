import { Resources, Store } from "../types";
import { createStore } from "vuex";
import mutations from './mutations'

export const store = createStore<Store>({
  state() {
    return {
      resources: [
        {
          id: 0,
          name: "Bitmain",
          resourcesList: [
            {
              name: "Bitcoin Miner S19",
              productImage: "/image/bitmain/bitmain-main.png",
              hashrate: "126T ± 5%",
              powerRatio: "36/34 ± 5%",
              powerOnWall: "3250 ± 5%",
              showPictures: [
                "/image/bitmain/bitmain-main.png",
                "/image/bitmain/bitmain-img1.webp",
                "/image/bitmain/bitmain-img2.png",
                "/image/bitmain/bitmain-img2.png",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "0~40",
                size: "400*195.5*290",
                weight: "14.2KG",
              },
            },
            {
              name: "Bitcoin Miner S19 Pro",
              productImage: "/image/bitmain/bitmain-main.png",
              hashrate: "110T±3%",
              powerRatio: "29.5 ± 5%",
              powerOnWall: "3250 ± 5%",
              showPictures: [
                "/image/bitmain/bitmain-main.png",
                "/image/bitmain/bitmain-img1.webp",
                "/image/bitmain/bitmain-img2.png",
                "/image/bitmain/bitmain-img2.png",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "0~40",
                size: "370*195.5*290",
                weight: "13.2KG",
              },
            },
            {
              name: "Bitcoin Miner S19 Xp",
              productImage: "/image/bitmain/bitmain-main.png",
              hashrate: "140T±5%",
              powerRatio: "21.5",
              powerOnWall: "3010± 5%",
              showPictures: [
                "/image/bitmain/bitmain-main.png",
                "/image/bitmain/bitmain-img1.webp",
                "/image/bitmain/bitmain-img2.png",
                "/image/bitmain/bitmain-img2.png",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "5~45",
                size: "400*195.5*290",
                weight: "14.5KG",
              },
            },
            {
              name: "Bitcoin Miner S19J Pro",
              productImage: "/image/bitmain/bitmain-main.png",
              hashrate: "92/96/100/104 T±3%",
              powerRatio: "29.5 ± 5%",
              powerOnWall: "2714/2832/2950/3068 W± 5%",
              showPictures: [
                "/image/bitmain/bitmain-main.png",
                "/image/bitmain/bitmain-img1.webp",
                "/image/bitmain/bitmain-img2.png",
                "/image/bitmain/bitmain-img2.png",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "0~40",
                size: "400*195.5*290",
                weight: "14.6KG",
              },
            },
            {
              name: "Bitcoin Miner T19",
              productImage: "/image/bitmain/bitmain-main.png",
              hashrate: "84/88 T±3%",
              powerRatio: "37.5±5%",
              powerOnWall: "3150/3300±5%",
              showPictures: [
                "/image/bitmain/bitmain-main.png",
                "/image/bitmain/bitmain-img1.webp",
                "/image/bitmain/bitmain-img2.png",
                "/image/bitmain/bitmain-img2.png",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "0~40",
                size: "400*195.5*290",
                weight: "14.2KG",
              },
            },
            {
              name: "ETHETC Miner E9",
              productImage: "/image/bitmain/ETHETC-main.jpg",
              hashrate: "2.4G",
              powerRatio: "0.8",
              powerOnWall: "1920w± 5%",
              showPictures: [
                "/image/bitmain/ETHETC-main.png",
                "/image/bitmain/ETHETC-1.jpg",
                "/image/bitmain/ETHETC-2.jpg",
              ],
              tableInfo: {
                algorithm: "EtHash",
                temperature: "5~40",
                size: "400*195.5*290",
                weight: "14.2KG",
              },
            },
            {
              name: "KDA Miner KA3",
              productImage: "/image/bitmain/kad.png",
              hashrate: "166T",
              powerRatio: "19± 5%",
              powerOnWall: "3154± 5%",
              showPictures: ["/image/bitmain/kad.png"],
              tableInfo: {
                algorithm: "Kadena",
                temperature: "5~40",
                size: "430*195*290",
                weight: "16.1kg",
              },
            },
            {
              name: "Litecoin Miner L7",
              productImage: "/image/bitmain/bitmain-main.png",
              hashrate: "8800/9050/9300/9500M±3%",
              powerRatio: "0.36 ± 10%",
              powerOnWall: "3170/3260/3350/3420 ± 10%",
              showPictures: [
                "/image/bitmain/bitmain-main.png",
                "/image/bitmain/bitmain-img1.webp",
                "/image/bitmain/bitmain-img2.png",
                "/image/bitmain/bitmain-img2.png",
              ],
              tableInfo: {
                algorithm: "Scrypt",
                temperature: "0~40",
                size: "400*195.5*290",
                weight: "13.122KG",
              },
            },
            {
              name: "Zcash Miner Z15",
              productImage: "/image/bitmain/bitmain-main.png",
              hashrate: "420K",
              powerRatio: "3.6±5%",
              powerOnWall: "1510±5%",
              showPictures: [
                "/image/bitmain/bitmain-main.png",
                "/image/bitmain/bitmain-img1.webp",
                "/image/bitmain/bitmain-img2.png",
                "/image/bitmain/bitmain-img2.png",
              ],
              tableInfo: {
                algorithm: "EquiHash",
                temperature: "5-45",
                size: "245*132.5*290",
                weight: "9KG",
              },
            },
          ],
        },
        {
          id: 1,
          name: "Whatsminer",
          resourcesList: [
            {
              name: "Bitcoin Miner M30S",
              productImage:
                "/image/whatsminer/Whatsminer-main.webp",
              hashrate: "88/90/92 TH/S",
              powerRatio: "36J/T",
              powerOnWall: "3168/3240/3312 W（±10%）",
              showPictures: [
                "/image/whatsminer/Whatsminer-main.webp",
                "/image/whatsminer/Whatsminer-1.webp",
                "/image/whatsminer/Whatsminer-2.webp",
                "/image/whatsminer/Whatsminer-3.webp",
                "/image/whatsminer/Whatsminer-4.webp",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "-5℃~35℃",
                size: "390*155*240mm",
                weight: "10.5KG",
              },
            },
            {
              name: "Bitcoin Miner M30S+",
              productImage:
                "/image/whatsminer/Whatsminer-main.webp",
              hashrate: "98/100/102 TH/S±5%",
              powerRatio: "	32J/MH±5%",
              powerOnWall: "3136/3200/3264 W±10%",
              showPictures: [
                "/image/whatsminer/Whatsminer-main.webp",
                "/image/whatsminer/Whatsminer-1.webp",
                "/image/whatsminer/Whatsminer-2.webp",
                "/image/whatsminer/Whatsminer-3.webp",
                "/image/whatsminer/Whatsminer-4.webp",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "-5℃~35℃",
                size: "425*155*240mm",
                weight: "11.1KG",
              },
            },
            {
              name: "Bitcoin Miner M30S++",
              productImage:
                "/image/whatsminer/Whatsminer-main.webp",
              hashrate: "104/106/108/110/112 TH/S±5%",
              powerRatio: "	31J/MH±5%",
              powerOnWall: "3224/3286/3348/3410/3472 W±10%",
              showPictures: [
                "/image/whatsminer/Whatsminer-main.webp",
                "/image/whatsminer/Whatsminer-1.webp",
                "/image/whatsminer/Whatsminer-2.webp",
                "/image/whatsminer/Whatsminer-3.webp",
                "/image/whatsminer/Whatsminer-4.webp",
              ],
              tableInfo: {
                algorithm: "SHA256",
                temperature: "-5℃~35℃",
                size: "425*155*240mm",
                weight: "12.8KG",
              },
            },
          ],
        },
        {
          id: 2,
          name: "Ipollo",
          resourcesList: [],
        },
        {
          id: 3,
          name: "Goldshell",
          resourcesList: [],
        },
      ],
      activeResources: 0,
      deatiledId: 1,
    };
  },
  mutations,
});
