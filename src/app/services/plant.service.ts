import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plant} from "../types/plant";

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get("http://localhost:8080/api/plant")
  }

  findById(id: number) {
    return this.http.get('http://localhost:8080/api/plant/' + id);
  }

  save(plant: Plant) {
    console.log("saving", plant);
    return this.http.post('http://localhost:8080/api/plant', plant)
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/plant/' + id)
  }

}
