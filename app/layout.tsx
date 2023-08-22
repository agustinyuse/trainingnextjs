"use client";

import { Suspense } from "react";
import "./globals.css";
import { Providers } from "./providers";
import clsx from "clsx";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import dynamic from "next/dynamic";

// Fixes: Hydration failed because the initial UI does not match what was rendered on the server.
const NextAuthProvider = dynamic(
  () => import("./providers/nextAuthProvider").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx("min-h-screen bg-background font-sans antialiased")}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <NextAuthProvider>
            <Suspense>
              <NavbarComponent />
              <div className="md:container md:mx-auto px-4 mt-5">
                <Suspense>
                  <div className="md:container">{children}</div>
                </Suspense>
              </div>
            </Suspense>
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
