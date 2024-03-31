import item1Img from "../images/item1.png";
import item2Img from "../images/item2.png";
import item3Img from "../images/item3.png";
import item4Img from "../images/item4.png";
import cocaImg from "../images/coca.png";
import waterImg from "../images/water.png";

export function getData() {
  return [
    { title: "Classic Jerky 150g", price: 1, Image: item1Img,id:1 },
    { title: "Marinade Jerky 150g", price: 1, Image: item2Img,id:2 },
    { title: "Basturma 150g", price: 1, Image: item3Img,id:3 },
    { title: "Mackerel Jerky 150g", price: 1, Image: item4Img,id:4 },
    { title: "Coca-Cola 0.5L", price: 1, Image: cocaImg ,id:5},
    { title: "Water 0.5L", price: 1, Image: waterImg,id:6 },
  ];
}