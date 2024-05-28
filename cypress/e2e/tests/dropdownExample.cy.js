/// <reference types="cypress" />

it("Validate the dropdown option selection by it's value", () => {
  cy.visit("https://www.bstackdemo.com/")
  cy
    .get("select")
    .select("lowestprice")
    .invoke("val")
    .should("eq", "lowestprice")
})

it("Validate the dropdown option selection by it's value", () => {
  cy.visit("https://www.bstackdemo.com/")
  cy
    .get("select")
    .select("lowestprice")
    .invoke("val")
    .should("eq", "lowestprice")
})

it("Validate the dropdown option selection by it's text and assert the selection", () => {
  cy.visit("https://www.bstackdemo.com/")
  cy.get("select").select("Highest to lowest")
  cy
    .get("select option:selected")
    .invoke("text")
    .should("eq", "Highest to lowest")
})
