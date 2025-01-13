import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'bd2da7b2805d44b2893181458250901'; 
  private apiUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  getCurrentWeather(query: string): Observable<any> {
    const params = new HttpParams().set('key', this.apiKey).set('q', query);
    return this.http.get(`${this.apiUrl}/current.json`, { params });
  }

  getForecast(query: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', query)
      .set('days', '3');
    return this.http.get(`${this.apiUrl}/forecast.json`, { params });
  }
}
