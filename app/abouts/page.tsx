import About from "@/modules/about";
import React from "react";
import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";

export const metadata: Metadata = {
  title: `About | ${METADATA.exTitle}`,
  description: "about of Angga Adytya",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

const PAGE_TITLE = "About";

export default function page() {
  return (
    <Container>
      <PageHeading title={PAGE_TITLE}  />
      <About />
    </Container>
  );
}
