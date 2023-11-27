import React from "react"
import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import Project from "@/modules/projects";
import PageHeading from "@/common/components/elements/PageHeading";

export const metadata:Metadata = {
  title: `Projects | ${METADATA.exTitle}`,
  description: 'Projects portfolio of Angga Adytya',
  keywords: METADATA.keyword,
  alternates: {
    canonical: `${process.env.DOMAIN}/project`,
  } 

}

const PAGE_TITTLE = "Project"

export default function ProjectsPage() {
  return (
    <>
      <Container>
        <PageHeading title={PAGE_TITTLE}/>
        <Project />
      </Container>
    </>
  )
}
