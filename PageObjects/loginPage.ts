import { Element, WebdriverIO } from '@wdio/globals';

export class LoginPage {
    private readonly elements: {
        loginButton: WebdriverIO.Element;
        emailField: WebdriverIO.Element;
        passwordField: WebdriverIO.Element;
        submitButton: WebdriverIO.Element;
        accountHeading: WebdriverIO.Element;
        successMessage: WebdriverIO.Element;
        alertMessage: WebdriverIO.Element;
    };

    constructor() {
        this.elements = {
            loginButton: $('.login'),
            emailField: $('#email'),
            passwordField: $('#passwd'),
            submitButton: $('#SubmitLogin'),
            accountHeading: $('h1.page-heading'),
            successMessage: $('.info-account'),
            alertMessage: $('h1.alert'),
        };
    }

    public async open(): Promise<void> {
        await browser.url(`http://www.automationpractice.pl/index.php`);
        await this.elements.loginButton.click();
    }

    public async login(username: string, password: string): Promise<void> {
        await this.elements.emailField.setValue(username);
        await this.elements.passwordField.setValue(password);
        await this.elements.submitButton.click();
    }

    public async verifySuccessfulLogin(): Promise<void> {
        await expect(this.elements.accountHeading).toHaveTextContaining('MY ACCOUNT');
        await expect(this.elements.successMessage).toHaveTextContaining('Welcome to your account...');
    }

    public async verifyFailedLogin(): Promise<void> {
        await expect(this.elements.alertMessage).toHaveTextContaining('AUTHENTICATION');
    }
}
