describe('About Page', () => {

    beforeEach(() => {

        cy.fixture('courses.json').as("coursesJSON");

        cy.server();

        cy.route('/api/courses', "@coursesJSON").as("courses");

        cy.visit('/about');

    });

    it('should be clickable the Courses button', () =>{

        cy.get('[data-cy=courses-button]').last().click();
        
        cy.contains("All Courses");
    });
});