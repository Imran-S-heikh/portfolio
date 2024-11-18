"use client";

import Accordion, {
  AccordionBody,
  AccordionHeader,
} from "@dev/components/Accordion";
import {
  File,
  FileIcon,
  defaultContent,
  infoData,
  skillsData,
} from "../../../data";
import LinkItem from "./LinkItem";
import Image from "next/image";
import Icon from "@dev/components/Icon";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export function getMatching(slug?: string) {
  const data = {
    info: infoData,
    skills: skillsData,
  };

  if (slug) {
    for (const [key, items] of Object.entries(data)) {
      for (const entry of items) {
        for (const item of entry.children as FileIcon[]) {
          if ((item as FileIcon).path === slug || item.name === slug) {
            const route = [
              key,
              entry.name,
              (item as FileIcon).path || item.name,
            ];
            return {
              route,
              content: item.content,
              title: item.name,
            };
          }
        }
      }
    }
  }

  return {
    route: [],
    content: defaultContent,
    title: "About",
  };
}

function Sidebar() {
  const params = useParams();
  const slug = params.slug?.at(-1);
  const { route } = getMatching(slug);
  return (
    <div className="">
      <Accordion defaultOpen>
        <AccordionHeader
          label="info"
          icon="arrow-right"
          className="h-10 border-b border-gray-base"
        />
        <AccordionBody className="my-3">
          {infoData.map((item, i) => (
            <Accordion key={i} defaultOpen={route.includes(item.name)}>
              <AccordionHeader
                folder
                label={item.name}
                folderClass={item.color}
              />
              <AccordionBody>
                {item.children.map((citem, index) => (
                  <LinkItem
                    key={`${i}-${index}`}
                    icon={citem.icon}
                    name={citem.name}
                    // TODO: Make Path a required field
                    path={citem.path || citem.name}
                  />
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion defaultOpen>
        <AccordionHeader
          label="skills"
          icon="arrow-right"
          className="h-10 border-y border-gray-base -mt-px"
        />
        <AccordionBody className="my-3">
          {skillsData.map((item, i) => (
            <Accordion key={i} defaultOpen={route.includes(item.name)}>
              <AccordionHeader
                folder
                label={item.name}
                folderClass={item.color}
              />
              <AccordionBody>
                {item.children.map((citem, index) => (
                  <LinkItem
                    key={`${i}-${index}`}
                    name={citem.name}
                    image={(citem as File).image}
                    path={(citem as File).path || citem.name}
                  />
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion defaultOpen>
        <AccordionHeader
          label="contacts "
          icon="arrow-right"
          className="h-10 border-y border-gray-base -mt-px"
        />
        <AccordionBody className="my-3">
          <div className="ml-6 my-1 flex items-center gap-2">
            <Icon className="w-4 object-fit" icon="mail" />
            <h1 className="text-white-muted text-md">
              <a href="mailto:imran.shaikh.contact@gmail.com">
                contac@gmail.com
              </a>
            </h1>
          </div>

          <div className="ml-6 my-1 flex items-center gap-2">
            <Icon className="w-4 object-fit" icon="phone" />
            <h1 className="text-white-muted text-md">+880182******</h1>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default Sidebar;
