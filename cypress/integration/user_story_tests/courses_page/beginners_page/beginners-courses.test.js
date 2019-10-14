describe('Beginners courses page', () => {

    beforeEach(() => {

        cy.seedCoursesMainPage()

    });

    it('should display all the beginner courses set in courses.json file', () => {
        //load from courses.json payload and group it by "category" = BEGINNER
        var beginnerCourses = cy.readFile('cypress/fixtures/courses.json').its('payload');

        cy.get('.mat-tab-body-active .mat-card-title').debug();

        cy.get('.mat-tab-body-active .mat-card-title').first()
        .should('contain', "Angular Testing Course");
    });

});