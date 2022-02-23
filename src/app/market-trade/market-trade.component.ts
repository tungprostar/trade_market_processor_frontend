import { Component, OnInit } from '@angular/core';
import {TradeMessageResponse} from "../interfaces/TradeMessage";
import {MessageService} from "../service/MessageService";

@Component({
  selector: 'app-market-trade',
  templateUrl: './market-trade.component.html',
  styleUrls: ['./market-trade.component.css']
})
export class MarketTradeComponent implements OnInit {

  dataSource!: TradeMessageResponse[];
  displayedColumns: string[] = ['amountSell', 'amountBuy', 'timePlaced'];

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.messageService.fetchTradeMessageHistory("134256").subscribe((res: any) => {
        this.dataSource = res;
      })
    }, 3000);
  }

}
