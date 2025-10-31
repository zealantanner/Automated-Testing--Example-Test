import { browser, $ } from "@wdio/globals";



export default class Url {
    get logo() { return $('//*[contains(@class,"logo") and contains(text(),"Swag Labs")]') }
    
    open(path="") {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}