import { Footer } from "@/components/Footer";
import { ItemPagination } from "@/components/ItemPagination";
import { PortfolioList } from "@/components/PortfolioList";

import { dummyAllPortfolioList } from "@/lib/dummyData";

// http://localhost:3000/portfolio?page=2&query=son
// http://localhost:3000/portfolio?page=1
export default async function Portfolio(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  console.log("query + currentPage: " + query + " / " + currentPage);

  // Pagenation 테스트를 위해 임시로 데이터 쪼갬
  let portfolioList = [...dummyAllPortfolioList];
  if (currentPage === 1) {
    portfolioList = portfolioList.slice(0, 2);
  } else {
    portfolioList = portfolioList.slice(2, 3);
  }

  return (
    <section className="mt-20 w-full">
      <div className="mx-auto max-w-[1180px]">
        <article className="grid grid-cols-1 grid-rows-1">
          <div className="p-5">
            <p>
              {/* text-26px */}
              <span className="text-red-950 text-3xl">PORTFOLIO</span>
            </p>
          </div>
        </article>
        <article className="p-5">
          <PortfolioList portfolioList={portfolioList} />
        </article>
        <article>
          <ItemPagination totalItems={3} itemCountPerPage={6} pageCount={10} />
        </article>
        <div className="mt-5"></div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </section>
  );
}
