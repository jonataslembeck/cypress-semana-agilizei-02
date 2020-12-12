// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    // Autentica
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0np32ZLjwSqEg2mDk5mgmzoltQJh1FBIrx3DrVnlGg25Lb1PlI6%2FKDpeBSJMoPl4ZPnetifABbOsBfMfXOxMcA0YvNBQ%2FP%2BPcnuZ4bdXpBtAGkvGfO4j5yBiGWiEweZmr1gt%2BRivwt7arObCtaIz6zJMQCN%2FgxlnFYcTJkw2tbSXAfu7SBwxpX9bWul1%2BzTor00P8ow8nwMVknWfGfKqzfRRH8ks6pKNiqgD3wrohgcM2oJJ50qAqHsZgy6nghn7wMj7SY4Bx8lhFaGYdLZ9zAhhFYnTMgxtA5RAZdUTgd0gGs0Q6J9hI1Oi3hn2ZDA14yrIZdpwSUN0qQE%2B4kVZ50%2FP98PaBNqUszl%2F0UojMZRHr%2FI7BtySDfDB0zAAfiHoL%2BdRLqYktDJOyzOAg%2B8n38gxTOtgZyrCLshfVVYhXtQQ000336'
    )
})