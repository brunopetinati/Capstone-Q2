/* eslint-disable cypress/no-unnecessary-waiting */
context("Students Page", () => {
  it("logs in with valid credentials, then verifies if user is logged by going to the student's profile page. Then asks for ID 10 and verifies if student obtained is Charles Darwin", () => {
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000/register");
    cy.contains("Login");
    cy.contains("Entrar");
    cy.get(":nth-child(1) > .sc-kEjbxe").type("userwillbedeleted");
    cy.get(":nth-child(3) > .sc-kEjbxe").type("willbedeleted@hotmail.com");
    cy.get(":nth-child(5) > .sc-kEjbxe").type("123456");
    cy.get(":nth-child(6) > .sc-kEjbxe").type("123456");
    cy.get(".sc-fubCfw").click();
    cy.visit("http://localhost:3000/login");
    cy.get(":nth-child(1) > .sc-eCssSg").type("willbedeleted@hotmail.com");
    cy.get(":nth-child(3) > .sc-eCssSg").type("123456");
    cy.get(".sc-jSgupP").click();
    cy.wait(1000);
    cy.visit("http://localhost:3000/profile");
    cy.wait(500);
    cy.contains("Obter Informações");
    cy.get("input").type("10");
    cy.get(".sc-kLgntA > :nth-child(2)").click();
    cy.wait(600);
    cy.contains("Charles Darwin");
  });
});
