/// <reference types="Cypress"/>

describe('Beginners courses page', () => {

    beforeEach(() => {

        cy.seedCoursesMainPage();

    });

    it('should display all the beginner courses set in courses.json file', () => {
        //load from courses.json payload and group it by "category" = BEGINNER
        cy.readFile('cypress/fixtures/courses.json').its('payload').then(($payload) => {
            debugger

            cy.fixture($payload).then(($response) =>{
                debugger
            })
        })



        //cy.get('.mat-tab-body-active .mat-card-title').debug();

        cy.get('.mat-tab-body-active .mat-card-title').first()
        .should('contain', "Angular Testing Course");
    });

});