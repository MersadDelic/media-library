import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "../../models/item";


@Pipe({
  name: 'itemFilterByDescription'
})
export class ItemFilterByDescriptionPipe implements PipeTransform {

  transform(itemList: Item[], search: string): Item[] {
    if (!search.trim()) {
      return itemList;
    }

    return itemList.filter(item => {
      return item.description.toString().toLowerCase()
        .includes(search.toLowerCase());
    });
  }

}
