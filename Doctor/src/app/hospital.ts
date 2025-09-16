import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from './models/hospital.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private base = "https://localhost:7138/api/Hospitals";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.base);
  }

  getById(id: string): Observable<Hospital> {
    return this.http.get<Hospital>(`${this.base}/${id}`);
  }

  add(h: Partial<Hospital>): Observable<Hospital> {
    return this.http.post<Hospital>(this.base, h);
  }

  update(h: Hospital): Observable<Hospital> {
    return this.http.put<Hospital>(`${this.base}/${h.hospitalId}`, h);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
