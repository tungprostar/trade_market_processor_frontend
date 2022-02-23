export interface TradeMessageRequest {
  userId: string;
  currencyFrom: string;
  currencyTo: string;
  amountSell: number;
  amountBuy: number;
  rate: number;
  timePlaced: string;
  originatingCountry: string;
}

export interface TradeMessageResponse {
  amountSell: number;
  amountBuy: number;
  timePlaced: string;
}
