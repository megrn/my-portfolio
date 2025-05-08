// __tests__/Home.test.js
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

jest.mock("next-translate/useTranslation", () => () => ({
  t: (key) => {
    const map = {
      "hero.title": "Megern Qaisse",
      "hero.subtitle": "DevOps & SaaS Developer crafting scalable cloud platforms.",
      "hero.button": "Learn More",
      "services.title": "Services",
      "blog.title": "From the Blog",
      "blog.description": "Dive into deep dives...",
      "blog.button": "Read the Blog",
    };
    return map[key] || key;
  }
}));

describe("Home Page", () => {
  it("renders hero and service buttons", () => {
    render(<Home />);

    // Hero content
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Megern Qaisse");
    expect(screen.getByRole("button", { name: "Learn More" })).toBeInTheDocument();

    // Service buttons
    ["SaaS Development", "DevOps Automation", "Cloud Infrastructure", "Startup MVP"].forEach((svc) => {
      expect(screen.getByRole("link", { name: svc })).toBeInTheDocument();
    });

    // Blog link
    expect(screen.getByRole("link", { name: "Read the Blog" })).toBeInTheDocument();
  });
});
