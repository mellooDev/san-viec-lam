/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationCheckSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function LocationCheckSvgrepoComSvgIcon(
  props: LocationCheckSvgrepoComSvgIconProps
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
          "m9 11 2 2 4-4m4 1.2c0 3.976-3.5 7.2-7 10.8-3.5-3.6-7-6.824-7-10.8S8.134 3 12 3s7 3.224 7 7.2"
        }
      ></path>
    </svg>
  );
}

export default LocationCheckSvgrepoComSvgIcon;
/* prettier-ignore-end */
