describe('Test Code', () => {
    it('Visit', () => {
        cy.visit('https://thirsty-rosalind-5d60e6.netlify.app')
    });
    it('Screenshot', () => {
        
        cy.get('#accordionSidebar').first().screenshot()
        cy.get('#content').first().screenshot()
    })
    it('input test', () => {
        cy.get(".basic-addon2").type("hello")
        cy.get('button').click()
    });
    it("Responsive", () => {
        cy.get(".container").should("be.visible");
        cy.viewport(320, 480);
        cy.get(".container").should("be.visible");
        cy.viewport(2999, 2999);
        cy.viewport("iphone-6");
        cy.wait(200);
        cy.viewport("iphone-5");
        cy.wait(200);
        cy.viewport("iphone-4");
        cy.wait(200);
        cy.viewport("iphone-3");
        cy.wait(200);
        cy.viewport("iphone-x");
        cy.wait(200);
        cy.viewport("iphone-xr");
        cy.wait(200);
        cy.viewport("samsung-note9");
        cy.wait(200);
        cy.viewport("samsung-s10");
        cy.wait(200);
    });
    
})
