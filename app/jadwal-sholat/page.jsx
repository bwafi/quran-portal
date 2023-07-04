import Container from "@/components/Container";
import Layout from "@/components/Layout";
import BodySholat from "@/components/sholat/BodySholat";
import React from "react";

const page = () => {
  return (
    <Layout>
      <Container>
        <BodySholat />
      </Container>
    </Layout>
  );
};

export default page;
