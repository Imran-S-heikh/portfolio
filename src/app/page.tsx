import classUtil from "@dev/utils/class-util";
import { IconsId } from "@dev/assets/font-icons/icons";
// import { IconsId } from "../../assets/font-icons/icons";
// import Icon from "../../molecules/Icon.mole"
// import SnakeFood from '../../assets/svg/snake-food.svg';
// import style from "./page.module.scss";
import Icon from "@dev/components/Icon";
import Button from "@dev/components/Buttons";
// import Button from "../../molecules/Buttons.mole";

function CloseBtn({ className }: { className?: string }) {
  return (
    <button className={classUtil("close-btn rounded-full", className)}>
      <Icon className="text-black-base opacity-50" icon="close" />
    </button>
  );
}

function ControlBtn({
  icon,
  className,
}: {
  icon: IconsId;
  className?: string;
}) {
  return (
    <button className={classUtil("bg-black-base rounded-lg", className)}>
      <Icon className="text-white-light text-3xl" icon={icon} />
    </button>
  );
}

function Home() {
  return (
    <main className="flex flex-col flex-1">
      <div className="justify-center items-center flex-1 flex my-10">
        <div className="grid gap-[100px] grid-cols-1 xl:grid-cols-2 min-h-[50vh]">
          <div className="flex flex-col justify-around relative sm:p-0 p-4">
            <div className="">
              <h3 className="text-white-base mb-2">Hello! I am</h3>
              <h1 className="sm:text-6xl text-[11vw] text-white-base ">
                Imran Shaikh
              </h1>
              <div className="flex mt-5 items-center">
                <Icon
                  icon="chevron-right"
                  className="text-iris-base sm:text-2xl"
                />
                <p className="text-iris-base sm:text-3xl font-medium text-[5vw] ml-1">
                  Full Stack Web Developer
                </p>
              </div>
            </div>
            <div className="">
              {/* <p className="text-gray-light font-medium">{'//'} complete the game to continue</p> */}
              <p className="text-gray-light font-medium">
                {"//"} find my prodile on GitHub
              </p>

              <p className="space-x-2 mt-2 font-medium ">
                <span className="text-iris-base inline-block">const</span>
                <a
                  className="text-green-light inline-block"
                  href="https://github.com/Imran-S-heikh"
                >
                  githubLink
                </a>
                <span className="text-white-base inline-block">=</span>
                <a
                  className="text-orange-base"
                  href="https://github.com/Imran-S-heikh"
                >
                  "https://github/Imran-S-heikh"
                  <span className="text-iris-base">;</span>
                </a>
              </p>
            </div>
            <div className="absolute top-1/3 left-1/3 w-[50%] h-[450px] bg-iris-base opacity-20 blur-[174px] rotate-[13.51deg]  -z-0 xl:hidden"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[50%] h-[450px] bg-green-light opacity-20 blur-[174px] rotate-[13.51deg] -z-0 xl:hidden"></div>
          </div>

          <div className="relative hidden xl:block">
            <div className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] bg-green-light opacity-40 blur-[174px] rotate-[13.51deg] -z-0"></div>
            <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-iris-base opacity-40 blur-[174px] rotate-[13.51deg]  -z-0"></div>

            <div className="w-[510px] h-[475px] game-container relative z-10 p-8 grid grid-cols-7 gap-6">
              <CloseBtn className="absolute top-2 left-2" />
              <CloseBtn className="absolute bottom-2 left-2" />
              <CloseBtn className="absolute top-2 right-2" />
              <CloseBtn className="absolute bottom-2 right-2" />

              <div className="bg-blue-base/80 col-span-4 rounded-lg shadow-inset-sm relative">
                <Button.Primary
                  label="start-game"
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                />
              </div>

              <div className="flex flex-col col-span-3">
                <div className="flex-1">
                  <div className="bg-blue-base/30 p-3 rounded-lg">
                    <p className="text-white-base text-sm">
                      {"//"} use keyboard
                    </p>
                    <p className="text-white-base text-sm">
                      {"//"} arrows to play
                    </p>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <ControlBtn icon="arrow-up" className="col-start-2" />
                      <ControlBtn icon="arrow-left" className="col-start-1" />
                      <ControlBtn icon="arrow-down" />
                      <ControlBtn icon="arrow-right" />
                    </div>
                  </div>

                  <div className="mt-5 ml-3">
                    <p className="text-white-base text-sm">{"//"} food left</p>
                    <div className="grid grid-cols-5 gap-1 w-max mt-2">
                      {/* <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood className="opacity-50" />
                                            <SnakeFood className="opacity-50" />
                                            <SnakeFood className="opacity-50" /> */}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <Button.Ghost label="skip" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
