
export class PageObjectVariables{


    elements = {
        button: () => cy.get('.unauthenticated-nav-bar__sign-up'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        email: () => cy.get('#email'),
        selectMonth: () => cy.get('#birthMonth'),
        selectDay: () => cy.get('#birthDay'),
        selectYear: () => cy.get('#birthYear'),
        inputLeaguje: () => cy.get('#languages > div:nth-child(1) > input'),
        selectInputLeaguje: () => cy.get('#ui-select-choices-0'),
        prueba: () => cy.get('#languages > ul'), 
        btnNextLocation: () => cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > form > div.form-group.col-xs-12.text-right > a'),
        inputSearchCity: () => cy.get('#city > ngf-single-select > ngf-autocomplete-input > ngf-input-container > div > div.infix.infix-overflow-hidden > input'),
        selectCity:() => cy.get('#cdk-overlay-0 > ngf-options-container > ngf-option:nth-child(1) > div'),
        postalCodeInput: () => cy.get('#zip'),
        countrySelect: ()=> cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > form > div.form-group-box > div.row > div.col-xs-12.col-sm-12.col-md-6.col-lg-6.location > div:nth-child(4) > div.ui-select > div > div'),
        countrySelectOptions: () => cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > form > div.form-group-box > div.row > div.col-xs-12.col-sm-12.col-md-6.col-lg-6.location > div:nth-child(4) > div.ui-select > div > div > ul'),
        btnNextDevices: () => cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > form > div:nth-child(2) > div > a'),
        yourComputerInput: () => cy.get('#web-device > div:nth-child(1) > div.ui-select-box > div'),
        yourComputerInputSelectOptions: () => cy.get('#web-device > div:nth-child(1) > div.ui-select-box > div > ul'),
        versionInput: ()=> cy.get('#web-device > div:nth-child(2) > div.ui-select-box > div'),
        versionInputSelectOptions: () => cy.get('#web-device > div:nth-child(2) > div.ui-select-box > div > ul'),
        languajeDevices: ()=> cy.get('#web-device > div:nth-child(3) > div.ui-select-box > div'),
        languajeDevicesSelectOptions: () => cy.get('#web-device > div:nth-child(3) > div.ui-select-box > div > ul'),
        yourMobileDevice: () => cy.get('#mobile-device > div:nth-child(1) > div.ui-select-box > div'),
        yourMobileDeviceSelectOptions: () => cy.get('#mobile-device > div:nth-child(1) > div.ui-select-box > div > ul'),
        modelInput: () => cy.get('#mobile-device > div:nth-child(2) > div.ui-select-box > div'),
        modelInputSelectOptions: () => cy.get('#mobile-device > div:nth-child(2) > div.ui-select-box > div > ul'),
        operatingSystemInput: () => cy.get('#mobile-device > div:nth-child(3) > div.ui-select-box > div'),
        operatingSystemInputSelectOptions: () => cy.get('#mobile-device > div:nth-child(3) > div.ui-select-box > div > ul'),
        buttonNextLastStep: () => cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > div:nth-child(2) > div'),
        inputPassword: () => cy.get('#password'),
        inputConfirmPassword: () => cy.get('#confirmPassword'),
        checkBoxStayInformed:() => cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > form > div:nth-child(4) > label'),
        checkBoxStayAcceptTermins: () => cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > form > div:nth-child(5)'),
        checkBoxStayAcceptPrivacity: () => cy.get('#regs_container > div > div:nth-child(2) > div > div.ui-view > div > form > div:nth-child(6) > label'),
        buttonCompleteSetup: () => cy.get('#laddaBtn'),
        textConfirmationRegister: () => cy.get('#mainContent > div > div > div.container.block > div:nth-child(1) > p.welcome-lead > b')
    
        }
    
    }
    
    export const pageObjectVariables = new PageObjectVariables();