import Container from "@/common/components/elements/Container";
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

export default function Skillspage() {
  return (
    <>
      <Container>
        <Skills />
      </Container>
    </>
  )
}
