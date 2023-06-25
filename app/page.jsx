import React from "react";
import BodyQuran from "@/components/BodyQuran";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <BodyQuran />
    </Layout>
  );
}
