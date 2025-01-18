import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import Faq from "@/components/feature/faq/components/Faq";
import React from "react";

const Page = () => {
  return (
    <Container>
      <BreadCrumb currentPage="Faq" />
      <Faq />
    </Container>
  );
};

export default Page;
