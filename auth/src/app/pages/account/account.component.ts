
import { Component} from '@angular/core';
import { AccountService } from '../../services/account.service';


export interface Accounts {
    accountNumber: string;
    accountViewName: string;
    clientShortName: string;
    balance: string;
    accountCurrency: string;
    accountCurrencyName: string;
  }

/*
  const ELEMENT_DATA: Accounts[] = [
    {
      "accountNumber": "BY46AKBB30120000001830000000",
      "accountViewName": "\c0\u1053 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077 _\u1085 \u1072 \u1079 \u1074 \u1072 \u1085 \u1080 \u1077  \u1076 \u1083 \u1103  \u1090 \u1077 \u1089 \u1090 \u1072 ",
      "clientShortName": "\c0\u1052 \u1054 \u1041 \u1048 \u1051 \u1068 \u1053 \u1067 \u1049  \u1041 \u1040 \u1053 \u1050 \u1048 \u1053 \u1043  \u1058 \u1045 \u1057 \u1058 \u1054 \u1042 \u1067 \u1049  \u1050 \u1051 \u1048 \u1045 \u1053 \u1058 ",
      "balance": "4974.43",
      "accountCurrency": "EUR",
      "accountCurrencyName": "\c0\u1045 \u1042 \u1056 \u1054 "
    },
    {
      "accountNumber": "BY43AKBB30132299100196500000",
      "accountViewName": "\c0\u1058 \u1077 \u1082 \u1091 \u1097 \u1080 \u1081  (\u1088 \u1072 \u1089 \u1095 \u1077 \u1090 \u1085 \u1099 \u1081 )",
      "clientShortName": "\c0\u1052 \u1054 \u1041 \u1048 \u1051 \u1068 \u1053 \u1067 \u1049  \u1041 \u1040 \u1053 \u1050 \u1048 \u1053 \u1043  \u1058 \u1045 \u1057 \u1058 \u1054 \u1042 \u1067 \u1049  \u1050 \u1051 \u1048 \u1045 \u1053 \u1058 ",
      "balance": "58236.65",
      "accountCurrency": "BYN",
      "accountCurrencyName": "\c0\u1041 \u1045 \u1051 \u1054 \u1056 \u1059 \u1057 \u1057 \u1050 \u1048 \u1049  \u1056 \u1059 \u1041 \u1051 \u1068 "
    },
    {
      "accountNumber": "BY53AKBB30120000018380000000",
      "accountViewName": "\c0\u1057 \u1095 \u1077 \u1090  \u1089  \u1074 \u1099 \u1087 \u1080 \u1089 \u1082 \u1086 \u1081 @",
      "clientShortName": "\c0\u1052 \u1054 \u1041 \u1048 \u1051 \u1068 \u1053 \u1067 \u1049  \u1041 \u1040 \u1053 \u1050 \u1048 \u1053 \u1043  \u1058 \u1045 \u1057 \u1058 \u1054 \u1042 \u1067 \u1049  \u1050 \u1051 \u1048 \u1045 \u1053 \u1058 ",
      "balance": "1951.71",
      "accountCurrency": "BYN",
      "accountCurrencyName": "\c0\u1041 \u1045 \u1051 \u1054 \u1056 \u1059 \u1057 \u1057 \u1050 \u1048 \u1049  \u1056 \u1059 \u1041 \u1051 \u1068 "
    },
    {
      "accountNumber": "BY54AKBB30120000001760000000",
      "accountViewName": "TestInRU",
      "clientShortName": "\c0\u1052 \u1054 \u1041 \u1048 \u1051 \u1068 \u1053 \u1067 \u1049  \u1041 \u1040 \u1053 \u1050 \u1048 \u1053 \u1043  \u1058 \u1045 \u1057 \u1058 \u1054 \u1042 \u1067 \u1049  \u1050 \u1051 \u1048 \u1045 \u1053 \u1058 ",
      "balance": "0.00",
      "accountCurrency": "RUB",
      "accountCurrencyName": "\c0\u1056 \u1054 \u1057 \u1057 \u1048 \u1049 \u1057 \u1050 \u1048 \u1049  \u1056 \u1059 \u1041 \u1051 \u1068 "
    },
    {
      "accountNumber": "BY05AKBB30124290700200000933",
      "accountViewName": "\c0\u1058 \u1077 \u1082 \u1091 \u1097 \u1080 \u1081  (\u1088 \u1072 \u1089 \u1095 \u1077 \u1090 \u1085 \u1099 \u1081 )",
      "clientShortName": "\c0\u1052 \u1054 \u1041 \u1048 \u1051 \u1068 \u1053 \u1067 \u1049  \u1041 \u1040 \u1053 \u1050 \u1048 \u1053 \u1043  \u1058 \u1045 \u1057 \u1058 \u1054 \u1042 \u1067 \u1049  \u1050 \u1051 \u1048 \u1045 \u1053 \u1058 ",
      "balance": "0.00",
      "accountCurrency": "BYN",
      "accountCurrencyName": "\c0\u1041 \u1045 \u1051 \u1054 \u1056 \u1059 \u1057 \u1057 \u1050 \u1048 \u1049  \u1056 \u1059 \u1041 \u1051 \u1068 ",
    }
  ];
  */
  

@Component({
    selector: 'account-app',
    templateUrl: `./account.html`,    
    styleUrls: ['./accounts.css'],

})


export class AccountComponent {

    constructor(private account: AccountService)
    {}

    displayedColumns: string[] = ['accountNumber', 'accountViewName', 'clientShortName', 'balance', 'accountCurrency', 'accountCurrencyName'];
    dataSource = this.account.getAccountsList();

    //dataSource = ELEMENT_DATA;

}

