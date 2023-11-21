import Container from "@/common/components/elements/Container";
import { METADATA } from "@/common/constant/metadata";
import Skills from "@/modules/skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `Skills | ${METADATA.exTitle}`,
    alternates: {
        canonical: process.env.DOMAIN
      } 
}

export default function page() {
  return (
    <>
      <Container>
        <Skills />
      </Container>
    </>
  )
}
