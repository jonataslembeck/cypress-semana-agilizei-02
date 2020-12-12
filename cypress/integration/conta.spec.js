/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {

        let nomeProduto = 'Faded Short Sleeve T-shirts'

        cy.backgroundLogin() // Realização de login  
        cy.visit('/'); // Visita a página através do baseURL

        cy.contains(nomeProduto).trigger('mouseover') // Procura pelo elemento e move o mouse até ele

        // Procura pelo botão add to cart
        cy.contains(nomeProduto).parent() // Pai // Irmãos // Filhos // Primeiro
        .siblings('div.button-container').children('a').first().click()
        // .eq(0) // Pelo index
        
        // Valida se adiciona o produto
        cy.get('.icon-ok').parent().should('contain.text', 'Product successfully added to your shopping cart')
        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

        // Clica em Proceed to checkout
        cy.get(".button-container a[href$='controller=order']").click()
        cy.get('.cart_navigation a[href$="controller=order&step=1"]').click()

        // Informa e-mail e senha
        //cy.get('#email').type('jonatas-agilizei@hotmail.com')
        //cy.get('#passwd').type('12345')
        //cy.get('#SubmitLogin').click()
        
        // Valida se endereço de entrega é igual de cobrança // Asserção, atributo, valor
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same')

        // Clica para prosseguir e Marca termos do serviço e prosseguir novamente
        cy.get('button[name=processAddress]').click()
        cy.get('[type=checkbox]#cgv').check()
        cy.get('button[name=processCarrier]').click()

        // Seleciona forma de pagamento
        cy.get('.bankwire').click()
        cy.get('.cart_navigation button[type=submit]')
            .find('span').contains('I confirm my order').click()
        
        // Valida se gravou // should -> Implicita | expect -> Explicita
        cy.get('.cheque-indent strong').should('contain.text', 'Your order on My Store is complete.')

        // Capturar o texto através do invoke e joga para variavel text
        cy.get('div.box').invoke('text').then((text) => {
            console.log(text)

            // Filta o texto para extrair somente o ID do pedido através de expressão regular
            console.log(text.match(/[A-Z][A-Z]+/g)[1])

            // Armazena ID do pedido em arquivo json
            cy.writeFile('cypress/fixtures/pedido.json', {id: `${ text.match(/[A-Z][A-Z]+/g)[1] }`})

            // Volta para os pedidos
            cy.get(".cart_navigation a[href$='history']").click()

            // Realiza leitura do arquivo e armazena o ID do pedido
            cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
                cy.get('tr.first_item td.history_link a').should('contain.text', pedido.id)
            })
        })  
    });
});