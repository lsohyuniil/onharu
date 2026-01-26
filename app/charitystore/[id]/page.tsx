"use client";
import { useState } from "react";
import Image from "next/image";
import { Heading } from "./components/shared/heading";
import { Like } from "@/components/feature/StoreLike";
import { FramerSlide } from "./components/framerSlide";

export default function Detail() {
  const [isSlide, setisSlide] = useState(false);

  return (
    <section className="mt-section-sm-top md:mt-section-lg-top mb-section-sm-bottom md:mb-section-lg-bottom">
      <div className="wrapper">
        <article>
          <Heading title="스토어 네임">
            <Like isLiked />
          </Heading>
          <div className="mt-5 flex gap-3">
            <button
              className="border-main border"
              onClick={() => {
                setisSlide(false);
              }}
            >
              no slide
            </button>
            <button
              className="border-main border"
              onClick={() => {
                setisSlide(true);
              }}
            >
              use slide
            </button>
          </div>
          <div className="relative mt-8 h-[340px]">
            <h3 className="sr-only">매장 내부, 음식 사진이 슬라이드 형태로 나열되어 있습니다.</h3>
            {isSlide && <FramerSlide />}
            {!isSlide && (
              <div className="flex h-full gap-5">
                <div className="relative flex-1">
                  <Image
                    src={"/image/page/test-image.png"}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    className="pointer-events-none"
                  />
                </div>
                <div className="relative flex-1">
                  <Image
                    src={"/image/page/test-image.png"}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    className="pointer-events-none"
                  />
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
