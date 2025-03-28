import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type Props = {
  photos?: string[];
};

export function ItemCarousel({ photos }: Props) {
  return (
    <div className="w-full">
      <Carousel className="relative">
        <CarouselContent>
          {photos?.map((photo, index) => {
            return (
              <CarouselItem key={index}>
                <div className="relative h-[580px]">
                  <Image
                    src={photo}
                    alt="photo"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="absolute left-8" />
        <CarouselNext className="absolute right-8" />
      </Carousel>
    </div>
  );
}
