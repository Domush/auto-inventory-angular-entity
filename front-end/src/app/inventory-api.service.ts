import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  readonly inventoryAPIUrl = "http://localhost:5083/api";

  constructor(private http: HttpClient) { }

  // Inventory list
  getInventoryList(): Observable<any[]> {
    return this.http.get<any>(this.inventoryAPIUrl + '/Inventories');
  }

  addInventory(data: any) {
    return this.http.post(this.inventoryAPIUrl + '/Inventories', data);
  }

  updateInventory(id: number | string, data: any) {
    return this.http.put(this.inventoryAPIUrl + `/Inventories/${id}`, data);
  }

  deleteInventory(id: number | string) {
    return this.http.delete(this.inventoryAPIUrl + `/Inventories/${id}`);
  }

  // Models
  getCarModelList(): Observable<any[]> {
    return this.http.get<any>(this.inventoryAPIUrl + '/CarModel');
  }

  getCarModelName(id: number): Observable<any[]> {
    return this.http.get<any>(this.inventoryAPIUrl + '/CarModel/' + id);
  }

  addCarModel(data: any) {
    return this.http.post(this.inventoryAPIUrl + '/CarModel', data);
  }

  updateCarModel(id: number | string, data: any) {
    return this.http.put(this.inventoryAPIUrl + `/CarModel/${id}`, data);
  }

  deleteCarModel(id: number | string) {
    return this.http.delete(this.inventoryAPIUrl + `/CarModel/${id}`);
  }

  // Statuses
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inventoryAPIUrl + '/Status');
  }

  addStatus(data: any) {
    return this.http.post(this.inventoryAPIUrl + '/Status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inventoryAPIUrl + `/Status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inventoryAPIUrl + `/Status/${id}`);
  }


}
