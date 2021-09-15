import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "../../../models/item";


@Pipe({
  name: 'itemFilterByTitle'
})
export class ItemFilterByTitlePipe implements PipeTransform {

  transform(itemList: Item[], search: string): Item[] {
    if (!search.trim()) {
      return itemList;
    }

    return itemList.filter(item => {
      return item.title.toString().toLowerCase()
        .includes(search.toLowerCase());
    });
  }

}
