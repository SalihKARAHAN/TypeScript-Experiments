/// <reference path="Core/UsedToCommon1.ts" />
/// <reference path="Core/UsedToCommon2.ts" />

module App{
    import Common1 = Core.UsedToCommon1; // alias
    import Common2 = Core.UsedToCommon2;
    
    export class Main{
        Caller(){
            var com1: Common1 = new Common1();
            com1.Call();
            var com2: Common2 = new Common2();
            com2.Call();
        }
    }
}