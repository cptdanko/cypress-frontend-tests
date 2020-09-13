describe("Front-end UI tests to ensure consistency", () => {
    /* visit this page before running any test */
    beforeEach(() => {
        cy.visit(`http://localhost:8080/index.html`);
    });

    it("Should test if header is 32px and wavy", () => {
        return cy.get(".title")
        .should('have.css', 'font-size', '32px')
        .should('have.css', 'text-decoration-style', 'wavy');
    });
    it("Should test if data is shows as rows on desktop", () => {
        cy.viewport('macbook-15')
        .wait(200)
        .get(".parent")
        .should("have.css", 'flex-direction', 'row')
        .should("not.have.css", 'align-items', 'center')
    });
    it("Should test if data is shows as columns on mobile", () => {
        cy.viewport('iphone-6')
        .wait(200)
        .get(".parent")
        .should('have.css', 'flex-direction', 'column')
        .should('have.css', 'align-items', 'center')
    });
    it("Should test violet has no box shadow on mobile", () => {
        return cy.get(".violet")
        .viewport("iphone-x") 
        .should("not.be.visible");
    });
    it("Should check if we have the right font type", () => {
        return cy.get(".companyFont")
        .should("have.css", "font-family", `"Verdana sans-serif"`);
    });
});