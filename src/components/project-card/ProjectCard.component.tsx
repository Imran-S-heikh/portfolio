import clsx from "clsx";
import React from 'react'

type Props = {
  name: string,
  commits: number,
  overviews: string[],
  link: string,
  className?: string
}

function ProjectCard({ name, commits, overviews, link,className }: Props) {
  return (
    <div className={clsx(className,"bg-black-base border border-danube-dark px-5 py-3 rounded-md w-[130%] ")}>
      <div className="flex justify-between items-center">
        <h4 className="text-yellow-base text-lg font-semibold">{name}</h4>
        <p className="text-white-muted">{commits} commits</p>
      </div>

      <div className="bg-black-deep pb-5 rounded-md border border-black-dark mt-3 text-white-muted text-ld font-medium leading-5">
        <p className="px-5 py-3">
          {'/**'}
          {overviews.map(ov => (
            <p>&nbsp;* {ov}</p>
          ))}
          &nbsp;{'*/'}
        </p>

        <a href={link} target="_blank" rel="noreferrer" className="my-5 cursor-pointer block hover:bg-yellow-base transition-colors duration-150 active:opacity-50 bg-yellow-dark w-full  text-left px-5 py-1">
          <span className="text-black-base text-md font-medium">see the project</span>
        </a>
      </div>

    </div>
  )
}

export default ProjectCard;