/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartAltSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartAltSvgrepoComSvgIcon(
  props: HeartAltSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M15.7 4C18.87 4 21 6.98 21 9.76 21 15.39 12.16 20 12 20S3 15.39 3 9.76C3 6.98 5.13 4 8.3 4c1.82 0 3.01.91 3.7 1.71.69-.8 1.88-1.71 3.7-1.71"
        }
      ></path>
    </svg>
  );
}

export default HeartAltSvgrepoComSvgIcon;
/* prettier-ignore-end */
