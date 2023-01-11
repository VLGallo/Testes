describe('login e registro de usuarios', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('verifica mensagem de validacao', () => {
     cy.contains('a', 'Register now').click();
     cy.contains('button', 'Register').click();
     cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
     cy.contains('button', 'Register').click();
     cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
     cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
     cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type("vanessa");
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
       })
 
    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
         })  

    it('verifica mensagem de usuário com letra maiuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('VANESSA');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })
})