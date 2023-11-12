import { LightningElement, api } from "lwc";

export default class Navbar extends LightningElement{
    @api loggedInUser
    @api backendUrl

    get username(){
        return this.loggedInUser ? this.loggedInUser.display_name : ''
    }

    get logoutUrl(){
        return `${this.backendUrl}/oauth2/logout`
    }
}