import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { FilterPipeCarPipe } from './pipes/filter-pipe-car.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { MonthlyPriceAddedPipe } from './pipes/monthly-price-added.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailPageComponent,
    FilterPipeCarPipe,
    FilterPipeColorPipe,
    FilterPipeBrandPipe,
    VatAddedPipe,
    MonthlyPriceAddedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
