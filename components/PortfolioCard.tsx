"use client";
import { aesEncrypt } from "@/lib/aes";
import { usePageStore } from "@/store/page";
import { Portfolio } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  portfolio: Portfolio;
};

export function PortfolioCard({ portfolio }: Props) {
  const router = useRouter();
  const currentPage = usePageStore((state) => state.page);

  const onClickPortfolio = () => {
    const id = encodeURIComponent(aesEncrypt(portfolio.id.toString()));
    if (portfolio.id)
      // router.push(`/item?page=${currentPage}&id=${portfolio.id}`);
      router.push(`/item?page=${currentPage}&id=${id}`);
  };

  return (
    <article className="cursor-pointer group">
      <div className="lg:hidden flex flex-col items-center justify-center text-neutral-600 text-center text-sm py-1">
        <p>{portfolio.title}</p>
        <p>{portfolio.alias}</p>
      </div>
      <section className="relative h-[507px]" onClick={onClickPortfolio}>
        <Image
          alt="recent1"
          className="object-cover"
          fill
          src={portfolio.imageSrc}
        />
        <div className="hidden relative group-hover:block bg-black opacity-50 w-full h-full transform-gpu transition-transform" />
        <div className="hidden absolute group-hover:inset-0 group-hover:flex flex-col items-center justify-center text-white text-center text-sm">
          <p>{portfolio.title}</p>
          <p>{portfolio.alias}</p>
        </div>
      </section>
    </article>
  );
}
