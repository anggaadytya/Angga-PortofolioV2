import React from "react"
import Home from "@/modules/home"
import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";

export const metadata:Metadata = {
  title: `Home | ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN
  } 
}

export default function HomePage() {
  return (
    <>
       <Container>
        <Home />
      </Container>
    </>
  )
}
