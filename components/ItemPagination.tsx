"use client";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { usePageStore } from "@/store/page";

type Props = {
  totalItems: number; // 데이터 총 개수
  itemCountPerPage: number; // 페이지 당 보여줄 데이터 개수
  pageCount: number; // 보여줄 페이지 개수
};

export function ItemPagination({
  totalItems,
  itemCountPerPage,
  pageCount,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const setPage = usePageStore((state) => state.setPage);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const totalPages = Math.ceil(totalItems / itemCountPerPage); // 총 페이지 개수
  const [start, setStart] = useState(1); //  시작페이지
  const noPrev = start === 1; // 이전 페이지가 없는 경우
  const noNext = start + pageCount - 1 >= totalPages; // 다음 페이지가 없는 경우

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
    setPage(currentPage);
  }, [currentPage, pageCount, start, setPage]);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {/* <PaginationItem className={`${currentPage === 1 && "hidden"}`}> */}
          <PaginationItem className={`${noPrev && "hidden"}`}>
            <PaginationPrevious href={createPageURL(currentPage - 1)} />
          </PaginationItem>

          {[...Array(pageCount)].map((_, i) => (
            <div key={i}>
              {start + i <= totalPages && (
                <PaginationItem>
                  <PaginationLink
                    href={createPageURL(start + i)}
                    isActive={currentPage === start + i}
                  >
                    {start + i}
                  </PaginationLink>
                </PaginationItem>
              )}
            </div>
          ))}

          <PaginationItem className={`${noNext && "hidden"}`}>
            <PaginationNext href={createPageURL(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
