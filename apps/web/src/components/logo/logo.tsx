import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/"
      className={
        "flex w-full cursor-pointer items-center justify-start gap-2 select-none"
      }
    >
      <Image
        width={8}
        height={8}
        src={`/logo.svg`}
        alt="logo"
        className={"h-8 w-8"}
      />
      {children}
    </Link>
  );
}
