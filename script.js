//your JS code here. If required.
() => {
    // Assert box-shadow on .book-library
    cy.get('.book-library').should('have.css', 'box-shadow').and('not.eq', 'none');

    // Assert width on first div inside .book-library
    cy.get('.book-library').find('div').first().should('have.css', 'width', '200px'); // Adjust width as per your design

    // Assert text-align on h2 (since h1 isn't present in provided HTML)
    cy.get('.book').find('h2').should('have.css', 'text-align', 'center');

    // Assert background-color and border-radius on .price-block
    const priceBackground = 'rgb(46, 204, 113)';
    cy.get('.book').within(() => {
        cy.get('.price-block').should('have.css', 'background-color', priceBackground);
        cy.get('.price-block').should('have.css', 'border-radius', '5px');
    });

    // Assert color on .author
    const authorColor = 'rgb(119, 119, 119)';
    cy.get('.book').find('.author').should('have.css', 'color', authorColor);
};