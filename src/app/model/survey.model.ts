
export class Survey
{
    constructor(
    public title?: string,
    public type?: string,   
    public startdate?: Date,
    public enddate?: Date,
    public username?: string,
    public question?: Array<string>
    ){}
}