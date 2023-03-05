export class Epmloyee
 {
    id:number=0;
    name:string | undefined;
    lastName: string='';
    email: string='';
    age: number | undefined;
    doj: any;
    gender: string='male';
    isMarried: number | undefined;
    isActive: number | undefined;
    designationID: number=0;
    designation: string='';
 }
 export class Designation {
    id:number=0;
    designation:string='';
  }