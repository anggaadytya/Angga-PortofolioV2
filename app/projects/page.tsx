import React from "react"
import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import Project from "@/modules/projects";

export const metadata:Metadata = {
  title: `Projects | ${METADATA.exTitle}`,
  description: 'Projects portfolio of Angga Adytya',
  keywords: METADATA.keyword,
  alternates: {
    canonical: `${process.env.DOMAIN}/project`,
  } 

}

export default function ProjectsPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <Project />
      </Container>
    </>
  )
}
