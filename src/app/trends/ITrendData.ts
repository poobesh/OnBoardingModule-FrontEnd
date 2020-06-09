import {map} from 'rxjs/operators';

export interface ITrendData {
	map(arg0: (a: any) => any): (number | number[])[] | import("chart.js").ChartPoint[];
    required_employee_count: number ,
    company_name: string,
	year: number
}