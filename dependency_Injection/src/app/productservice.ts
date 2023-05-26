import { Injectable } from "@angular/core"

@Injectable()
export class ProductService{
  
    getProducts(): Product[]{
        return [
            { name: "Keyboard", quantity: 10 },
            { name: "Mouse", quantity: 20 },
            { name: "MousePad", quantity: 5 }
        ]
    }
}

export class Product{
    name: string
    quantity: number
}
