import Accordion, {
  AccordionBody,
  AccordionHeader,
} from "@dev/components/Accordion";
import Icon from "@dev/components/Icon";
import Image from "next/image";
import { File, infoData, skillsData } from "../data";
import { ReactElement } from "react";

function Layout({ children }: { children: ReactElement }) {
  return (
    <main className=" h-full flex">
      <div className="w-full lg:w-60 border-gray-base lg:border-r flex h-full">
        <div
          className="text-gray-light flex-1 overflow-y-auto"
          style={{ maxHeight: "calc( 100vh - 190px)" }}
        >
          <div className="">
            <div className="">
              <Accordion defaultOpen>
                <AccordionHeader
                  label="persoanl-info"
                  // icon="arrow-right"
                  className="h-10 border-b border-gray-base"
                />
                <AccordionBody className="my-3">
                  {infoData.map((item, i) => (
                    <Accordion key={i} defaultOpen={item.open}>
                      <AccordionHeader
                        folder
                        label={item.name}
                        folderClass={item.color}
                      />
                      <AccordionBody>
                        {item.children.map((citem, index) => (
                          <div
                            key={`${i}-${index}`}
                            className="ml-6 my-1 flex items-center gap-2"
                          >
                            <Icon
                              className="w-4 object-fit"
                              icon={citem.icon}
                            />
                            <h1 className="text-white-muted text-md">
                              {citem.name.split(" ")[0]}
                            </h1>
                          </div>
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
                    <Accordion key={i} defaultOpen={item.open}>
                      <AccordionHeader
                        folder
                        label={item.name}
                        folderClass={item.color}
                      />
                      <AccordionBody>
                        {item.children.map((citem, index) => (
                          <div
                            key={`${i}-${index}`}
                            className="ml-6 my-1 flex items-center gap-2"
                          >
                            <Image
                              width={10}
                              height={10}
                              className="w-4 object-fit"
                              src={(citem as File).image}
                              alt={citem.name}
                            />
                            <h1 className="text-white-muted text-md">
                              {citem.name.split(" ")[0]}
                            </h1>
                          </div>
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
                    <h1 className="text-white-muted text-md">+8801824182**</h1>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="">{children}</div>
    </main>
  );
}

export default Layout;
