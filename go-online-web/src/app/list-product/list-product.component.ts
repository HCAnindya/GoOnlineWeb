import { Component, OnInit } from '@angular/core';
import { InventoryManagementService } from '../inventory-management.service';
import { InventoryModel } from '../inventory-model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  inventories:InventoryModel[] = [];
  constructor(private inventoryService: InventoryManagementService, private route: Router) { }

  inventoryChanged = new Subject<InventoryModel[]>();
  ngOnInit(): void {
    this.inventoryService.getInventories().subscribe(inventories => {
      let index = 0;
      while(index < inventories.length){
        this.inventories.push(inventories[index]);
        index += 1;
      }
    });
  }

  setInventories(){
    console.log("setting Inventories");
  }

  newProduct(){
    this.route.navigate(['/listProducts/new']);
  }

  

}
