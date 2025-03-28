"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  return (
    <div className="cursor-pointer" onClick={onClickLogo}>
      <Image alt="logo" width={90} height={64} src={"/logo.png"} />
    </div>
  );
}
