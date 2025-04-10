import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'    // garante que o serviço seja injetado corretamente em toda a aplicação, sem a necessidade de importá-lo em cada módulo.
})
export class UtilsService {
  private apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios';

  constructor(private http: HttpClient) {}

  getCidades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}