import { Element, WebdriverIO } from '@wdio/globals';

export interface AddressData {
  firstName: string;
  lastName: string;

}

export class AddressPage {
  private readonly elements: {
    myAddressesLink: WebdriverIO.Element;
    addAddressButton: WebdriverIO.Element;
    addressesPageTitle: WebdriverIO.Element;

  };

  constructor() {
    this.elements = {
      myAddressesLink: $('[title="Addresses"]'),
      addAddressButton: $('[title="Add my first address"]'),
      addressesPageTitle: $('h1.page-heading'),

    };
  }

  async openMyAddresses(): Promise<void> {
    await this.elements.myAddressesLink.click();
  }

  async verifyAddressesPage(): Promise<void> {
    await expect(this.elements.addressesPageTitle).toHaveTextContaining('MY ADDRESSES');
  }

  async isAddAddressDisplayed(addressTitle: string): Promise<boolean> {
    const addAddressElement = await $(`//*[@title="${addressTitle}"]`);
    return await addAddressElement.isExisting();
  }

  async clickAddAddress(addressTitle: string): Promise<void> {
    await $(`//*[@title="${addressTitle}"]`).click();
  }

  async fillAddressForm(addressData: AddressData): Promise<void> {

  }

  async submitAddressForm(): Promise<void> {

  }

  async verifySuccessfulAddressAddition(): Promise<void> {
  }
}
