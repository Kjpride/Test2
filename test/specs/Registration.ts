
//const fs = require('fs');

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
describe('Registro de usuario', () => {
  it('new user', async () => {
    await browser.url('http://www.automationpractice.pl/index.php');

    // Click en el enlace "Iniciar sesión"
    await $('.login').click();
    await browser.pause(2000); 

    // Genero el Email de forma Aleatoria
    const randomEmail = `testuser${Math.random().toString(36).substring(2, 7)}@yopmail.com`;
    // Guardar el email en user.txt
    //fs.appendFileSync('user.txt', `Email: ${randomEmail}\n`);

    // Enter inserto el Email y hago sumbit en el botón register
    await $('#email_create').setValue(randomEmail);
    await $('#SubmitCreate').click();
    await browser.pause(2000);

    // Selecciono de forma Aleatoria El genero
    const titles = ['#uniform-id_gender1', '#uniform-id_gender2'];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    await $(randomTitle).click();


   //Nombre Aleatorio
   const generateRandomName = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = 'Name';
    for (let i = 0; i < 3; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
   };
  //Apellido Aleatorio
  const generateRandomLastName = () => {
    const characters = 'abcdefghijklmnopqrstuvwxy';
    let result = 'LastName';
    for (let i = 0; i < 3; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  const firstName = generateRandomName();
  const lastName = generateRandomLastName();

    // Ingreso el nombre
    await $('#customer_firstname').setValue(firstName);
    await browser.pause(2000);

    // Ingreso el Apellido
    await $('#customer_lastname').setValue(lastName);
    await browser.pause(2000);

    // Contraseña
    const password = generateRandomPassword();

    // Guardar la contraseña en user.txt
    //fs.appendFileSync('user.txt', `Password: ${password}\n`);

    // Asigno la contraseña
    await $('#passwd').setValue(password);
    await browser.pause(3000);

 
    // funcion para generar la fecha de forma aleatoria
    function generateRandomDate(minYear: number, maxYear: number): Date {
      const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
      const month = Math.floor(Math.random() * 12) + 1; // Months start from 1 (January)
      const daysInMonth = new Date(year, month, 0).getDate();
      const day = Math.floor(Math.random() * daysInMonth) + 1;

      return new Date(year, month - 1, day);
    }

    // capturo la fecha.
    const randomDate = generateRandomDate(1990, 2023);
    const day = randomDate.getDate();
    const month = randomDate.getMonth() + 1;
    const year = randomDate.getFullYear();
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    try {
    
      await browser.pause(1000);
      await $('select#days').selectByVisibleText(day.toString());

   
      await browser.pause(1000);
      await $('select#months').selectByVisibleText(months[month - 1]);
     
      await browser.pause(1000);
      await $('select#years').selectByVisibleText(year.toString());


      //verifico la fecha
      const selectedDay = await $('select#days').getValue();
      const selectedMonth = await $('select#months').getValue();
      const selectedYear = await $('select#years').getValue();

      expect(selectedDay).toBe(day.toString());
      expect(selectedMonth).toBe(month.toString());
      expect(selectedYear).toBe(year.toString());
    } catch (error) {
      console.error('Error selecting date:', error);
    }

  // Selecciono Aleatoriamente newsletter!
  const shouldSubscribe = Math.random() < 0.5; // 50% chance to subscribe
  if (shouldSubscribe) {
    await $('#uniform-newsletter').click();
  }
  await browser.pause(3000);

  // Envio el formulario
   await $('#submitAccount').click();
  
  await expect($('icon-home')).toBeExisting                     
  await expect($('h1.page-heading')).toHaveTextContaining('MY ACCOUNT')

  await browser.pause(5000);
      
  });
});