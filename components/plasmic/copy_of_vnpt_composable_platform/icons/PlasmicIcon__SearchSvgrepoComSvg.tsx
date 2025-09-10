/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchSvgrepoComSvgIcon(props: SearchSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M13.46 24.45c-6.29 0-11.389-5.01-11.389-11.2S7.17 2.04 13.46 2.04s11.39 5.02 11.39 11.21-5.1 11.2-11.39 11.2m18.228 5.8-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87C26.92 5.93 20.894 0 13.46 0S0 5.93 0 13.25c0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 0 0 8.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44"
        }
      ></path>
    </svg>
  );
}

export default SearchSvgrepoComSvgIcon;
/* prettier-ignore-end */
