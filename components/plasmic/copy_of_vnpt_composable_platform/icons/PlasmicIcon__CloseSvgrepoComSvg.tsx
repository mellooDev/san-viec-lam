/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseSvgrepoComSvgIcon(props: CloseSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"-.5 0 25 25"}
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
        strokeWidth={"1.5"}
        d={"m3 21.32 18-18m-18 0 18 18"}
      ></path>
    </svg>
  );
}

export default CloseSvgrepoComSvgIcon;
/* prettier-ignore-end */
