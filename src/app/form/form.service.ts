import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankDataPayload, PredictionResponse } from './form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:5000/predict';

  constructor(private http: HttpClient) {}

  sendData(formData: BankDataPayload): Observable<PredictionResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<PredictionResponse>(this.apiUrl, formData, {
      headers,
    });
  }
}
