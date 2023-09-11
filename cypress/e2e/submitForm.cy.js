// Write a test to check the user flow of adding a new reservation to the page.
describe('Check the user flow of adding a new reservation to the page.', () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {fixture: 'rezzies.json'}).as("getReservs")

    })
    it("Should show the new card after a user clicks Make Reservation button", () => {
        cy.visit("http://localhost:3000");
        cy.wait(["@getReservs"])
        cy.get('input[name="name"]').click().type("Jen").should('have.value', 'Jen')
        cy.get('input[name="date"]').click().type("10/24").should('have.value', '10/24')
        cy.get('input[name="time"]').click().type("8:00").should('have.value', '8:00')
        cy.get('input[name="number"]').click().type("100").should('have.value', '100')
        cy.get('.submit-btn').click()
        cy.get('.resy-container').contains('Jen')
        cy.get('.resy-container').contains('10/24')
        cy.get('.resy-container').contains('8:00 pm')
        cy.get('.resy-container').contains('100 people')
    })
}
)