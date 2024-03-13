function generateRandomPassword(length: number = 10): string {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '0123456789';
  const allCharacters = lowerCaseLetters + upperCaseLetters + numbers;
  let randomPassword = '';

  for (let i = 0; i < length; i++) {
    randomPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }
  return randomPassword;
}

describe ('Personal',()=>{

  it('PersonalItem', async ()=>{

    await browser.url(`http://www.automationpractice.pl/index.php`)

    await $('.login').click()
    await browser.pause(2000);


    await $('#email').setValue('kevinmorales@yopmail.com')
    await $('#passwd').setValue('Morales0829')
    await browser.pause(3000);

    await $('#SubmitLogin').click();
    await expect($('icon-home')).toBeExisting;                   
    await expect($('h1.page-heading')).toHaveTextContaining('MY ACCOUNT')

    await browser.pause(2000);

    await $('[title="Information"]').click();

    await browser.pause(2000);

      //genero
    const titles = ['#uniform-id_gender1', '#uniform-id_gender2'];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    await $(randomTitle).click();

    await browser.pause(2000);

    //Nombres
    const generateRandomName = () => {
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      let result = 'Name';
      for (let i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  
    const generateRandomLastName = () => {
      const characters = 'abcdefghijklmnopqrstuvwxy';
      let result = 'LastName';
      for (let i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  
    const firstName = generateRandomName();
    const lastName = generateRandomLastName();
  
    // Enter first name
    await $('#firstname').setValue(firstName);
    await browser.pause(3000);
  
    // Enter last name
    await $('#lastname').setValue(lastName);
    await browser.pause(3000);



    
    //contraseñas
    // Generar una contraseña aleatoria
    const randomPassword = generateRandomPassword();

        //Enter correo
    await $('#email').setValue('kevinmorales@yopmail.com');
    await $('#old_passwd').setValue(randomPassword);

    await browser.pause(3000);

    await $('#passwd').setValue(randomPassword);

    await $('#confirmation').setValue(randomPassword);

    await browser.pause(3000);

    await $('button[name="submitIdentity"]').click();
    await browser.pause(3000);


    await $('.alert.alert-danger').isExisting();
    await browser.pause(3000);

    const passwordErrorMessage = await $('.alert.alert-danger ol li');
    await passwordErrorMessage.waitForExist({ timeout: 5000 });
    await browser.pause(5000);


  });

});