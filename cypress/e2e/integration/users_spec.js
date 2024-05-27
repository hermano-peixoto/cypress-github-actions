describe('Users API', () => {
    it('fetches the list of users', () => {
        cy.request('/users').then((response) => {
            // Verify the status code
            expect(response.status).to.eq(200);
            // Verify the response body
            expect(response.body).to.have.length(3);
            expect(response.body[0]).to.deep.equal({ id: 1, name: 'Alice' });
            expect(response.body[1]).to.deep.equal({ id: 2, name: 'Bob' });
            expect(response.body[2]).to.deep.equal({ id: 3, name: 'Charlie' });
        });
    });
});
