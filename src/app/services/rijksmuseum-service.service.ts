import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../rijksmuseum-workspace/collection';

@Injectable({
  providedIn: 'root',
})
export class RijksmuseumService {
  // move API_Key and Api_Root to environment variable
  private readonly apiKey = 'mskpm3VW';
  private readonly COLLECTION_URL =
    'https://www.rijksmuseum.nl/api/nl/collection';
  private DETAILS_URL = 'https://www.rijksmuseum.nl/api/nl/collection';

  constructor(private http: HttpClient) {}

  getData(searchTerm: string): Observable<Collection> {
    let params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', searchTerm)
      .set('ps', 21);
    return this.http.get<Collection>(this.COLLECTION_URL, { params });
  }

  getDetails(objectId: string) {
    const url = `${this.COLLECTION_URL}/${objectId}?key=${this.apiKey}`;
    return this.http.get(url);
  }
}
