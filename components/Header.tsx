"use client";

import Navigator from "./Navigator";
import { Logo } from "./Logo";
import { FiInstagram } from "react-icons/fi";
import { RiBloggerLine } from "react-icons/ri";
import { RiKakaoTalkLine } from "react-icons/ri";
import { IconButton } from "./IconButton";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// height-[84px]
export function Header({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const onClickInstagram = () => {
    console.log("onClickInstagram");
  };

  const onClickBlog = () => {
    console.log("onClickBlog");
  };

  const onClickKakaotalk = () => {
    console.log("onClickKakaotalk");
  };

  return (
    // <header className="h-21 bg-white flex flex-col">
    <header className="relative w-full h-full">
      {/* bg */}
      <section className="absolute top-0 w-full">
        <div
          className={cn(
            "bg-white w-full lg:h-16 h-24",
            isHome && "bg-neutral-200"
          )}
        ></div>
      </section>
      {/* sticky: 상단 고정 */}
      <section className="sticky top-0 left-0 z-10">
        {/* mode: moblie */}
        <div className="lg:hidden flex flex-col items-center">
          <article className="flex flex-row items-center justify-between w-full h-12 px-4">
            <Logo />
            <article className="flex flex-row items-center gap-1">
              <IconButton
                icon={<FiInstagram size={24} />}
                onClickIcon={onClickInstagram}
              />
              <IconButton
                icon={<RiBloggerLine size={24} />}
                onClickIcon={onClickBlog}
              />
              <IconButton
                icon={<RiKakaoTalkLine size={24} />}
                onClickIcon={onClickKakaotalk}
              />
            </article>
          </article>
          <article className="w-full h-12">
            <Navigator />
          </article>
        </div>

        {/* mode: pc */}
        <div className="hidden lg:flex flex-row items-center px-10">
          <article className="w-42">
            <Logo />
          </article>
          <article className="w-full h-16 flex justify-center items-center">
            <Navigator />
          </article>

          <article className="flex flex-row items-center gap-2">
            <IconButton
              icon={<FiInstagram size={24} />}
              onClickIcon={onClickInstagram}
            />
            <IconButton
              icon={<RiBloggerLine size={24} />}
              onClickIcon={onClickBlog}
            />
            <IconButton
              icon={<RiKakaoTalkLine size={24} />}
              onClickIcon={onClickKakaotalk}
            />
          </article>
        </div>
      </section>

      {/* page */}
      {/* <section className="absolute w-full"> */}
      <section className="absolute w-full top-0">{children}</section>
    </header>
  );
}
