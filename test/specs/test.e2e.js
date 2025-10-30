import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/page.js'
import InventoryPage from '../pageobjects/inventory.page.js'


class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
const USERS = [
    User("standard_user", "secret_sauce"),
    User("locked_out_user", "secret_sauce"),
    User("problem_user", "secret_sauce"),
    User("performance_glitch_user", "secret_sauce"),
    User("error_user", "secret_sauce"),
    User("visual_user", "secret_sauce"),
]

describe('Login', () => {
    it('should login with each credentials', async () => {
        await Page.open()
        for(let user of USERS){
            await Page.login(user.username, user.password)
            switch(user.username) {
                case "standard_user":
                case "problem_user":
                case "performance_glitch_user":
                case "error_user":
                case "visual_user":
                    await expect(InventoryPage).toBeExisting()

                case "locked_out_user":
                default:
                    await expect(Page.loginErrorMessage)
            }

        }
        await Page.login()
    })
})




// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//     })
// })

