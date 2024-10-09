import { FC } from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer: FC = () => {
  return (
    <>
      <div className="footer bg-black h-[440px] pl-20 pr-20 pt-20 pb-[33px] flex flex-col justify-between">
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;
