import React from "react";
import ai1 from "../../assets/robot-with-wrench.png";
import blink from "../../assets/blink-sm.png";

export default function HomeFeatures() {
  return (
    <>
      <section className="relative py-12 md:py-24 lg:py-32 bg-gray-900 bg-body overflow-hidden">
        <img
          className="hidden sm:block absolute top-0 right-1/2 -mr-64 xl:mr-24 mt-12 h-20 animate-spinStar"
          src={blink}
          alt="Blink"
        />
        <img
          className="hidden sm:block absolute bottom-0 right-0 mb-64 mr-8 h-20 animate-spinStar"
          src={blink}
          alt="Blink"
        />
        <div className="relative container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-2/5 xl:w-1/2 px-4 mb-8 lg:mb-0">
              <img
                className="block w-full max-w-md xl:max-w-lg"
                src={ai1}
                alt="Features bg"
              />
            </div>
            <div className="w-full lg:w-3/5 xl:w-1/2 px-4">
              <div className="relative overflow-hidden">
                <div className="hidden xs:block absolute z-10 top-0 left-0 w-full h-20 lg:h-48 bg-gradient-to-b from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90" />
                <div className="hidden xs:block absolute z-10 bottom-0 left-0 w-full h-20 lg:h-48 bg-gradient-to-t from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90" />
                <div className="slider">
                  <div className="slider-container">
                    <div className="slide flex mb-16 items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-indigo-700">
                        {/* Icon or image */}
                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                          AI-Powered Content Creation
                        </h4>
                        <p className="text-xl text-gray-400">
                          Masync AI revolutionizes the way you create content.
                          Our intelligent algorithms generate high-quality,
                          engaging material, saving you time and enhancing your
                          creative output.
                        </p>
                      </div>
                    </div>
                    <div className="slide flex mb-16 items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-yellow-700">
                        {/* Icon or image */}
                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                          Customizable for Your Needs
                        </h4>
                        <p className="text-xl text-gray-400">
                          Whether it’s blog posts, marketing copy, or creative
                          stories, Masync AI tailors content to your specific
                          needs, ensuring each piece is perfectly suited for its
                          purpose.
                        </p>
                      </div>
                    </div>
                    <div className="slide flex items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-green-700">
                        {/* Icon or image */}
                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                          Streamline Your Workflow
                        </h4>
                        <p className="text-xl text-gray-400">
                          Integrating seamlessly with various platforms, Masync
                          AI becomes a natural extension of your workflow,
                          making content generation more efficient than ever
                          before.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
