import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css'],
})
export class CarDetailPageComponent implements OnInit {
  cars: Car[] = [];
  carImagePaths: string[] = [];
  carDetail: Car;
  dataLoaded = false;
  rentalPeriod: number;
  rentDate: string;
  returnDate: string;
  rentalConfirmation: SingleResponseModel<boolean>;
  validateRentalDates: boolean = false;
  imageUrl: string = 'https://localhost:44360/Uploads/images/';

  constructor(
    private carService: CarService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
      }
    });
  }

  getCarDetailsById(carId: Car) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.cars = response.data;
      this.carDetail = response.data[0];
      this.carImagePaths = this.carDetail.imagePath;
      this.dataLoaded = true;
    });
  }

  checkIfAnyReservationsBetweenSelectedDates(
    carId: number,
    rentDate: string,
    returnDate: string
  ) {
    if (!carId || !rentDate || !returnDate) {
      return;
    }
    this.validateReservationDates(rentDate, returnDate);
    if (this.validateRentalDates === true) {
      this.rentalService
        .checkIfAnyReservationsBetweenSelectedDates(carId, rentDate, returnDate)
        .subscribe((response) => {
          this.rentalConfirmation = response;
          console.log("geldiii-"+this.rentalConfirmation.data);
        });
    }
  }

  validateReservationDates(rentDate: string, returnDate: string) {
    if (!rentDate || !returnDate) {
      return;
    }
    let newRentDate = this.convertStringToDate(rentDate);
    let newReturnDate = this.convertStringToDate(returnDate);
    if (newRentDate >= newReturnDate) {
      this.validateRentalDates = false;
    } else {
      this.validateRentalDates = true;
    }
  }

  calculateRentalPeriod() {
    this.rentalPeriod = this.getRentalPeriod(
      this.convertStringToDate(this.rentDate),
      this.convertStringToDate(this.returnDate)
    );
  }

  getRentalPeriod(rentDate: Date, returnDate: Date): number {
    let hours = Math.abs(returnDate.getTime() - rentDate.getTime());
    let days = Math.ceil(hours / (1000 * 3600 * 24));
    return days;
  }

  convertStringToDate(dateString: string) {
    return new Date(dateString);
  }

  getDateNow() {
    let date = new Date();
    let returnStr = this.formatDate(date);
    return returnStr;
  }

  formatDate(date: Date) {
    return date.toLocaleDateString().split(".").reverse().join("-");
  }

  addDayToDate(date: Date, addedDay: number) {
    let newDate = date;
    newDate.setDate(date.getDate() + addedDay);
    let returnString = this.formatDate(newDate);
    return returnString;
  }
}
