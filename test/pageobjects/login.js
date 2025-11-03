import { $ } from "@wdio/globals";
import Page from "./page.js";


class Login extends Page {
    get loginContainer(){ return $('div.login_container') }
    get inputUsername(){ return $('#user-name') }
    get inputPassword(){ return $('#password') }
    get buttonConfirm(){ return $('#login-button') }
    get errorLoginMessage() { return $('//*[@data-test="error"]') }
    
    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.buttonConfirm.click()
    }
    
    open() {
        return super.open()
    }
}

export default new Login();