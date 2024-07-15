import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', price: 0, img: '', quantity: 0, description: '', note: '' };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      err => console.error(err)
    );
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(
      () => {
        this.loadProducts();
        this.newProduct = { id: 0, name: '', price: 0, img: '', quantity: 0, description: '', note: '' };
      },
      err => console.error(err)
    );
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(
      () => this.loadProducts(),
      err => console.error(err)
    );
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => this.loadProducts(),
      err => console.error(err)
    );
  }
}
