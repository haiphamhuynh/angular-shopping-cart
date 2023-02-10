import { Component } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // title = 'Shopping Cart';
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail:
        'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg',
      price: 149,
      quantity: 2,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail:
        'https://www.thegioialo.com.vn/vnt_upload/news/05_2022/iphone14_pro_1.jpg',
      price: 162.18,
      quantity: 1,
    },
  ];
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10,
    },
    {
      code: 'WINTER',
      discountPercent: 20,
    },
  ];

  numberItems: number = 3;
  subTotal: number = 460.18;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 46.02;

  updateCartSummary() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }
    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }
  removeProduct(productId: number) {
    // xoa sang pham
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index !== -1) {
      this.products.splice(index, 1);
    }

    // Tính lại tổng số lượng sản phẩm và tổng tiền
    this.updateCartSummary();
  }
  updateProductQuantity(data: { id: number; quantity: number }) {
    // cập nhập số lượng sản phẩm
    const product = this.products.find((p) => p.id === data.id);
    if (product) {
      product.quantity = data.quantity || 0;
    }
    // Tính lại tổng số lượng sản phẩm và tổng tiền
    this.updateCartSummary();
  }
  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      (promoCode) => promoCode.code === code
    );
    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied.`);
    } else {
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
      );
    }
  }
}
