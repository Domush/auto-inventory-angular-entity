import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShowInventoryComponent } from './inventory/show-inventory/show-inventory.component';
import { AddEditInventoryComponent } from './inventory/add-edit-inventory/add-edit-inventory.component';
import { InventoryApiService } from './inventory-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ShowInventoryComponent,
    AddEditInventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InventoryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
