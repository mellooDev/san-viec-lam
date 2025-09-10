/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotificationIcon(props: NotificationIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 23"}
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
        d={
          "M1 13.686v-.236a3.9 3.9 0 0 1 .638-1.957A5.3 5.3 0 0 0 2.9 9.003c0-.717 0-1.445.062-2.162C3.281 3.388 6.641 1 9.959 1h.082c3.318 0 6.677 2.388 7.006 5.84.062.718 0 1.446.051 2.163.193.93.629 1.793 1.264 2.5.386.58.606 1.253.637 1.947v.226a3.88 3.88 0 0 1-.894 2.572 4.74 4.74 0 0 1-3.02 1.475 47 47 0 0 1-10.18 0 4.8 4.8 0 0 1-3.02-1.475A3.92 3.92 0 0 1 1 13.686"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M7 20c.623 1.092 1.537 1.798 2.54 1.963s2.014-.225 2.807-1.084c.244-.254.463-.55.653-.879"
        }
      ></path>
    </svg>
  );
}

export default NotificationIcon;
/* prettier-ignore-end */
