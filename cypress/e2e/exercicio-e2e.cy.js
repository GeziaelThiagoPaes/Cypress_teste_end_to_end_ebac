/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.adicionar_produtos(1, 'Ajax Full-Zip Sweatshirt', 'XS', 'Blue', 2)
        cy.adicionar_produtos(1, 'Argus All-Weather Tank', 'M', 'Gray', 3)
        cy.adicionar_produtos(2, 'Augusta Pullover Jacket', 'XS', 'Blue', 1)
        cy.adicionar_produtos(4, 'Erikssen CoolTech™ Fitness Tank', 'S', 'Red', 1)
        cy.checkout('Teste comentário')
    });
})
