import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CatsBreed } from '../interface/cats';
import { catchError, map, Observable, of, throwError } from 'rxjs';

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

  public getBreeds(loadMore: boolean = false): Observable<CatsBreed[]> {
    if (!loadMore && this.catsByPage.breeds.length > 0) {
      return of(this.catsByPage.breeds);
    }

    const nextPage = this.catsByPage.page;

    return this.executeQuery<CatsBreed[]>('/breeds', {
      limit: 10,
      page: nextPage,
    }).pipe(
      map((breeds: CatsBreed[]) => {
        if (breeds.length === 0) return this.catsByPage.breeds;

        this.catsByPage = {
          page: nextPage + 1,
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
