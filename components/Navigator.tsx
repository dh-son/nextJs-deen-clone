"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function Navigator() {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        label: "ABOUT",
        isActive: pathname === "/about",
        href: "/about",
      },
      {
        label: "PORTFOLIO",
        isActive: pathname === "/portfolio",
        href: "/portfolio",
      },
      {
        label: "CONTACT",
        isActive: pathname === "/contact",
        href: "/contact",
      },
    ];
  }, [pathname]);

  return (
    <section>
      {/* mode: pc */}
      <article>
        <ul className="hidden lg:flex max-w-full flex-row justify-center items-center">
          {routes.map((route) => {
            return (
              <Link key={route.label} href={route.href}>
                <li
                  className={cn(
                    "h-10 min-w-fit w-44 p-2 text-red-900 text-sm text-center hover:font-bold cursor-pointer",
                    route.isActive && "font-bold"
                  )}
                >
                  {route.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </article>
      {/* mode: moblie */}
      <article className="lg:hidden">
        <table className="w-full mt-1 h-10">
          <tbody>
            <tr className="text-sm text-center text-red-900">
              <td
                className={cn(
                  "border-r border-t border-b w-1/3",
                  routes[0].isActive && "font-bold" && "bg-red-50"
                )}
              >
                <Link href={routes[0].href}>{routes[0].label}</Link>
              </td>
              <td
                className={cn(
                  "border-r border-t border-b w-1/3",
                  routes[1].isActive && "font-bold" && "bg-red-50"
                )}
              >
                <Link href={routes[1].href}>{routes[1].label}</Link>
              </td>
              <td
                className={cn(
                  "border-t border-b w-1/3",
                  routes[2].isActive && "font-bold" && "bg-red-50"
                )}
              >
                <Link href={routes[2].href}>{routes[2].label}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}
