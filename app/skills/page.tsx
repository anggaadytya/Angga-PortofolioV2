import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA } from "@/common/constant/metadata";
import Skills from "@/modules/skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `Skills | ${METADATA.exTitle}`,
    description: "skills page",
    alternates: {
        canonical: process.env.DOMAIN
      } 
}

const PAGE_TITLE = 'Skills'

export default function Skillspage() {
  return (
    <>
      <Container>
        <PageHeading title={PAGE_TITLE} />
        <Skills />
      </Container>
    </>
  )
}
