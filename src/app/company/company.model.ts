export class Company {
    public company_id : number;
    public company_name: string;
    public company_desc: string;
    
    constructor(id:number, name:string, desc:string){
        this.company_id = id;
        this.company_name = name;
        this.company_desc = desc;
    }
}