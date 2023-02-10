import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  @Input() subTotal:any;
  @Input() tax: any;
  @Input() discount: any;
  constructor() { }

  ngOnInit(): void {
  }

}
