import classUtil from "@dev/utils/class-util";
import React from "react";
import Hide from "./Hide";

type Props = {
  text: string[];
  className?: string;
  withNumber?: boolean;
};

function NumberItem({
  isEnabled,
  index,
}: {
  isEnabled: boolean;
  index: number;
}) {
  return (
    <Hide open={isEnabled}>
      <span className="w-5 md:inline-block text-right hidden">{index}</span>
      <span className="w-8 md:inline-block hidden"></span>
    </Hide>
  );
}

function CommentText({ text, className, withNumber }: Props) {
  return (
    <div className={classUtil(className,"grid gap-4 md:block")}>
      <p>
        <NumberItem isEnabled={!!withNumber} index={0} />
        <span>{"/**"}</span>
      </p>
      {text.map((ov, i) => (
        <p key={i}>
          <NumberItem isEnabled={!!withNumber} index={i + 1} />
          <span className="">&nbsp;* {ov}</span>
        </p>
      ))}
      <p>
        <NumberItem isEnabled={!!withNumber} index={text.length + 1} />
        <span>{"/**"}</span>
      </p>
    </div>
  );
}

export default CommentText;
