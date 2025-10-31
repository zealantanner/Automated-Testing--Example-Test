import { browser, expect } from '@wdio/globals'
import Page from '../pageobjects/page.js'
import Inventory from '../pageobjects/inventory.page.js'


class User {
    constructor(username, password, isValid=false) {
        this.username = username;
        this.password = password;
        this.isValid = isValid;
    }
}

const randstr = (length = 5) => Math.random().toString(36).slice(2, 2+length)

const USERS = [
    new User("standard_user", "secret_sauce", true),
    new User("locked_out_user", "secret_sauce", false),
    new User("problem_user", "secret_sauce", true),
    new User("performance_glitch_user", "secret_sauce", true),
    new User("error_user", "secret_sauce", true),
    new User("visual_user", "secret_sauce", true),
    new User("standard_user", "wrong_password"),
    new User("misspelled_user", "secret_sauce"),
    new User("1", "1"),
    new User(randstr(10), randstr(10)),
    new User(randstr(10), randstr(10)),
    new User(randstr(10), randstr(10)),
]


describe("Login", () => {
    for(const user of USERS) {
        it(`should ${user.isValid ? "allow":"deny"} login for ${user.username}`, async () => {
            await Page.open()
            await Page.login(user.username, user.password)
            if(user.isValid) {
                await expect(browser).toHaveUrl(expect.stringContaining("inventory.html"))
                await expect(Inventory.container).toBeExisting()
            } else {
                await expect(browser).toHaveUrl(expect.not.stringContaining("inventory.html"))
                await expect(Page.errorLoginMessage).toBeExisting()
            }
        })
    }
})

