import classUtil from "@dev/utils/class-util";
import React, { Fragment, ReactNode } from "react";
import Hide from "./Hide";

type Props = {
  text: string[];
  className?: string;
};

export function Comment({
  children,
  className,
  length = 0,
}: {
  children: ReactNode;
  className?: string;
  length: number;
}) {
  return (
    <div className={classUtil(className, "grid gap-4 md:block")}>
      <div className="flex">
        <div className=" overflow-hidden relative w-10 hidden sm:block">
          <div className="grid absolute">
            {Array.from(Array(Math.round(length * 3)).keys()).map((ov, i) => (
              <span key={i} className=" md:inline-block text-right hidden">
                {i}
              </span>
            ))}
          </div>
        </div>
        <div className=" overflow-hidden relative w-10 hidden sm:block">
          <div className="grid absolute">
            {Array.from(Array(Math.round(length * 3)).keys()).map((ov, i) => (
              <span
                key={i}
                className={classUtil(
                  "hidden sm:inline-block",
                  !i && "opacity-0"
                )}
              >
                &nbsp;*&nbsp;
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="-translate-x-7 sm:block hidden">{"/**"}</p>
          {children}
          <p className="-translate-x-4 sm:block hidden">{"*/"}</p>
        </div>
      </div>
    </div>
  );
}

function CommentText({ text, className }: Props) {
  return (
    <Comment className={className} length={text.length}>
      <Fragment>
        {text.map((ov, i) => (
          <p key={i} className=" sm:pl-3">
            {ov} <br />
          </p>
        ))}
      </Fragment>
    </Comment>
  );
}

export default CommentText;
