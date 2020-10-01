import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { InventoryManagementService } from '../inventory-management.service';
import { InventoryModel } from '../inventory-model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private inventoryService: InventoryManagementService) { }

  productForm: FormGroup;
  ngOnInit(): void {
    console.log("Inside new Form");
    this.productForm = new FormGroup({
      'name' : new FormControl(),
      'price' : new FormControl()
    });
  }

  saveProduct() {
    this.inventoryService.saveProduct(new InventoryModel(this.productForm.value['name'], this.productForm.value['price']));
    this.inventoryService.getInventories().subscribe();
  }
}
