import Layout from "./[...slug]/layout";
import CommentText from "@dev/components/CommentText";
import { defaultContent } from "./data";

function About() {
  return (
    <Layout>
      <div className="mt-5 ml-2 sm:ml-10">
        <CommentText
          className="text-gray-light text-lg leading-7"
          withNumber
          text={defaultContent}
        />
      </div>
    </Layout>
  );
}

export default About;
