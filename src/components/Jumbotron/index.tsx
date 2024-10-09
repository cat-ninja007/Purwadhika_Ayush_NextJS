import { FC } from "react";
import Image from "next/image";
import Navigation from "../Navigation";
import JumbotronImg from '../../public/images/jumbotron-img.png'

const Jumbotron: FC = () => {
  return (
    <>
      <div className='w-screen relative h-[700px] bg-light-gray flex items-end justify-center'>
        
        
        <div className="navigation absolute top-[26px] left-0 right-0">
          <Navigation />
        </div>

        <div className='bg-transparent'>
          <Image src={JumbotronImg} alt="jumbotron-image" className='w-[501px] h-[654.37px]'/>
        </div>



      </div>
    </>
  );
};

export default Jumbotron;
