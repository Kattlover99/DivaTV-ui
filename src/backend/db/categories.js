import { v4 as uuid } from "uuid";
import Makeup from '../../assets/images/3.png'
import Skincare from '../../assets/images/4.png'
import Haircare from '../../assets/images/5.png'
import menstrualHygiene from '../../assets/images/7.png'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Makeup",
    description:
      "Get ready with Katrina and Janhavi! Know what's the makeup routine of favourite celebs",
    img: Makeup
  },
 
  {
    _id: uuid(),
    categoryName: "Fashion",
    description:
      "Get some awesome fashion tips from our celebrity stylists!",
    img: menstrualHygiene
  },

  {
    _id: uuid(),
    categoryName: "Haircare",
    description:
      "Know more about maintaining curly hair from Mithila and Deepika",
    img: Haircare
  },
  {
    _id: uuid(),
    categoryName: "Skincare",
    description:
      "Get to know skincare routines of your favourite celebs",
    img: Skincare
  },
  {
    _id: uuid(),
    categoryName: "Makeup MasterClass",
    description:
      "trending masterclass",
    img: Makeup
  },
];
