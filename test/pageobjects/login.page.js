import { $ } from "@wdio/globals";
import Page from "./page.js";


class LoginPage extends Page {

    get inputUsername() {
        return $('#user-name')
    }
    
    get inputPassword() {
        return $('#password')
    }

    get buttonLogin() {
        return $('#login-button')
    }

    get loginErrorMessage() {
        return $('//*[@data-test="error"]')
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