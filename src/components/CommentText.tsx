import classUtil from "@dev/utils/class-util";
import React from "react";
import Hide from "./Hide";

type Props = {
  text: string[];
  className?: string;
  withNumber?: boolean;
};

function CommentText({ text, className, withNumber }: Props) {
  return (
    <div className={classUtil(className, "grid gap-4 md:block")}>
      <div className="flex">
        <div className=" overflow-hidden relative w-10 hidden sm:block">
          <div className="grid absolute">
            {Array.from(Array(text.length * 3).keys()).map((ov, i) => (
              <span key={i} className=" md:inline-block text-right hidden">
                {i}
              </span>
            ))}
          </div>
        </div>
        <div className=" overflow-hidden relative w-10 hidden sm:block">
          <div className="grid absolute">
            {Array.from(Array(text.length * 3).keys()).map((ov, i) => (
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
          {text.map((ov, i) => (
            <p key={i} className=" sm:pl-3">
              {ov} <br />
            </p>
          ))}
          <p className="-translate-x-4 sm:block hidden">{"*/"}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentText;
