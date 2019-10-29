import {Given, And, Then} from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com';
Given("I go to main page", () => {
    cy.server()
    cy.route('GET', '/api/courses', 'fixture:courses').as("courses")
    cy.visit('/')
  });

Then("All courses should be displayed", () => {

    cy.contains("All Courses");

    cy.wait('@courses');

    cy.get("mat-card").should("have.length", 9);

});