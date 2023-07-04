import React from "react";
import BodyQuran from "@/components/BodyQuran";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Hero />
        <BodyQuran />
      </Container>
    </Layout>
  );
}
