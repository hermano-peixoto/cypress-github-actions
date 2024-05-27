
describe('Users API', () => {
    it('fetches the list of users', () => {
        // Set up the intercept before making the request
        cy.intercept('GET', '/users', (req) => {
            req.reply([
                { id: 1, name: 'Mocked Alice' },
                { id: 2, name: 'Mocked Bob' },
                { id: 3, name: 'Mocked Charlie' }
            ]);
        }).as('getUsers');

        // Make a request to the /users endpoint
        cy.request('/users').as('usersRequest');

        // Wait for the intercept and then assert the response
        cy.wait('@getUsers').then((xhr) => {
            expect(xhr.response.body).to.have.length(3);
            expect(xhr.response.body[0].name).to.equal('Mocked Alice');
        });

        // Additionally, assert the actual response from the request
        cy.get('@usersRequest').then((response) => {
            expect(response.body).to.have.length(3);
            expect(response.body[0].name).to.equal('Mocked Alice');
        });
    });
});
