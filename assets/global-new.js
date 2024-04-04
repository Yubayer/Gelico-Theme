class GelicoLocalizationForm extends HTMLElement {
    constructor() {
      super();
      this.form = this.querySelector('form');
      this.form.addEventListener('input', this.formEvent.bind(this));
    }

    formEvent(e) {
      this.form.submit();
    }
  }

customElements.define('gelico-localizationform', GelicoLocalizationForm);