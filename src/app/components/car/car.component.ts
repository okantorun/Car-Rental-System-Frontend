import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  filterBrandId:number=1;
  filterColorId:number=1;
  filterCar="";
  
  dataLoaded = false;
  imageUrl = "https://localhost:44360/Uploads/Images/"
  currentCar:Car | null
  
  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }
      else if(params['colorId']) {
        this.getCarsByColor(params['colorId']);
      }
      else {
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImage(car:Car){
    let path = this.imageUrl + car.imagePath[0];
    return path;
  }

  setCurrentCarDetail(car:Car){
    this.currentCar=car
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }

  getCarsByFilter(filterBrandId:number,filterColorId:number){
    this.carService.getCarsByFilter(filterBrandId,filterColorId).subscribe(response=>{
      this.cars = response.data
    })
  }
}
