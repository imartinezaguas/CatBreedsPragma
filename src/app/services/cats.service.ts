import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CatsBreed } from '../interface/cats';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { API_LIMIT_ITEMS, API_PAGINATION } from '../constants/api.constants';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CatsService {

  private catsByPage: {
    page: number;
    breeds: CatsBreed[];
  } = {
    page: 0,
    breeds: [],
  };

  constructor(private http: HttpClient) {}
  // Se puede usar un interceptor
  private executeQuery<T>(endpoint: string, params?: any): Observable<T> {
    return this.http.get<T>(`${apiUrl}${endpoint}`, {
      params: {
        api_key: apiKey,
        ...params,
      },
    }).pipe(
      catchError(error => {;
        return throwError(() => Error(`Error when querying the API Breeds: ${error}`))
      })
    );
  }

  public getBreeds(): Observable<CatsBreed[]> {

    return this.executeQuery<CatsBreed[]>('/breeds', {
      limit: API_LIMIT_ITEMS,
      page: this.catsByPage.page,
    }).pipe(
      map((breeds: CatsBreed[]) => {

        this.catsByPage = {
          page: this.catsByPage.page + API_PAGINATION,
          breeds: [...this.catsByPage.breeds, ...breeds],
        };

        return breeds;
      })
    );
  }

  public getCatById(id: string): CatsBreed | undefined {
    return this.catsByPage.breeds.find((cat) => cat.id === id);
  }
}
