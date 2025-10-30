import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'


class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
const USERS = [
    new User("standard_user", "secret_sauce"),
    // new User("locked_out_user", "secret_sauce"),
    // new User("problem_user", "secret_sauce"),
    // new User("performance_glitch_user", "secret_sauce"),
    // new User("error_user", "secret_sauce"),
    // new User("visual_user", "secret_sauce"),
]

describe('Login', () => {
    it('should login with each credential', async () => {
        for(let user of USERS){
            await LoginPage.open()
            await LoginPage.login(user.username, user.password)
            switch(user.username) {
                case "standard_user":
                case "problem_user":
                case "performance_glitch_user":
                case "error_user":
                case "visual_user":
                    await expect(InventoryPage.logo).toBeExisting()
                    break;
                case "locked_out_user":
                default:
                    await expect(LoginPage.loginErrorMessage).toBeExisting()
                    break;
            }
            await browser.reloadSession()
        }
    })
})
