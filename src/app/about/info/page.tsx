import CommentText from "@dev/components/CommentText";

function PersonalInfo() {
  return (
    <div className="mt-5 ml-2 sm:ml-10">
      <CommentText
        className="text-gray-light text-lg leading-7"
        withNumber
        text={[
          "Hi there, I'm Imran Shaikh, a passionate ",
          "Full Stack Web Developer hailing from the ",
          "vibrant city of Khulna, Bangladesh.",
          "",
          "In the realm of web development, I find my true calling.",
          " Armed with TypeScript, I navigate the digital landscapes,",
          "crafting solutions and bringing new products to life.",
          "While the web serves as my battlefield, I'm not afraid to explore beyond, ",
          "dabbling in technologies like Rust, React Native and Blockchain.",
          "",
          "One of the things that keeps my professional journey exciting is ",
          "my eagerness to embrace new technologies. The ever-evolving ",
          "tech world is a playground, and I am always ready to dive into ",
          "the latest innovations.",
          "",
          "I thrive on challenges, solving problems,",
          "and turning ideas into tangible, functional products. ",
          "",
          "Thank you for visiting my portfolio!",
          // "If you are looking for a dynamic Full Stack Web Developer who ",
          // "is not afraid to push boundaries and embrace new technologies, ",
          // "I'm ready to bring my skills and passion to your team.",
        ]}
      />
    </div>
  );
}

export default PersonalInfo;
