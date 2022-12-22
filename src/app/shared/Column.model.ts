export class Column {
    public columnDef: string;
    public header: string;
    public cell: Function;
    public isLink?: boolean;
    public url?: string;

    constructor(columnDef:string, header:string, cell:Function, isLink:boolean, url: string){
        this.columnDef = columnDef;
        this.header = header;
        this.cell = cell;
        this.isLink = isLink;
        this.url = url;
    }
}