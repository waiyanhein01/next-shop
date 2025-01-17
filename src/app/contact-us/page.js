import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import Contact from "@/components/feature/contact/components/Contact";
import React from "react";

const Page = () => {
  return (
    <Container>
      <BreadCrumb currentPage="Contact" />
      <Contact/>
    </Container>
  );
};

export default Page;
