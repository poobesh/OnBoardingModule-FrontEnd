import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
export interface Employee {

    "id": number,
    "email": string,
    "version": number,
    "first_name": string,
    "last_name": string,
    "dob": Date,
    "blood_type": string,
    "gender": string,
    "date_of_joining": Date,
    "permanent_address": string,
    "pan_number": string,
    "skill_id"?: number,
    "skill_1"?:string,
    "skill_2"?:string,
    "skill_3"?:string,
    "experience": number,
    "phone_number": number,
    "current_address": string,
    "designation": string,
    "bank_ac_no": number,
    "ifsc_code"?:string,
    "branch"?:string,
    "name"?:string,
    "demand_id": number,
    "bgc": boolean,
    "c_pincode": number,
    "p_pincode": number

}

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};