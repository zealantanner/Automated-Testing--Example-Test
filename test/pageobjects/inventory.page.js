import Page from "../pageobjects/page"

class InventoryPage extends Page {
    get logo() {
        $("//*[@class='app_logo']")
    }
    open() {
        return super.open(`inventory.html`)
    }
}

export default new InventoryPage();