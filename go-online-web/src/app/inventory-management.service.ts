import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryModel } from './inventory-model';

@Injectable({
  providedIn: 'root'
})
export class InventoryManagementService {
  
  constructor(private http: HttpClient) { }


  saveProduct(inventory: InventoryModel) {
    console.log(inventory);
    this.http.post('http://192.168.0.100:8011/inventorymanagement-ms/inventorymanagement/inventory', inventory)
    .subscribe(response => {
      console.log(response);
    });
  }
}
