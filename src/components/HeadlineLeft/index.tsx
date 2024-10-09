import React, { FC } from "react";

interface IHeadlineLeftProps {
  headline: string;
}

const HeadlineLeft: FC<IHeadlineLeftProps> = ({ headline }) => {
  return (
    <div className="w-[367px]">
      <h3>{headline}</h3>
    </div>
  );
};

export default HeadlineLeft;
