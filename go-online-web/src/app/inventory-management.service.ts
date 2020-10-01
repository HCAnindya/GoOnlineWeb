import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryModel } from './inventory-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryManagementService {
  
  constructor(private http: HttpClient) { }

  inventories:InventoryModel[] = [];
  inventoryChanged = new Subject<InventoryModel[]>();

  saveProduct(inventory: InventoryModel) {
    console.log(inventory);
    this.http.post('http://192.168.0.100:8011/inventorymanagement-ms/inventorymanagement/inventory', inventory)
    .subscribe(response => {
      console.log("saveProduct");
      this.getInventoryList();
    });
  }

  getInventoryList() {
    this.inventories = [];
    console.log("Inside getInventories()");
    return this.http.get<InventoryModel[]>
    ('http://192.168.0.100:8011/inventorymanagement-ms/inventorymanagement/inventories').subscribe(inventories => {      
      console.log("Inside getInventories() response" + inventories);
      this.setInventories(inventories);
    });;
  }
  
  setInventories(inventoryList: InventoryModel[]){
    this.inventories = inventoryList;
    this.inventoryChanged.next(this.inventories.slice());
    console.log(this.inventories);
  }
}
