import {Injectable} from '@angular/core';
import {Item} from "../models/item";


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    new Item(1, 'Vacation', 'Beautiful sunset', 'https://cdn.pixabay.com/photo/2020/09/27/23/39/sunset-5608136_1280.jpg'),
    new Item(2, 'Kids toy', 'Old phone kids toy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mUeIrKQmAnD01foj6K6p78Pjxdu7pqT27g&usqp=CAU'),
    new Item(3, 'Cat', 'My favourite pet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjATKMvP5zBGNRh8hR0LJpo5zgiEB-G-d2yw&usqp=CAU'),
    new Item(4, 'Nokia 3310', 'My first cellphone', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qs1pRlmF15pwrp6Pp0tgUAa4KMp69uUNFA&usqp=CAU'),
    new Item(5, 'Tom & Jerry', 'The best cartoon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROL-7HoB4xxFeidgloxFWkTRGxVlLFctFfig&usqp=CAU'),
    new Item(6, 'Cevapi', 'Our favourite meal', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZNH2hpp356Enj_zYRBSiOS9qLNU0Y7nLyQ&usqp=CAU'),
    new Item(7, 'Golf 2', 'Popular car in BiH', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJeAbfQCJ3TCldutau0sRT1oFFKn9xEusqQ&usqp=CAU'),
    new Item(8, 'Trebevic', 'View from cable car', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KUVVE7PUxK0CR0qOhlmFCSeLLc4Zm4Wgpg&usqp=CAU'),
    new Item(9, 'Cevapi', 'Our favourite meal', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCJ78DUw0KuisoLNWdQ_pEmfQpAb_o-n9kA&usqp=CAU'),
    new Item(10, 'Golf 2', 'Popular car in BiH', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJeAbfQCJ3TCldutau0sRT1oFFKn9xEusqQ&usqp=CAU')

  ]

  constructor() {
  }

  getItems(): Item[] {
    return this.items
  }
}
