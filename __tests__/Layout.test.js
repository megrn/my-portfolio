// __tests__/Layout.test.js
import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import "@testing-library/jest-dom";

describe("Layout", () => {
  it("renders your brand name and nav links", () => {
    render(
      <Layout>
        <div>Children Content</div>
      </Layout>
    );

    // Brand
    expect(screen.getByText("Megern Qaisse")).toBeInTheDocument();

    // Nav items
    ["Home", "About", "Services", "Projects", "Contact", "Blog"].forEach((link) => {
      expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
    });

    // CV download button
    expect(screen.getByRole("link", { name: /download cv/i })).toBeInTheDocument();

    // Children
    expect(screen.getByText("Children Content")).toBeInTheDocument();
  });
});
