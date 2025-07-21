//아이콘들
import iconblue from "./../assets/icon/iconblue.png";
import iconred from "./../assets/icon/iconred.png";
import nosearchic from "./../assets/icon/nosearchic.png";
import shopheaderic from "./../assets/icon/shopheaderic.png";
//상품들
import baby from "./../assets/images/baby.png";
import towel from "./../assets/images/towel.png";
import jacket from "./../assets/images/jacket.png";
import ring from "./../assets/images/ring.png";
import watch from "./../assets/images/watch.png";
import shoes1 from "./../assets/images/shoes1.png";
import shoes2 from "./../assets/images/shoes2.png";
import shoes3 from "./../assets/images/shoes3.png";
import shoes4 from "./../assets/images/shoes4.png";
import shoes5 from "./../assets/images/shoes5.png";
import shoes6 from "./../assets/images/shoes6.png";

const iconMap = {
  blue: iconblue,
  red: iconred,
  nosearch: nosearchic,
  shopheader: shopheaderic,
};

const imageMap = {
  cup: baby,
  towel: towel,
  jacket: jacket,
  ring: ring,
  watch: watch,
  adidas1: shoes1,
  adidas2: shoes2,
  bbyshoes: shoes3,
  nike1: shoes4,
  nike2: shoes5,
  adidas3: shoes6,
};

export const getIcon = (name) => {
  const icon = iconMap[name];
  if (!icon) {
    console.error(`❌ '${name}' 아이콘을 찾을 수 없습니다.`);
    return null;
  }
  return icon;
};

// 이미지 가져오기
export const getImage = (name) => {
  const image = imageMap[name];
  if (!image) {
    console.error(`❌ '${name}' 이미지를 찾을 수 없습니다.`);
    return null;
  }
  return image;
};
