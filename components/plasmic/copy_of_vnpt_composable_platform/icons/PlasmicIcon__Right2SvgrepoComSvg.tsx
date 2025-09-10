/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Right2SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Right2SvgrepoComSvgIcon(props: Right2SvgrepoComSvgIconProps) {
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
        strokeWidth={"1.5"}
        d={"m9 5 5.15 5a2.74 2.74 0 0 1 0 4L9 19"}
      ></path>
    </svg>
  );
}

export default Right2SvgrepoComSvgIcon;
/* prettier-ignore-end */
