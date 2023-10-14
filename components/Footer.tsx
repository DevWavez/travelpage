import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <a href="/" className="mb-10">
            <Image
              src="/hilink-logo.svg"
              alt="company"
              width={74}
              height={29}
            />
          </a>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <h4 className="bold-18 whitespace-nowrap">Learn More</h4>
              <ul className="regular-14 flex flex-col gap-4 text-gray-300">
                <a href="/">About Hilink</a>
                <a href="/">Press Releases</a>
                <a href="/">Enviroment</a>
                <a href="/">Jobs</a>
                <a href="/">Privacy Police</a>
                <a href="/">Contact Us</a>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="bold-18 whitespace-nowrap">Our Community</h4>
              <ul className="regular-14 flex flex-col gap-4 text-gray-300">
                <a href="/">Climbing</a>
                <a href="/">Hiking hilink</a>
                <a href="/">hilink kinthill</a>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h4 className="bold-18 whitespace-nowrap">Contact Us</h4>
                <a href="/" className="flex gap-4 md:flex-col lg:flex-row">
                  <p className="whitespace-nowrap">Admin Office:</p>
                  <p className="medium-14 whitespace-nowrap text-blue-700">
                    123-456-789
                  </p>
                </a>
                <a href="">
                  <p className="whitespace-nowrap">Email Office</p>
                  <p className="medium-14 whitespace-nowrap text-blue-700">
                    hilink@hilink.info
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h4 className="bold-18 whitespace-nowrap">Socialmedia</h4>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  <a href="/">
                    <Image
                      src="/facebook.svg"
                      alt="facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="/">
                    <Image
                      src="/instagram.svg"
                      alt="instagram"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="/">
                    <Image
                      src="/twitter.svg"
                      alt="twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="/">
                    <Image
                      src="/youtube.svg"
                      alt="youtube"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="/">
                    <Image
                      src="wordpress.svg"
                      alt="wordpress"
                      width={24}
                      height={24}
                    />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20"></div>
        <p>2023 HiLink | all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
