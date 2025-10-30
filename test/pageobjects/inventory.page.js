import { $ } from "@wdio/globals";
import Page from "./page.js"

class InventoryPage extends Page {
    get logo() {
        return $("//*[@class='app_logo']")
    }
    open() {
        return super.open("inventory.html")
    }
}

export default new InventoryPage();