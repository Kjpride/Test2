import { expect, browser, $ } from '@wdio/globals'
let runTest = process.env.TEST_TO_RUN === 'true'

describe('Login', () => {
   
    it('should login with valid credentials', async () => {
        if (runTest == true) {
            await browser.url(`http://www.automationpractice.pl/index.php`)

            await $('.login').click()
            await browser.pause (2000)

            await $('#email').setValue('kevinmorales@yopmail.com')
            await browser.pause(2000)

            await $('#passwd').setValue('Morales0829')
            await browser.pause(2000)

            await $('#SubmitLogin').click()
            await browser.pause(2000)

            await expect($('h1.page-heading')).toHaveTextContaining('MY ACCOUNT')
            await expect($('.info-account')).toHaveTextContaining('Welcome to your account. Here you can manage all of your personal information and orders.')
            await browser.pause(5000)

        }
    })

    it('should deny acces with  wrong credentials', async () => {
        if (runTest == false) {
            await browser.url(`http://www.automationpractice.pl/index.php`)

            await $('.login').click()
            await browser.pause(5000)


            await $('#email').setValue('kevinmorales@yopmail.com')
            await browser.pause(5000)

            await $('#passwd').setValue('Morales0829s')
            await browser.pause(5000)


            await $('#SubmitLogin').click()
            await browser.pause(5000)


            await expect($('h1.page-heading')).toHaveText('AUTHENTICATION')
            
        }
    })
})
//$env:TEST_TO_RUN = 'true'
//$env:TEST_TO_RUN = 'invalidCredentials'
//$env:TEST_TO_RUN = 'validCredentials'
//npx wdio run wdio.conf.ts --spec test/specs/login.ts
//