describe('Customized-Tickets', () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    it("fills all the text input fields", () => {
        const firstName = "Rosa";
        const lastName = "Campos";
    });
    it("fills mandatory fields using support command", () => {
        const customer = {
            firstName: "Vitor",
            lastName: "Ricardo", 
            email: "vitorricardo@qa.com"  
        }

        cy.fillMandatoryFields(customer)

        cy.get("button[type='submit']")
          .as("submitButton")
          .should("not.be.disabled")

        cy.get("#agree").uncheck()
      
        cy.get("@submitButton").should("be.disabled")
    })
})    