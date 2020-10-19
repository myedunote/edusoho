
import notify from 'common/notify';

class Order {
  constructor(props) {
    this.$element = $(props.element);
    this.$realpayPrice = this.$element.find('#realpay-price');
    this.$priceList = this.$element.find('#order-center-price-list');

    this.init();
  }

  init() {
    this.initEvent();
  }

  initEvent() {
    this.$element.on('calculatePrice', event => this.calculatePrice(event));
    this.$element.on('addPriceItem', (event, id, title, price) => this.addPriceItem(event, id, title, price));
    this.$element.on('removePriceItem', (event, id) => this.removePriceItem(event, id));

    this.$element.trigger('calculatePrice');
    this.validate();
  }

  calculatePrice() {
    let formData = this.$element.serializeArray();
    $.get(this.$element.data('priceCalculate'), formData, (data) => {
      this.$realpayPrice.text(data.priceFormat);
      this.$element.trigger('afterCalculatePrice', data);
    });
  }

  hasPriceItem(event, id) {
    let $priceItem = $(`#${id}`);
    if ($priceItem.length) {
      return true;
    }

    return false;
  }

  addPriceItem(event, id, title, price) {
    let $priceItem = $(`#${id}`);

    if (this.hasPriceItem(event, id)) {
      $priceItem.remove();
    }

    let html = `
      <div class="order-center-price" id="${id}">
        <div class="order-center-price__title">${title}</div>
        <div class="order-center-price__content">-${price}</div>
      </div>
    `;

    this.$priceList.append(html);
  }

  removePriceItem(event, id) {
    let $priceItem = $(`#${id}`);
    
    if (this.hasPriceItem(event, id)) {
      $priceItem.remove();
    }
  }

  validate() {
    this.$element.submit( event => {
      if ('' !=  this.$element.find('[name="informationCollectEventId"]').val() && '1' != this.$element.find('[name="informationCollectIsSubmited"]').val()) {
        notify('danger', Translator.trans('order.information_collect_error_hint'));
        $('.order-center-information-collect').addClass('error');
        return false;
      }
      $('#order-create-btn').button('loading');
      $('.order-center-information-collect').removeClass('error');
      return true;
    });
  }
}

export default Order;