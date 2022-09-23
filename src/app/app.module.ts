import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { FilterPipeCarPipe } from './pipes/filter-car.pipe';
import { FilterPipeColorPipe } from './pipes/filter-color.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { MonthlyPriceAddedPipe } from './pipes/monthly-price-added.pipe';
import { FilterModelPipePipe } from './pipes/filter-brand.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

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
    VatAddedPipe,
    MonthlyPriceAddedPipe,
    FilterModelPipePipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
