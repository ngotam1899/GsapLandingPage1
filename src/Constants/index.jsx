import getConfig from "next/config";

export const assets = img => {
  return `${process.env.HOST}/static/images/${img}`;
};
export const assetsPage1 = img => {
  return `${process.env.HOST}/static/images/desktop/${img}`;
};
export const assetsFooter=img=>{
  return `${process.env.HOST}/static/images/desktop/footer/${img}`;
};