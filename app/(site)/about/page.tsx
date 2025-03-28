import { Footer } from "@/components/Footer";
import { MakerCard } from "@/components/MakerCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import Image from "next/image";
import { getPortfoliosById } from "./../../../lib/dummyData";

export default function About() {
  const portfolio1 = getPortfoliosById(3);
  const portfolio2 = getPortfoliosById(2);
  const portfolio3 = getPortfoliosById(1);

  return (
    <div className="w-full">
      <div className="lg:mt-16 mt-23">
        <Image
          src={"/about-1.gif"}
          alt="aboutImage"
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>

      <div className="mt-18"></div>

      {/* mx-auto max-w-[1180px]: screenWidth > 1180px -> margin = screenWidth - 1180px */}
      <div className="mx-auto max-w-[1180px]">
        <section className="grid grid-cols-1 grid-rows-1">
          <div className="p-5">
            <p>
              {/* text-26px */}
              <span className="text-red-950 text-3xl">SERVICE</span>
            </p>
            <p>
              {/* text-16 */}
              <span className="text-lg">DEEN의 세가지 서비스</span>
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 grid-rows-1">
          <div>
            <div className="p-5">
              <div className="flex flex-col items-center bg-neutral-100">
                {/* text-36 */}
                <div className="text-red-950 text-4xl font-bold mt-5">
                  브랜딩
                </div>
                {/* text-16 */}
                <div className="mt-4 text-base font-bold mb-2.5">
                  시장조사를 통해 포착하는 소비자의 NEEDs
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-col items-center text-neutral-600 text-base">
                <span className="mt-5">유리한 고지를 선점하는 브랜드 전략</span>
                <span>취향을 읽어 고객을 끌어들이는 공간</span>
                <span className="mb-5">브랜드를 살리는 마케팅 전략</span>
              </div>
            </div>
          </div>
          <div>
            <div className="p-5">
              <div className="flex flex-col items-center bg-neutral-100">
                {/* text-36 */}
                <div className="text-red-950 text-4xl font-bold mt-5">설계</div>
                {/* text-16 */}
                <div className="mt-4 text-base font-bold mb-2.5">
                  공간의 품격은 디테일과 집요함에서
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-col items-center text-neutral-600 text-base">
                <span className="mt-5">
                  주어진 환경을 효율적으로 살리는 설계
                </span>
                <span>색체, 조명, 가구가 어우러지는 설계</span>
                <span className="mb-5">
                  운영비는 줄이고, 매출은 늘리는 설계
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="p-5">
              <div className="flex flex-col items-center bg-neutral-100">
                {/* text-36 */}
                <div className="text-red-950 text-4xl font-bold mt-5">시공</div>
                {/* text-16 */}
                <div className="mt-4 text-base font-bold mb-2.5">
                  약속된 시간 안에, 믿을 수 있는 결과물
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-col items-center text-neutral-600 text-base">
                <span className="mt-5">
                  영업을 지속하며 공사를 진행하는 경우
                </span>
                <span>브랜딩과 설계 의도가 적용되는 시공 감리</span>
                <span className="mb-5">오래 써도 튼튼한 하자 보증 시공</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-18"></div>

        <section className="grid grid-cols-1 grid-rows-1">
          <div className="p-5">
            <p>
              {/* text-26px */}
              <span className="text-red-950 text-3xl">RECENT PROJECT</span>
            </p>
            <p>
              {/* text-16 */}
              <span className="text-lg">DEEN이 제안한 성공의 열쇠</span>
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 grid-rows-1">
          <div className="p-4">
            <PortfolioCard portfolio={portfolio1} />
          </div>
          <div className="p-4">
            <PortfolioCard portfolio={portfolio2} />
          </div>
          <div className="p-4">
            <PortfolioCard portfolio={portfolio3} />
          </div>
        </section>

        <div className="mt-18"></div>

        <section className="grid grid-cols-1 grid-rows-1">
          <div className="p-5">
            <p>
              {/* text-26px */}
              <span className="text-red-950 text-3xl">KEY MAKERS</span>
            </p>
            <p>
              {/* text-16 */}
              <span className="text-lg">
                독자적인 커리어를 쌓아 온 DEEN의 키 메이커
              </span>
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 grid-rows-1">
          <MakerCard
            imageSrc="/key-a.png"
            desc1="배치 계획"
            desc2="3D 모델링"
            desc3="세부 디자인"
            desc4="공간스타일링"
            name="Jihye Kim"
            role="Art Director"
          />
          <MakerCard
            imageSrc="/key-b.png"
            desc1="자재 구매"
            desc2="고객사 자문"
            desc3="비즈니스 컨설팅"
            desc4="파트너사 매니지먼트"
            name="Seunghyun Oh"
            role="Business Director"
          />
          <MakerCard
            imageSrc="/key-c.png"
            desc1="공간 기획"
            desc2="브랜드 컨설팅"
            desc3="상권-트랜드 리서치"
            desc4="온라인 커뮤니케이션"
            name="Yunhwa Chung"
            role="Creative Director"
          />
        </section>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
