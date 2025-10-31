import { $, $$ } from "@wdio/globals";
import Url from "../pageobjects/url.js";

class Inventory extends Url {
    get container() { return $('div#inventory_container') }
    get items() { return $$('//div[@class="inventory_list"]/*') }
    open() {
        return super.open("inventory.html")
    }
}

export default new Inventory();