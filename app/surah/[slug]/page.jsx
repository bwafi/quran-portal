import Layout from "@/components/Layout";
import BodyDetail from "@/components/detailSurah/BodyDetail";
import React from "react";

const page = ({ params }) => {
  const id = params.slug;
  return (
    <Layout>
      <BodyDetail id={id} />
    </Layout>
  );
};

export default page;
