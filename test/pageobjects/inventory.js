import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

class Inventory extends Page {
    get container() { return $('div#inventory_container') }
    get items() { return $$('//div[@class="inventory_list"]/*') }
    open() {
        return super.open("inventory.html")
    }
}

export default new Inventory();