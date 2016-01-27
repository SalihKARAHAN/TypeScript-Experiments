module Core{
    export class Common{
        GetType(object:any):string{
            var name:string = Object.prototype.toString.call(object);
            return name;
        }
    }
}