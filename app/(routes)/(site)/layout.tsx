"use client";

import { styled } from "@mui/material/styles";
import { Suspense } from "react";

import { Footer } from "app/_components/footer";
import { TopNav } from "app/_components/top-nav";
import { useMobileNav } from "@hooks";

const LayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mobileNav = useMobileNav();

  return (
    <section>
      <TopNav onMobileNavOpen={mobileNav.handleOpen} />
      <LayoutRoot>
        <Suspense fallback={<p>Loading ...</p>}>{children}</Suspense>
      </LayoutRoot>
      <Footer />
    </section>
  );
}
