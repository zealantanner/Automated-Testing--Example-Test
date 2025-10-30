import { $ } from "@wdio/globals";
import Page from "../pageobjects/page.js";


class LoginPage extends Page {
    constructor() {
        this.inputUsername = $('#user-name')
        this.inputPassword = $('#password')
        this.buttonLogin = $('#login-button')
        this.ErrorLoginMessage = $('//*[@data-test="error"]')
    }


    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.buttonLogin.click()
    }
    open() {
        return super.open('')
    }
}

export default new LoginPage();