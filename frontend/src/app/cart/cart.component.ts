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


  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    this.uId = this.activatedRoute.snapshot.params['uId'];
    this.itemService.getItems(this.uId).subscribe({
      next: (res) => this.items = res
    })
    // let mIds: string[]
    // let result = objArray.map(a => a.foo);
    // let mIds: string[] = this.items.map(item => item.mId)

    // var vals = [];
    // for (var item of testArray) {
    //   vals.push(item.val);
    // }

    let mIds:string[] = [];
    for (let item of this.items) {
      mIds.push(item.mId)
    }

    // let mIds:string[] = [this.items.map(a => a.mId)]
    // this.mIds = this.items.map(({ mId }) => mId)
    console.log(mIds)
    let bb: string[] = ["1", "2"]
    console.log(bb)

  }



}
