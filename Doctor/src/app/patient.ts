import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './models/patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private base = "https://localhost:7138/api/Patients";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.base);
  }

  getById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.base}/${id}`);
  }

  add(p: Partial<Patient>): Observable<Patient> {
    return this.http.post<Patient>(this.base, p);
  }

  update(p: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.base}/${p.patientId}`, p);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
