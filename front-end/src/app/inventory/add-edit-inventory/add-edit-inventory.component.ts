import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryApiService } from 'src/app/inventory-api.service';

@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.css']
})
export class AddEditInventoryComponent implements OnInit {

  inventoryList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  carModelList$!: Observable<any[]>;
  constructor(private service:InventoryApiService) { }

  @Input() inventory: any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  carModelId!: number;

  ngOnInit(): void {
    this.id = this.inventory.id;
    this.status = this.inventory.status;
    this.comments = this.inventory.comments;
    this.carModelId = this.inventory.carModelId;
    this.statusList$ = this.service.getStatusList();
    this.inventoryList$ = this.service.getInventoryList();
    this.carModelList$ = this.service.getCarModelList();

  }

  addInventory() {
    let inventory = {
      status: this.status,
      comments: this.comments,
      carModelId: this.carModelId
    };
    this.service.addInventory(inventory).subscribe(res => {
      let closeModalButton = document.getElementById('add-edit-modal-close');
      if (closeModalButton) {
        closeModalButton.click();
      }
      let showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
        setTimeout(function () {
          if (showAddSuccess) {
            showAddSuccess.style.display = "none";
          }
        }, 4000);
      }
    });
  }
  updateInventory() {
    let inventory = {
      id: this.id,
      status: this.status,
      comments: this.comments,
      carModelId: this.carModelId
    };
    let id: number = this.id;
    this.service.updateInventory(id,inventory).subscribe(res => {
      let closeModalButton = document.getElementById('add-edit-modal-close');
      if (closeModalButton) {
        closeModalButton.click();
      }
      let showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
        setTimeout(function () {
          if (showUpdateSuccess) {
            showUpdateSuccess.style.display = "none";
          }
        }, 4000);
      }
    });

  }

}
