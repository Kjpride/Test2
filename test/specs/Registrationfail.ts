
describe('fail', () => {

it('new user cant register successfully', async () => {
  await browser.url('http://www.automationpractice.pl/index.php');

  // ingreso a "Sign in" 
  await $('.login').click();
  await browser.pause(2000); 
  // genero el correo.
  const randomEmail = `testuser${Math.random().toString(36).substring(2, 7)}@yopmail.com`;

  // Correo
  await $('#email_create').setValue(randomEmail);
  await $('#SubmitCreate').click();
  await browser.pause(3000); 

  //genero
  const titles = ['#uniform-id_gender1', '#uniform-id_gender2'];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  await $(randomTitle).click();

  //Nombres
  const generateRandomName = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz123456897';
    let result = 'Name -';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const generateRandomLastName = () => {
    const characters = 'abcdefghijklmnopqrstuvwxy12345987';
    let result = 'LastName -';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const firstName = generateRandomName();
  const lastName = generateRandomLastName();

  // Enter first name
  await $('#customer_firstname').setValue(firstName);
  await browser.pause(3000);

  // Enter last name
  await $('#customer_lastname').setValue(lastName);
  await browser.pause(3000);

  const password = 'Tes'; 

  // Enter password
  await $('#passwd').setValue(password);
  await browser.pause(3000);

  const shouldSubscribe = Math.random() < 0.5; 
  if (shouldSubscribe) {
  await $('#uniform-newsletter').click();
  }
  await browser.pause(3000);

  // Click "Register" button
   await $('#submitAccount').click();
   await browser.pause(8000);

   await $('.alert.alert-danger').isExisting();

});
});