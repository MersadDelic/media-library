import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/item.service";
import {Item} from "../../../models/item";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList: Item[] = [];
  filterByTitle = '';
  filterByDescription = '';
  p: number = 1;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList(): void {
    this.itemList = this.itemService.getItems();
  }

}
