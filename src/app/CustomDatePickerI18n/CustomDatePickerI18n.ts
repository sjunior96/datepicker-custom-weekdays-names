import { TranslationWidth } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
    'en-us': {
        weekdays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
};

@Injectable()
export class I18n {
    language = 'en-us';
}

@Injectable()
export class CustomDatePickerI18n extends NgbDatepickerI18n {
    constructor(private _i18n: I18n) {
        super();
    }

    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    }

    getMonthShortName(month: number): string {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    }

    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }

    getDayAriaLabel(date: import('@ng-bootstrap/ng-bootstrap').NgbDateStruct): string {
      return date.day.toString();
    }

    getWeekdayLabel(weekday: number, width?: TranslationWidth) { return I18N_VALUES[this._i18n.language].weekdays[weekday-1]; }
}