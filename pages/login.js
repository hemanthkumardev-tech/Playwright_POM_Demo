const {expect}= require('@playwright/test' );
    exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByPlaceholder('Username')
        this.password_textbox = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.error_message = this.page.locator('[data-test="error"]')
    }

    async gotoLoginpage() {
        await this.page.goto('https://www.saucedemo.com/');    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
    async verifyLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
    async verifyErrorMessage(){
        await expect(this.error_message).toBeVisible()
    }
}
