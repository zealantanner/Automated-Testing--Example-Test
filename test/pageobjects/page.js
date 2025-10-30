import { browser } from "@wdio/globals";



export default class Page {
    constructor() {
        this.logo = $("//*[@class='app_logo']")
    }
    open(path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}