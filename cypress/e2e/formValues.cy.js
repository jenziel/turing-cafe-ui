// Write a test that checks that when data is put into the form, the value is reflected in that form input.
describe('Check that the value updates when new data is entered into the form', () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {fixture: 'rezzies.json'}).as("getReservs")

    })
    it("dynamically updates the state of each text input", () => {
        cy.visit("http://localhost:3000");
        cy.wait(["@getReservs"])
        cy.get('input[name="name"]').click().type("Jen").should('have.value', 'Jen')
        cy.get('input[name="date"]').click().type("10/24").should('have.value', '10/24')
        cy.get('input[name="time"]').click().type("8:00").should('have.value', '8:00')
        cy.get('input[name="number"]').click().type("100").should('have.value', '100')
    })
}
)