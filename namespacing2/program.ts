/// <reference path="util.ts" />

module Library {
    export class Program{
        Main(){
            var util = new Core.Util();
            alert(util.GetType(""));
        }
    }
}