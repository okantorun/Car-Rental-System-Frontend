import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  cars: Car[] = [];
  carImagePaths:string[]=[];
  carDetail:Car;
  dataLoaded = false;
  imageUrl:string="https://localhost:44360/Uploads/images/"

  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
      }
    })
  }

  getCarDetailsById(carId:Car) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.cars = response.data;
      this.carDetail=response.data[0];

      this.carImagePaths=this.carDetail.imagePath;
      this.dataLoaded = true;
    });
  }


}
