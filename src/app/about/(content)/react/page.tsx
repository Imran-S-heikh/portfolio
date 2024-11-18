import { Comment } from "@dev/components/CommentText";
import Divider from "@dev/components/typography/Divider";
import { Li, Ul } from "@dev/components/typography/List";
import Paragraph from "@dev/components/typography/Paragraph";
import Subtitle from "@dev/components/typography/Subtitle";
import Title from "@dev/components/typography/Title";
import { cn } from "@dev/utils/class-util";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import cover from "./opengraph-image.png";

export const metadata: Metadata = {
  title: "React Specialist: Crafting Scalable, Pixel-Perfect Web Applications",
  description:
    "Imran Shaikh, a React Specialist, delivers scalable and performance-optimized web applications with pixel-perfect designs. Hire a React expert today for your project",
};

function Page() {
  cn;
  return (
    <main className="text-gray-light max-w-2xl mx-auto">
      <section className="">
        <Title className="">React Specialist for Modern Web Applications</Title>
        <Subtitle heading>
          Building Dynamic, Scalable, and User-Friendly Interfaces
        </Subtitle>
        <Image
          src={cover}
          width={1200}
          height={600}
          alt="React Specialist: Crafting Scalable, Pixel-Perfect Web Applications"
        />
        <Paragraph>
          In today’s digital landscape, React.js has become a go-to solution for
          creating fast, dynamic, and interactive web applications. As a
          seasoned React Specialist, I’m dedicated to crafting intuitive and
          high-performing user interfaces that not only meet but exceed client
          expectations.
        </Paragraph>
      </section>

      <Divider />
      <section>
        <Subtitle>About Me</Subtitle>
        <Paragraph>
          Hello! I’m Imran Shaikh, a passionate Full Stack Developer with a
          strong focus on React.js. Over the years, I’ve worked on a wide range
          of projects, from simple website to complex web applications, honing
          my skills in building scalable and visually stunning interfaces.
        </Paragraph>
        <Paragraph>
          My expertise lies in bridging design with functionality. I bring Figma
          designs to life with pixel-perfect precision while ensuring the
          underlying codebase is clean, efficient, and easy to maintain.
        </Paragraph>
      </section>

      <Divider />

      <section>
        <Subtitle>Why Choose a React Specialist?</Subtitle>
        <Paragraph>
          Choosing a React Specialist ensures your application is built with
          expert precision and cutting-edge techniques. Here’s what I bring to
          the table:
        </Paragraph>
        <Ul>
          <Li>
            <b>Custom Solutions:</b> Tailored designs and functionality to match
            your unique vision.
          </Li>
          <Li>
            <b>Optimized Performance:</b> Faster load times and responsive
            applications using tools like lazy loading and code splitting.
          </Li>
          <Li>
            <b>Pixel-Perfect Designs:</b> Seamless Figma-to-code implementation
            for a flawless user experience.
          </Li>
          <Li>
            <b>Seamless State Management:</b> Expertise with Redux, Recoil, and
            React Query for smooth data flow and user interaction.
          </Li>
        </Ul>
      </section>
      <Divider />

      <section>
        <Subtitle>My Approach to React Development</Subtitle>
        <Paragraph>
          My approach to React development is rooted in precision,
          collaboration, and scalability. Here’s how I ensure success in every
          project:
        </Paragraph>
        <Ul>
          <Li>
            <b>Dynamic, Reusable Components:</b> I build modular, reusable
            components that simplify development and maintenance while speeding
            up delivery.
          </Li>
          <Li>
            <b>User-Centric Design:</b> Every design decision prioritizes the
            end user, ensuring intuitive and enjoyable experiences.
          </Li>
          <Li>
            <b>Rigorous Testing:</b> From unit tests to integration tests, I
            ensure that every feature works seamlessly under all conditions.
          </Li>
          <Li>
            <b>Collaborative Workflow:</b> I actively involve clients and teams
            at every stage, ensuring the final product reflects their vision.
          </Li>
        </Ul>
      </section>
      <Divider />
      <section>
        <Subtitle>Explore My Work</Subtitle>
        <Paragraph>
          Looking to see React in action? Check out my{" "}
          <Link
            href="/projects?topic=react&topic=front-end&topic=nextjs"
            className="underline"
          >
            Projects
          </Link>{" "}
          Page to explore some of the applications I’ve built. From dynamic
          interfaces to scalable web apps, my portfolio highlights the
          versatility and depth of my React expertise.
        </Paragraph>
      </section>
      <Divider />
      <section>
        <Subtitle>
          Why React is the Present & Future of Web Development
        </Subtitle>
        <Paragraph>
          React’s component-based architecture and virtual DOM make it the ideal
          choice for creating modern applications. It’s fast, efficient, and
          highly adaptable. By working with a React Specialist, you can ensure
          your project is built using the latest best practices and
          technologies.
        </Paragraph>
      </section>
      <Divider />
      <section className="mb-5">
        <Subtitle>Let’s Work Together</Subtitle>
        <Paragraph>
          If you’re looking for a React Specialist who combines technical
          expertise with a deep understanding of user-centric design, I’d love
          to help you bring your project to life. From planning and prototyping
          to development and deployment, I’ll ensure your web application is
          everything you envisioned—and more.
        </Paragraph>
        <Paragraph>
          <Link href="/contact" className="underline">
            Contact Me
          </Link>{" "}
          to discuss your project or explore more of my work.
        </Paragraph>
      </section>
    </main>
  );
}

export default Page;
