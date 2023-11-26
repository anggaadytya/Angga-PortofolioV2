import About from "@/modules/about";
import React from "react";
import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";

export const metadata: Metadata = {
  title: `About | ${METADATA.exTitle}`,
  description: "about of Angga Adytya",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return (
    <Container data-aos="fade-up">
      <About />
    </Container>
  );
}
