
describe('Users API', () => {
    it('fetches the list of users', () => {
        cy.intercept('GET', '/users', (req) => {
            req.reply([
                { id: 1, name: 'Mocked Alice' },
                { id: 2, name: 'Mocked Bob' },
                { id: 3, name: 'Mocked Charlie' }
            ]);
        }).as('getUsers');

        cy.request('/users').its('body').should('have.length', 3);
        cy.wait('@getUsers').then((xhr) => {
            expect(xhr.response.body[0].name).to.equal('Mocked Alice');
        });
    });
});
