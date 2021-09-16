describe('Test Code', () => {
    it('Visit and Screenshot', () => {
        cy.visit('https://mystifying-mirzakhani-496446.netlify.app')
        cy.screenshot()
    });
   it('Mouse Hover view test', ()=>{
    cy.get('.card').trigger('mouseover')
    cy.get('.card').should('be.visible')
   })
    it('Button Click', () => {
        cy.get('.btn btn-block btn-primary text-uppercase').click()
    });
    it("Responsive", () => {
        cy.get(".container").should("be.visible");
        cy.viewport(320, 480);
        cy.get(".container").should("be.visible");
        cy.viewport(2999, 2999)
        cy.wait(200).screenshot();
        cy.viewport(768, 1024)
        cy.wait(200).screenshot();
        cy.viewport(375, 667);
        cy.wait(200);
        cy.viewport("iphone-4");
        cy.wait(200);
        cy.viewport("iphone-3")
        cy.wait(200).screenshot();;
        cy.viewport("iphone-x");
        cy.wait(200);
        cy.viewport("iphone-xr");
        cy.wait(200);
        cy.viewport("samsung-note9")
        cy.wait(200).screenshot();;
        cy.viewport("samsung-s10");
        cy.wait(200);
    });
})
