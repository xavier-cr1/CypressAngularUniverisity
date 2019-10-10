describe('About Page', () => {

    beforeEach(() => {

        cy.fixture('courses.json').as("coursesJSON");

        cy.server();

        cy.route('/api/courses', "@coursesJSON").as("courses");

        cy.visit('/about');

    });

    it('should be clickable the Courses button', () =>{

        cy.get('.mat-toolbar-single-row .mat-button').last().click();
        
        cy.contains("Welcome!");
    });
});