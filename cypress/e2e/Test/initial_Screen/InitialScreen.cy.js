const { initialScreenPage } = require("../../../../Pages/InitialScreenPage/InitialScreenPage")



describe("Registration on the utest page", function(){

    it("Register Join Today", function(){
        cy.visit('/')
        initialScreenPage.clickButtonJoinToday();
        initialScreenPage.fillOutAllFields('Paco','Perez','pacpPerez234@gmail.com', 'September', 24, 3)
        initialScreenPage.clickInputLanguaje()
        initialScreenPage.selectInputClickOptionsLanguaje('Alb')
        initialScreenPage.clickButtonNextLocation()
        initialScreenPage.searchInputCity('Mede')
        initialScreenPage.fillOutPostalCode('456789')
        initialScreenPage.clickInputCountry('Mexi')
        initialScreenPage.clickButtonNextDevices()
        initialScreenPage.clickInputYourComputer('Windows')
        initialScreenPage.clickInputVersion('Server')
        initialScreenPage.clickInputLanguajeDevice('Spanish')
        initialScreenPage.clickInputYourMobileDive('Alcatel')
        initialScreenPage.clickInputModel('TCL A2')
        initialScreenPage.clickOperatingSystem('Android')
        initialScreenPage.clickButtonNextLastStep()
        initialScreenPage.clickInputPassword('pacoPerez018@','pacoPerez018@')
        initialScreenPage.clickButtonNextLastStep()
        initialScreenPage.clickButtonCompleteSetup()
        initialScreenPage.getTextConfirmationRegister()
        
    });

  


})