describe('About Page', () => {

    beforeEach(() => {

        cy.server();

        cy.visit('/about');

    });

    it('should be clickable the Courses button', () =>{

        cy.get('[data-cy=courses-button]').last().click();
        
        cy.contains("All Courses");
    });
});