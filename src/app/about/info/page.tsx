import CommentText from "@dev/components/CommentText";

function PersonalInfo() {
  return (
    <div className="mt-5 ml-2 sm:ml-10">
      <CommentText
        className="text-gray-light text-lg leading-7"
        withNumber
        text={[
          "About me",
          "I have 5 years of еxperience in web",
          "development lorem ipsum dolor sit amet,",
          "consectetur adipiscing elit, sed do eiusmod",
          "tempor incididunt ut labore et dolore",
          "magna aliqua. Ut enim ad minim veniam,",
          "quis nostrud exercitation ullamco laboris",
          "nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in",
          "",
          "Duis aute irure dolor in reprehenderit in",
          "voluptate velit esse cillum dolore eu fugiat",
          "nulla pariatur. Excepteur sint occaecat",
          "officia deserunt mollit anim id est laborum.",
        ]}
      />
    </div>
  );
}

export default PersonalInfo;
