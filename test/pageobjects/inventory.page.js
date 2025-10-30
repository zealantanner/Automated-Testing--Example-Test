import Page from "../pageobjects/page"

class Inventory extends Page {
    open() {
        return super.open(`inventory.html`)
    }
}

export default new Inventory();