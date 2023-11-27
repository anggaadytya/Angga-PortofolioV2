import Dashboard from "@/modules/dashboard";
import React from "react";
import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";

export const metadata: Metadata = {
  title: `Dashboard | ${METADATA.exTitle}`,
  description: "Dashboard Angga Adytya",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};


const PAGE_TITLE = "Dashboard";

export default function page() {
  return (
    <Container>
      <PageHeading title={PAGE_TITLE}/>
      <Dashboard />
    </Container>
  );
}
