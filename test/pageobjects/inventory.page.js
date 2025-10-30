import { $ } from "@wdio/globals";
import Page from "../pageobjects/page.js"

class InventoryPage extends Page {
    open() {
        return super.open("inventory.html")
    }
}

export default new InventoryPage();