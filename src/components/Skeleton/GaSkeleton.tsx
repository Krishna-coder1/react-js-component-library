import React from "react";
import Skeleton from "@mui/material/Skeleton";
import SkeletonAnimation from "./skeleton-animation";
import SkeletonVariant from "./skeleton-variant";

type myProps = {
  variant: SkeletonVariant;
  animation?: SkeletonAnimation;
  height?: number | string;
  width?: number | string;
};

const GaSkeleton: React.FC<myProps> = ({
  variant,
  animation,
  height,
  width,
}) => {
  return (
    <Skeleton
      width={width}
      height={height}
      animation={animation}
      variant={variant}
    />
  );
};

export default GaSkeleton;
