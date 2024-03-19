import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilityService {
  convertObjectToQueryString(obj: any): string {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p) && obj[p] !== null && obj[p] !== undefined) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

  genUniqueId(): string {
    const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

    const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

    return `${dateStr}-${randomStr}`;
  }

  validateTimeFormat(time: string): boolean {
    // time format is HH:mm
    const regex = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$');
    return regex.test(time);
  }

  mintuesToHours(minutes: number): string {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;

    // padding zero hours and minutes
    let hoursStr = hours.toString();
    if (hours < 10) {
      hoursStr = '0' + hours;
    }

    let minsStr = mins.toString();
    if (mins < 10) {
      minsStr = '0' + mins;
    }

    return `${hoursStr}:${minsStr}`;
  }
}
