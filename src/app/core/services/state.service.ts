import { Injectable } from '@angular/core';
import { StateInterface } from 'src/app/shared/interfaces/state.interface';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    constructor() {}

    public getStates(): StateInterface[] {
        return [
            { name: 'ALABAMA', value: 'AL'},
            { name: 'ALASKA', value: 'AK'},
            { name: 'AMERICAN SAMOA', value: 'AS'},
            { name: 'ARIZONA', value: 'AZ'},
            { name: 'ARKANSAS', value: 'AR'},
            { name: 'CALIFORNIA', value: 'CA'},
            { name: 'COLORADO', value: 'CO'},
            { name: 'CONNECTICUT', value: 'CT'},
            { name: 'DELAWARE', value: 'DE'},
            { name: 'DISTRICT OF COLUMBIA', value: 'DC'},
            { name: 'FEDERATED STATES OF MICRONESIA', value: 'FM'},
            { name: 'FLORIDA', value: 'FL'},
            { name: 'GEORGIA', value: 'GA'},
            { name: 'GUAM', value: 'GU'},
            { name: 'HAWAII', value: 'HI'},
            { name: 'IDAHO', value: 'ID'},
            { name: 'ILLINOIS', value: 'IL'},
            { name: 'INDIANA', value: 'IN'},
            { name: 'IOWA', value: 'IA'},
            { name: 'KANSAS', value: 'KS'},
            { name: 'KENTUCKY', value: 'KY'},
            { name: 'LOUISIANA', value: 'LA'},
            { name: 'MAINE', value: 'ME'},
            { name: 'MARSHALL ISLANDS', value: 'MH'},
            { name: 'MARYLAND', value: 'MD'},
            { name: 'MASSACHUSETTS', value: 'MA'},
            { name: 'MICHIGAN', value: 'MI'},
            { name: 'MINNESOTA', value: 'MN'},
            { name: 'MISSISSIPPI', value: 'MS'},
            { name: 'MISSOURI', value: 'MO'},
            { name: 'MONTANA', value: 'MT'},
            { name: 'NEBRASKA', value: 'NE'},
            { name: 'NEVADA', value: 'NV'},
            { name: 'NEW HAMPSHIRE', value: 'NH'},
            { name: 'NEW JERSEY', value: 'NJ'},
            { name: 'NEW MEXICO', value: 'NM'},
            { name: 'NEW YORK', value: 'NY'},
            { name: 'NORTH CAROLINA', value: 'NC'},
            { name: 'NORTH DAKOTA', value: 'ND'},
            { name: 'NORTHERN MARIANA ISLANDS', value: 'MP'},
            { name: 'OHIO', value: 'OH'},
            { name: 'OKLAHOMA', value: 'OK'},
            { name: 'OREGON', value: 'OR'},
            { name: 'PALAU', value: 'PW'},
            { name: 'PENNSYLVANIA', value: 'PA'},
            { name: 'PUERTO RICO', value: 'PR'},
            { name: 'RHODE ISLAND', value: 'RI'},
            { name: 'SOUTH CAROLINA', value: 'SC'},
            { name: 'SOUTH DAKOTA', value: 'SD'},
            { name: 'TENNESSEE', value: 'TN'},
            { name: 'TEXAS', value: 'TX'},
            { name: 'UTAH', value: 'UT'},
            { name: 'VERMONT', value: 'VT'},
            { name: 'VIRGIN ISLANDS', value: 'VI'},
            { name: 'VIRGINIA', value: 'VA'},
            { name: 'WASHINGTON', value: 'WA'},
            { name: 'WEST VIRGINIA', value: 'WV'},
            { name: 'WISCONSIN', value: 'WI'},
            { name: 'WYOMING', value: 'WY' }
        ];
    }
}


