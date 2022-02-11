import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerBasic } from './datepicker-basic';

import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePTParserFormatter } from './CustomDatePickerI18n/NgbDatePTParserFormatter';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePickerI18n, I18n } from './CustomDatePickerI18n/CustomDatePickerI18n';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [NgbdDatepickerBasic],
  exports: [NgbdDatepickerBasic],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatePickerI18n }],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
],
  bootstrap: [NgbdDatepickerBasic]
})
export class NgbdDatepickerBasicModule {}
