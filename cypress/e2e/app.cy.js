describe("Navigation", () => {
  it("should navigate to the news page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="/news/nxtjs"]').click();

    cy.url().should("include", "/news/nxtjs");

    cy.get("h1").contains("Details nxtjs");
  });
});
