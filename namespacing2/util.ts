module Library.Core{
    export class Util{
        GetType(object: any):string{
            var typeName:string = Object
                                    .prototype
                                    .toString
                                    .call(object);
            return typeName;
        }
    }
}