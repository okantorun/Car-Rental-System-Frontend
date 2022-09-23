import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44360/api/rentals/';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }

  checkIfAnyReservationsBetweenSelectedDates(
    carId: number,
    rentDate: string,
    returnDate: string
  ): Observable<SingleResponseModel<boolean>> {
    let newPath =
      this.apiUrl +
      'checkifanyreservationsbetweenselecteddates?carId=' +
      carId +
      '&rentDate=' +
      rentDate +
      '&returnDate=' +
      returnDate;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }
}
