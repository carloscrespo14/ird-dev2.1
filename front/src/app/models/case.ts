export class Case {
    _id: string
    caseName:string
    sudject:string
    desc:string
    startDate:string
    finishDate:string
    constructor(_id:string, caseName:string,desc:string,startDate:string,finishDate:string){
       this._id = _id
       this.caseName = caseName
       this.desc = desc
       this.startDate = startDate
       this.finishDate = finishDate 
    }
}