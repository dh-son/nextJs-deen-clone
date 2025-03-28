export function Footer() {
  return (
    <section className="bg-red-900 w-full h-[180px] text-white text-[12px] px-4 lg:px-40 py-6">
      <article>
        <ul className="flex flex-row gap-4">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>
      </article>
      <article className="mt-4">
        <ul className="flex flex-row gap-4">
          <div className="flex flex-col">
            <li>Email</li>
            <li>사업자명</li>
            <li>사업자번호</li>
            <li>대표자명</li>
          </div>
          <div className="flex flex-col">
            <li>create@deen.co.kr</li>
            <li>주식회사 딘</li>
            <li>343-87-03152</li>
            <li>김지혜, 정윤화</li>
          </div>
        </ul>
      </article>
      <article className="mt-4">
        <div>Copyright@2025 DEEN ALL rights reserved.</div>
      </article>
      <div className="mt-4"></div>
    </section>
  );
}
