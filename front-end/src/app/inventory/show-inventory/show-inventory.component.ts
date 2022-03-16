import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryApiService } from 'src/app/inventory-api.service';

@Component({
  selector: 'app-show-inventory',
  templateUrl: './show-inventory.component.html',
  styleUrls: ['./show-inventory.component.css']
})
export class ShowInventoryComponent implements OnInit {

  inventoryList$!: Observable<any[]>;
  carModelList$!: Observable<any[]>;
  carModelList: any = [];

  // foreign key display map
  carModelMap: Map<number, string> = new Map();

  constructor(private service:InventoryApiService) { }

  ngOnInit(): void {
    this.inventoryList$ = this.service.getInventoryList();
    this.carModelList$ = this.service.getCarModelList();
    this.refreshCarModelMap();
  }

  modalTitle: string = '';
  activateAddEditInventoryComponent: boolean = false;
  inventory: any;

  modalAdd() {
    this.inventory = {
      id: 0,
      status: null,
      comments: null,
      carModelId:null
    }
    this.modalTitle = "Add Inventory Report";
    this.activateAddEditInventoryComponent = true;
  }

  modalUpdate(item:any) {
    this.inventory = item;
    this.modalTitle = "Edit Inventory Report";
    this.activateAddEditInventoryComponent = true;
  }

  deleteInventory(item: any) {
    if (confirm(`Delete inventory id: ${item.id} "${this.carModelMap.get(item.carModelId)}"?`)) {
      this.service.deleteInventory(item.id).subscribe(res => {
        let showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
          setTimeout(function () {
            if (showDeleteSuccess) {
              showDeleteSuccess.style.display = "none";
            }
          }, 4000);
          this.inventoryList$ = this.service.getInventoryList();
        }
      });
    }
  }


  modalClose() {
    this.activateAddEditInventoryComponent = false;
    this.inventoryList$ = this.service.getInventoryList();
  }
  refreshCarModelMap() {
    this.service.getCarModelList().subscribe(data => {
      this.carModelList = data;

      for (let i = 0; i < data.length; i++) {
        this.carModelMap.set(this.carModelList[i].id, this.carModelList[i].model);
      }

    });
  }
}
