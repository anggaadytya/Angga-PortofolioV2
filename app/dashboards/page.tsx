import Dashboard from "@/modules/dashboard";
import React from "react";
import { METADATA } from "@/common/constant/metadata";
import { Metadata } from "next";
import Container from "@/common/components/elements/Container";

export const metadata: Metadata = {
  title: `Dashboard | ${METADATA.exTitle}`,
  description: "Dashboard Angga Adytya",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}
