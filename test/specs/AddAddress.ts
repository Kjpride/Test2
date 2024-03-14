describe('Address',()=>{

  const addressTitle = 'Add my first address';

  it('addAddress', async ()=>{
    //   ingresa  a la pagina
    await browser.url(`http://www.automationpractice.pl/index.php`)
    // Click en el login
    await $('.login').click()
    await browser.pause(2000);
    // Envio los datos para logear
    await $('#email').setValue('kevinmorales@yopmail.com')
    await $('#passwd').setValue('Morales0829')
    await browser.pause(3000);
    await $('#SubmitLogin').click()
    // Valido que estoy dentro de la plataforma
    await expect($('icon-home')).toBeExisting ;                   
    await expect($('h1.page-heading')).toHaveTextContaining('MY ACCOUNT')
    //Verifico si el Elemento Existe.
    const addAddressElement = await $(`//*[@title="${addressTitle}"]`);
    if (await addAddressElement.isExisting()) {
      await addAddressElement.click();
      await expect($('h1.page-subheading')).toHaveTextContaining('YOUR ADDRESSES')

        //LLENO EL FORMULARIO
        await $('input[name=firstname]').setValue('John')
        await browser.pause(3000);
        await $('input[name=lastname]').setValue('Doe')
        await browser.pause(3000);
        await $('input[name=company]').setValue('Test Company')
        await browser.pause(3000);
        await $('input[name=address1]').setValue('123 Main St')
        await $('input[name=address2]').setValue('1234 Main St')
        await browser.pause(3000);
        await $('input[name=city]').setValue('Anytown')
        await browser.pause(3000);
        await $('select[name=id_state]').selectByVisibleText('Alabama')
        await browser.pause(3000);
        await $('input[name=postcode]').setValue('12345')
        await browser.pause(3000);
        await $('input[name=phone_mobile]').setValue('555-555-5555')
        await browser.pause(3000);
        await $('input[name="phone"]').setValue('312458961')
        await browser.pause(3000);
        const randomAlias = 'RandomHome' + Math.floor(Math.random() * 1000);
        await $('input[name=alias]').setValue(randomAlias)
        //Envio formulario
        await $('button[name=submitAddress]').click()
    } 
    else {
      await $('[title="Addresses"]').click();
      await browser.pause(10000);
    }
       
  });

});