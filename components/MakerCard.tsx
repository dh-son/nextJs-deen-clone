import Image from "next/image";

type Props = {
  imageSrc: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  role: string;
  name: string;
};
export function MakerCard({
  imageSrc,
  desc1,
  desc2,
  desc3,
  desc4,
  role,
  name,
}: Props) {
  return (
    <section>
      <div className="grid grid-cols-2 grid-rows-1 p-5">
        <div className="p-2 flex justify-center">
          <div className="relative w-[70px] h-[150px]">
            <Image alt="keyA" className="object-cover" fill src={imageSrc} />
          </div>
        </div>

        <div className="mt-2 mb-2 px-2">
          <div className="text-red-950">
            <h6 className="mt-2.5">
              <span className="text-base mt-2.5">{desc1}</span>
            </h6>
            <h6 className=" mt-2.5">
              <span className="text-base">{desc2}</span>
            </h6>
            <h6 className="mt-2.5">
              <span className="text-base">{desc3}</span>
            </h6>
            <h6 className="mt-2.5">
              <span className="text-base">{desc4}</span>
            </h6>
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="border mt-2 mb-2"></div>
      </div>
      <div className="mt-2 mb-2">
        <p className="text-center">
          <strong className="text-red-950">{name}</strong>
          <br></br>
          <span className="text-neutral-400">{role}</span>
        </p>
      </div>
    </section>
  );
}
