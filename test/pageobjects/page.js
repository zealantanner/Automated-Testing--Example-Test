import { browser, $ } from "@wdio/globals";



export default class Page {

    get inputUsername() {
        return $('#user-name')
    }
    
    get inputPassword() {
        return $('#password')
    }

    get buttonLogin() {
        return $('#login-button')
    }


    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.buttonLogin.click()
    }


    open(path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}