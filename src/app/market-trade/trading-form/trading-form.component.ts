import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {MessageService} from "../../service/MessageService";
import {TradeMessageRequest} from "../../interfaces/TradeMessage";
import * as moment from 'moment';

@Component({
  selector: 'app-trading-form',
  templateUrl: './trading-form.component.html',
  styleUrls: ['./trading-form.component.css']
})
export class TradingFormComponent implements OnInit {

  myForm!: FormGroup;
  rate: number

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.rate = 0.7471;
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'amountSell': 0,
      'amountBuy': [{value: 0, disabled: true}]
    })
  }

  updateBuyPrice() {
    this.myForm.patchValue({'amountBuy': this.myForm.get('amountSell')?.value * this.rate})
  }

  submitSell() {
    const request: TradeMessageRequest = {
      userId: '134256',
      currencyFrom: 'EUR',
      currencyTo: 'GBP',
      amountSell: this.myForm.get('amountSell')?.value,
      amountBuy: this.myForm.get('amountBuy')?.value,
      rate: this.rate,
      timePlaced: moment().format('DD-MMM-YYYY HH:mm:ss'),
      originatingCountry: 'FR'
    }


    this.messageService.processMessage(request).subscribe();
  }
}
