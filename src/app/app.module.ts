import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarketTradeComponent } from './market-trade/market-trade.component';
import { TradingFormComponent } from './market-trade/trading-form/trading-form.component';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from "@angular/material/table";
import { MessageService } from "./service/MessageService";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MarketTradeComponent,
    TradingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [MessageService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
