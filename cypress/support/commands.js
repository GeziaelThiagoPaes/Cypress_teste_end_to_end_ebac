Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()

});

Cypress.Commands.add('adicionar_produtos', (pagina_pesquisa, seleciona_produto, tamanho_produto, cor_produto, quantidade_produto) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(`:nth-child(${pagina_pesquisa}) > .page-numbers`).click()
    cy.get('[class="product-block grid"]').contains(seleciona_produto).click()
    cy.get(`[class="variable-item button-variable-item button-variable-item-${tamanho_produto}`).click()
    cy.get('.button-variable-item-' + cor_produto).click()
    cy.get('.woocommerce-variation-add-to-cart > .quantity').clear().type(quantidade_produto)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', `seu carrinho.`)
})

Cypress.Commands.add('checkout', (adicionaComentario) => {
    cy.get('#cart > .dropdown-toggle').should('be.visible').click({force: true})
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    cy.get('.checkout-button').click()
    cy.get('#order_comments').type(adicionaComentario)
    cy.get('#terms').check()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
})