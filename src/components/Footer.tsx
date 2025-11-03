import classUtil from "@dev/utils/class-util";
import { IconsId } from "../assets/font-icons/icons";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

interface SocialLinkProps {
  icon: IconsId;
  link: string;
  className?: string;
}

function SocialLink({ icon, link, className }: SocialLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={classUtil(
        className,
        "border-r border-gray-base flex items-center px-4 group"
      )}
    >
      <Icon
        className="text-lg text-[#273849] group-hover:text-gray-light transition duration-100"
        icon={icon}
      />
    </a>
  );
}

function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={classUtil(
        "border-gray-base border-t flex justify-between items-center",
        className
      )}
    >
      <div className="flex md:w-80 w-full">
        <p className="border-r border-gray-base text-gray-light font-medium py-3 pr-2 flex-1 pl-5">
          find me in:
        </p>
        <SocialLink icon="github" link="https://github.com/Imran-S-heikh" />
        <SocialLink
          icon="linkedin"
          link="https://linkedin.com/in/itsimrandev"
        />
        <SocialLink
          className="md:border-r  border-r-0"
          icon="twitter"
          link="https://twitter.com/imrandev"
        />
      </div>

      <div className="h-full md:flex hidden">
        <Tooltip arrowIcon="arrow-down" label="Designed By Yanka Darelova">
          <a
            href="https://www.linkedin.com/in/yanka-darelova"
            target="_blank"
            rel="noreferrer"
            className="flex items-center border-l border-gray-base px-6"
          >
            <span className="text-gray-light font-medium mr-2">
              @yanka-darelova
            </span>
            <Icon icon="figma" className="text-gray-light text-lg" />
          </a>
        </Tooltip>
        <Tooltip
          arrowIcon="arrow-down"
          placement="bottom"
          label="Developed By Imran Shaikh"
        >
          <a
            href="https://github.com/Imran-S-heikh"
            target="_blank"
            rel="noreferrer"
            className="flex items-center border-l border-gray-base px-6"
          >
            <span className="text-gray-light font-medium mr-2">
              @imran-s-heikh
            </span>
            <Icon icon="github" className="text-gray-light text-lg" />
          </a>
        </Tooltip>
      </div>
    </footer>
  );
}

export default Footer;
