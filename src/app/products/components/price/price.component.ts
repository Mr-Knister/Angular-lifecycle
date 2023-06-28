import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges {

  @Input()
  public price:number = 0;
  public interval$?:Subscription;

  constructor() {}

  ngOnInit(): void {
    console.log('Price-Component: OnInit');
    this.interval$ = interval(1000).subscribe(value => console.log({value}));
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log('Price-Component: OnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Price-Component: OnDestroy');
    this.interval$?.unsubscribe();
  }

}
