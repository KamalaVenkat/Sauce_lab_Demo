exports.sauce_POM = class sauce_POM {

    constructor(page) {
        this.page = page
        this.username_textbox = page.locator('#user-name')
        this.password_textbox = page.locator('#password')
        this.login_button = page.locator('#login-button')
    }

    async gotologinpage() {
        await this.page.goto('https://www.saucedemo.com')

    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }

}