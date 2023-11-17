import Accordion from "@dev/components/Accordion";
import { aboutNavData, File, infoData, NavItemProps, skillsData } from "./data";
import { useEffect } from "react";
import Icon from "@dev/components/Icon";
import Image from "next/image";
import Tooltip from "@dev/components/Tooltip";
import Link from "next/link";
import classUtil from "@dev/utils/class-util";
import PersonalInfo from "./info/page";
import { redirect } from "next/navigation";
import Layout from "./info/layout";

function TerminalSection() {
  return (
    <div className="">
      <h1>Terminal Section</h1>
    </div>
  );
}

function GamesSection() {
  return (
    <div className="">
      <h1>Games Section</h1>
    </div>
  );
}

function About() {
  return (
    <Layout>
      <PersonalInfo />
    </Layout>
  );
}

export default About;
