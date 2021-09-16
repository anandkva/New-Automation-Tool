describe('Test Code', () => {
    it('Test GET Request', () => {
        cy.request('http://localhost:3005/api')
            .then((response) => {
                expect(response.status).equal(200);
            })
    })
})