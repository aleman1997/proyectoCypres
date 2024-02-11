import { pageObjectVariables } from "./PageObjectVariables"


export class InitialScreenPage{


clickButtonJoinToday(){
    pageObjectVariables.elements.button().click()
    
}


fillOutAllFields(varFirstName, varLastName, varEmail, varSelectMonth, varSelectDay, varPositionSelectYear){
    pageObjectVariables.elements.firstName().type(varFirstName)
    pageObjectVariables.elements.lastName().type(varLastName)
    pageObjectVariables.elements.email().type(varEmail)
    pageObjectVariables.elements.selectMonth().select(varSelectMonth)
    pageObjectVariables.elements.selectDay().select(varSelectDay)
    pageObjectVariables.elements.selectYear().select(varPositionSelectYear)

}

clickInputLanguaje(){
    pageObjectVariables.elements.inputLeaguje().click()
    pageObjectVariables.elements.prueba().click()

}

selectInputClickOptionsLanguaje(selectLanguaje){
    pageObjectVariables.elements.inputLeaguje().type(selectLanguaje)
    pageObjectVariables.elements.prueba().click()

}

clickButtonNextLocation(){
    pageObjectVariables.elements.btnNextLocation().click();

}

searchInputCity(city){
    pageObjectVariables.elements.inputSearchCity().type(city)
    pageObjectVariables.elements.selectCity().click()
}

fillOutPostalCode(codePostal){
    pageObjectVariables.elements.postalCodeInput().type(codePostal)
}




clickInputCountry(country){
    pageObjectVariables.elements.countrySelect().click()
    pageObjectVariables.elements.countrySelect().type(country)
    pageObjectVariables.elements.countrySelectOptions().click()

}

clickButtonNextDevices(){
    pageObjectVariables.elements.btnNextDevices().click()
}

clickInputYourComputer(yourTypeComputer){
    pageObjectVariables.elements.yourComputerInput().click()
    pageObjectVariables.elements.yourComputerInput().type(yourTypeComputer)
    pageObjectVariables.elements.yourComputerInputSelectOptions().click()

}

clickInputVersion(version){
    pageObjectVariables.elements.versionInput().click()
    pageObjectVariables.elements.versionInput().type(version)
    pageObjectVariables.elements.versionInputSelectOptions().click()

}

clickInputLanguajeDevice(languajeDevice){
    pageObjectVariables.elements.languajeDevices().click()
    pageObjectVariables.elements.languajeDevices().type(languajeDevice)
    pageObjectVariables.elements.languajeDevicesSelectOptions().click()

}

clickInputYourMobileDive(mobileDevice){
    pageObjectVariables.elements.yourMobileDevice().click()
    pageObjectVariables.elements.yourMobileDevice().type(mobileDevice)
    pageObjectVariables.elements.yourMobileDeviceSelectOptions().click()
}


clickInputModel(model){
    pageObjectVariables.elements.modelInput().click()
    pageObjectVariables.elements.modelInput().type(model)
    pageObjectVariables.elements.modelInputSelectOptions().click()
}

clickOperatingSystem(operationSystem){
    pageObjectVariables.elements.operatingSystemInput().click()
    pageObjectVariables.elements.operatingSystemInput().type(operationSystem)
    pageObjectVariables.elements.operatingSystemInputSelectOptions().click()
}

clickButtonNextLastStep(){
    pageObjectVariables.elements.buttonNextLastStep().click()
}

clickInputPassword(password, confirmPassword){
    pageObjectVariables.elements.inputPassword().type(password)
    pageObjectVariables.elements.inputConfirmPassword().type(confirmPassword)
    pageObjectVariables.elements.checkBoxStayInformed().click()
    pageObjectVariables.elements.checkBoxStayAcceptTermins().click()
    pageObjectVariables.elements.checkBoxStayAcceptPrivacity().click()
}

clickButtonCompleteSetup(){
    pageObjectVariables.elements.buttonCompleteSetup().click()
}

getTextConfirmationRegister(){
    pageObjectVariables.elements.textConfirmationRegister().then(titleElement=>{
       if(expect('First, please check your email inbox').to.equal(titleElement.text())){
        cy.log('User register succesful', titleElement.text())
        cy.wait(5000)
        
       } else{
        cy.log("Validate again register wrong")
       }
    })


}


}

export const initialScreenPage = new InitialScreenPage();