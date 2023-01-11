describe('alura busca cursos', () => {
    beforeEach(() => {
        cy.visit('https://www.computersciencemaster.com.br')
    })

    it('buscar curso Java', () => {
        cy.get('.mobile-menu > .fa').click();
        cy.get('.mobile-searchform > label > input').type('java');
        cy.get('.searchform-submit > .icon-magnifier').click();
        cy.get('h2.search-entry-title.entry-title').should('contain', 'Objetos em Java')
    })
})