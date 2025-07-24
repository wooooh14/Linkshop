import { getIcon, getImage } from "./imageloader";

export const Shopcarddata = [
  {
    id: 1,
    item: getImage("adidas1"),
    itemname: "아디다스 가젤 HP5379",
    price: "₩134,000",
  },
  {
    id: 2,
    item: getImage("adidas2"),
    itemname: "아디다스 가젤 HP5379",
    price: "₩104,000",
  },
  {
    id: 3,
    item: getImage("jacket"),
    itemname: "나이키 집업",
    price: "₩154,000",
  },
  {
    id: 4,
    item: getImage("adidas3"),
    itemname: "아디다스 신발",
    price: "₩124,000",
  },
  {
    id: 5,
    item: getImage("nike1"),
    itemname: "나이키 신발",
    price: "₩124,000",
  },
  {
    id: 6,
    item: getImage("nike2"),
    itemname: "나이키 신발",
    price: "₩124,000",
  },
];

export const Shopheaderdata = [
  {
    id: 1,
    emptyheart: getIcon("emptyheart"),
    fillheart: getIcon("fillheart"),
    like: 65,
    icon: getIcon("red"),
    shopname: "너구리 직구상점",
    username: "@pumpkinraccoon",
    share: getIcon("share"),
    meatball: getIcon("meatball"),
  },
];
