import LogoIcon from "./img/logo-icon2.png";
import FragranceImg from "./img/hero/hero14.jpg";
import Fragrance2Img from "./img/hero/hero17.jpg";
import FullLogo from "./img/logo1.png";
import MenCollectionImg from "./img/hero/hero10.jpg";
import WomenCollectionImg from "./img/hero/hero13.png";
import ProductImg from "./img/01.jpeg";
import MenPerfume from "./img/Products/man-perfume.png";
import WomenPerfume from "./img/Products/woman-perfume.png";
import ExclusivePerfume1 from "./img/Products/exclusive1.png";
import ExclusivePerfume2 from "./img/Products/exclusive2.png";
import About1Img from "./img/about1.jpg";
import About2Img from "./img/about2.jpg";

export {
  LogoIcon,
  FragranceImg,
  Fragrance2Img,
  FullLogo,
  MenCollectionImg,
  WomenCollectionImg,
  ProductImg,
  MenPerfume,
  WomenPerfume,
  ExclusivePerfume1,
  ExclusivePerfume2,
  About1Img,
  About2Img,
};

import toast, { Toaster } from "react-hot-toast";

export const showToastAndFocus = (message, ref, e) => {
  e.preventDefault();
  toast.error(message);
  ref?.current?.focus();
};
