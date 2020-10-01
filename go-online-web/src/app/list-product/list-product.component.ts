import { Component, OnInit } from '@angular/core';
import { InventoryManagementService } from '../inventory-management.service';
import { InventoryModel } from '../inventory-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  inventories:InventoryModel[] = [];
  constructor(private inventoryService: InventoryManagementService, private route: Router) { }

  ngOnInit(): void {
 
    this.inventoryService.getInventoryList();
    this.inventoryService.inventoryChanged.subscribe((inventories: InventoryModel[]) => {
      console.log("Subscriobibgf");
      var index = 0;
      this.inventories = [];
      while(index < inventories.length){
        this.inventories.push(inventories[index]);
        index += 1; 
      }
    });
  }

  newProduct(){
    this.route.navigate(['/listProducts/new']);
  }

  

}
