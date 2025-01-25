import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import About from "@/components/feature/about/components/About";
import ProductsList from "@/components/feature/products/components/ProductsList";
import React from "react";

const Page = () => {
  return (
    <Container>
      <BreadCrumb currentPage="About" />
      <About />
    </Container>
  );
};

export default Page;
