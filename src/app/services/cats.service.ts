import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CatsBreed } from '../interface/cats';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_LIMIT_ITEMS, API_PAGINATION } from '../constants/api.constants';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

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

  private executeQuery<T>(endpoint: string, params?: any): Observable<T> {
    return this.http
      .get<T>(`${API_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
          ...params,
        },
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const customError = {
            status: error.status,
            message: error.message,
            url: error.url,
            error: error.error,
          };
          return throwError(() =>
            Error(`Error when querying the API Breeds: ${customError}`)
          );
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
