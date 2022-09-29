import { ItemService } from './../item.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  uId: string = '';
  items: Item[] = [];
  mIds: string[] = [];


  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    this.uId = this.activatedRoute.snapshot.params['uId'];
    this.itemService.getItems(this.uId).subscribe({
      next: (res) => {
        this.items = res;
        this.mIds = res.map(a => a.mId)
    }
  });
      
  }



}
