export class Item {
  id: number;
  title: string;
  description: string;
  url: string;

  constructor(id: number, title: string, description: string, url = "https://cdni.iconscout.com/illustration/premium/thumb/laptop-and-coffee-3075583-2607455.png") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
  }

}
