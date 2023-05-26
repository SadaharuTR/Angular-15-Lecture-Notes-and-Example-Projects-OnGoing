import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addUser(name: string) {
    this.names.push(name)
  }

  get users(): string[] { //names field'ını döndüren bir users property'si tanımlayalım.
    return this.names;
  }

  //CreateUserComponent'de girilen name değerlerini tutabilmek için bir koleksiyonel yapı tanımlayalım.
  private names: string[] = []; //herkes erişemesin, sadece veri ekleyecek olan addUser() erişsin.
}
