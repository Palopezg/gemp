import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class SegmentoUpdatePage {
  pageTitle: ElementFinder = element(by.id('gempApp.segmento.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  descripcionInput: ElementFinder = element(by.css('input#segmento-descripcion'));
  tipoObraSelect: ElementFinder = element(by.css('select#segmento-tipoObra'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setDescripcionInput(descripcion) {
    await this.descripcionInput.sendKeys(descripcion);
  }

  async getDescripcionInput() {
    return this.descripcionInput.getAttribute('value');
  }

  async tipoObraSelectLastOption() {
    await this.tipoObraSelect.all(by.tagName('option')).last().click();
  }

  async tipoObraSelectOption(option) {
    await this.tipoObraSelect.sendKeys(option);
  }

  getTipoObraSelect() {
    return this.tipoObraSelect;
  }

  async getTipoObraSelectedOption() {
    return this.tipoObraSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setDescripcionInput('descripcion');
    expect(await this.getDescripcionInput()).to.match(/descripcion/);
    await this.tipoObraSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
