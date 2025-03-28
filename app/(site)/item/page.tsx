import Image from "next/image";
import { getPortfoliosById } from "@/lib/dummyData";
import { ItemCarousel } from "@/components/ItemCarousel";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Item({
  searchParams,
}: {
  searchParams: Promise<{ page: string; id: string }>;
}) {
  const { page, id } = await searchParams;
  const currentId = Number(id);
  const item = await getPortfoliosById(currentId);
  const prevItem = await getPortfoliosById(currentId - 1);
  const nextItem = await getPortfoliosById(currentId + 1);

  return (
    <section className="w-full">
      <div className="lg:mt-16 mt-23 relative h-[450px]">
        <Image
          src={item.thumbnail}
          alt="thumbnail"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="mt-10"></div>
      <div className="mx-auto max-w-[1180px]">
        <article className="p-5">
          <table className="text-red-900 text-sm w-full">
            <tbody>
              <tr>
                <td className="w-1/4">
                  <strong>
                    NAME <br />
                    LOCATION <br />
                    ROLE <br />
                    CATEGORY
                    <br />
                    AREA
                  </strong>
                </td>
                <td className="w-3/4">
                  {item.name}
                  <br />
                  {item.location}
                  <br />
                  {item.role}
                  <br />
                  {item.category}
                  <br />
                  {item.area}
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className="text-red-900 text-sm p-5">
          <p className="mb-2.5">
            <br />
          </p>
          {item.descriptions?.map((desc, index) => {
            return (
              <p key={index} className="mb-2.5">
                {desc}
              </p>
            );
          })}
        </article>

        <article className="my-5 p-5">
          <ItemCarousel photos={item.photos} />
        </article>

        <article className="mt-8 text-red-900 text-sm">
          {!prevItem && nextItem && (
            <div className="w-full flex flex-row items-center px-3 py-3 border-b">
              <GoChevronUp size={24} color="oklch(0.396 0.141 25.723)" />
              <div className="pl-8">
                <Link href={`/item/?id=${nextItem.id}`}>
                  {nextItem.title} | {nextItem.name}
                </Link>
              </div>
            </div>
          )}

          {prevItem && !nextItem && (
            <div className="w-full flex flex-row items-center px-3 py-3 border-b">
              <GoChevronDown size={24} color="oklch(0.396 0.141 25.723)" />
              <div className="pl-8">
                <Link href={`/item/?id=${prevItem.id}`}>
                  {prevItem.title} | {prevItem.name}
                </Link>
              </div>
            </div>
          )}

          {prevItem &&
            nextItem && (
              <div className="w-full flex flex-row items-center px-3 py-3 border-y">
                <GoChevronUp size={24} color="oklch(0.396 0.141 25.723)" />
                <div className="pl-8">
                  <Link href={`/item/?id=${nextItem.id}`}>
                    {nextItem.title} | {nextItem.name}
                  </Link>
                </div>
              </div>
            ) && (
              <div className="w-full flex flex-row items-center px-3 py-3 border-b">
                <GoChevronDown size={24} color="oklch(0.396 0.141 25.723)" />
                <div className="pl-8">
                  <Link href={`/item/?id=${prevItem.id}`}>
                    {prevItem.title} | {prevItem.name}
                  </Link>
                </div>
              </div>
            )}
        </article>

        <article className="pt-2.5">
          <Button className="bg-red-900 text-white w-20 cursor-pointer hover:bg-red-900 hover:opacity-45">
            <Link href={`/portfolio/?page=${page}`}>목록</Link>
          </Button>
        </article>

        <article className="mt-8" />
      </div>
    </section>
  );
}
