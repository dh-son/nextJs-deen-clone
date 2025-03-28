// 반응형UI: 데스크탑 모바일에 따라 사이즈 조정
export default function PagePadding({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto px-2 py-2 lg:px-8">{children}</div>;
}
