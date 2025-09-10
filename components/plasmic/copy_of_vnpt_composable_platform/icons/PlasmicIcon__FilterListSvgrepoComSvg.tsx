/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterListSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterListSvgrepoComSvgIcon(
  props: FilterListSvgrepoComSvgIconProps
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
          "M21 6h-2m2 6h-5m5 6h-5m-9 2v-6.439c0-.208 0-.312-.02-.411a1 1 0 0 0-.09-.254 2 2 0 0 0-.24-.334l-3.3-4.124a2 2 0 0 1-.24-.334 1 1 0 0 1-.09-.254C3 7.75 3 7.647 3 7.44V5.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 4 4.04 4 4.6 4h8.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 4.76 15 5.04 15 5.6v1.839c0 .208 0 .312-.02.411a1 1 0 0 1-.09.254c-.046.09-.11.172-.24.334l-3.3 4.124a2 2 0 0 0-.24.334 1 1 0 0 0-.09.254c-.02.1-.02.203-.02.411V17z"
        }
      ></path>
    </svg>
  );
}

export default FilterListSvgrepoComSvgIcon;
/* prettier-ignore-end */
