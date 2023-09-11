describe('UI when user first loads the page', () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {fixture: 'rezzies.json'}).as("getReservs")

    })
    it("should display all reservations when a user first visits the app", () => {
        cy.visit("http://localhost:3000");
        cy.wait(["@getReservs"])
        cy.get(".app-title").contains("Turing Cafe Reservations")
        cy.get(".resy-container").contains("Christie")
        cy.get(".resy-container").contains("Leta")
        cy.get(".resy-container").contains("Pam")
    })
}
)

