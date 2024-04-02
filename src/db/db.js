import item1Img from "../Components/Food_Comp/images/cube128x128.png";
import item2Img from "../Components/Food_Comp/images/cube128x128.png";
import item3Img from "../Components/Food_Comp/images/cube128x128.png";
import item4Img from "../Components/Food_Comp/images/cube128x128.png";
import item5Img from "../Components/Food_Comp/images/cube128x128.png";
import item6Img from "../Components/Food_Comp/images/cube128x128.png";

export function getData() {
  return [
    { title: "Item 1", price: 1, Image: item1Img,id:1 },
    { title: "Item 2", price: 1, Image: item2Img,id:2 },
    { title: "Item 3", price: 1, Image: item3Img,id:3 },
    { title: "Item 4", price: 1, Image: item4Img,id:4 },
    { title: "Item 5", price: 1, Image: item5Img ,id:5},
    { title: "Item 6", price: 1, Image: item6Img,id:6 },
  ];
}