/// <reference types="cypress" />

const { schema } = require("../../models/Todo");
const Todo = require("../../models/Todo");

describe('Todos', () => {

  beforeEach(() => cy.visit('/'))
 
  it('Create todo', () => {
    const expectedTodo = 'Test todo';

    cy.get('[data-test="link-to-create"]').click();
    cy.get('[data-test="input-todo-create"]').type(expectedTodo);
    cy.get('[data-test="create-button"]').click()

    cy.get('[data-test="todo-text"]').last().should('be.visible').and('have.text', expectedTodo);
  })

  it('Fail todo', () => {
    const expectedTodo = 'Fail todo';

    cy.get('[data-test="todo-text"]').last().should('be.visible').and('have.text', expectedTodo);
  })
})