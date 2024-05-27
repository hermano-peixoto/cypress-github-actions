
describe('Users API', () => {
    it('fetches the list of users', () => {
        cy.intercept('GET', '/users', [
            { id: 1, name: 'Mocked Alice' },
            { id: 2, name: 'Mocked Bob' },
            { id: 3, name: 'Mocked Charlie' }
        ]).as('getUsers');

        cy.request('/users').its('body').should('have.length', 3);
        cy.get('@getUsers').should((xhr) => {
            expect(xhr.response.body[0].name).to.equal('Mocked Alice');
        });
    });
});
