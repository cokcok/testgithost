import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from '../model/data';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TestdataService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCourse(padding: number, limit: number): Observable<data> {
    const header = { 'Content-Type': 'application/json' };
    const apiUrl = this.config.ip + 'fecthdata_json.php';
    let data;
    data = {
      'padding': padding,
      'limit': limit,
    }
    return this.http.post<data>(apiUrl, data, { headers: header });
    }
}
