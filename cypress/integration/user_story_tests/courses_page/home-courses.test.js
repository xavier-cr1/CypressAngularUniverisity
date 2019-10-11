describe('Home Page', () => {

    beforeEach(() => {

        cy.seedCoursesMainPage()

    });

    it('should display a list of courses', () => {

        cy.contains("All Courses");

        cy.wait('@courses');

        cy.get("mat-card").should("have.length", 9);

    });

    it('should display the advanced courses', () => {

        cy.get('.mat-tab-label').should("have.length", 2);

        cy.get('.mat-tab-label').last().click();

        cy.get('.mat-tab-body-active .mat-card-title').its('length').should('be.gt', 1);

        cy.get('.mat-tab-body-active .mat-card-title').first()
            .should('contain', "Angular Security Course");

    });

    it('should display the beginners courses', () => {

        cy.get('.mat-tab-label').should("have.length", 2);

        cy.get('.mat-tab-label').first().click();

        var test = cy.get('.mat-tab-body-active .mat-card-title');

        cy.get('.mat-tab-body-active .mat-card-title').first()
        .should('contain', "Angular Testing Course");
    });

    it('should be clickable the ABOUT button', () =>{

        cy.get('[data-cy=about-button]').last().click();
        
        cy.contains("Welcome!");
    });

});






















