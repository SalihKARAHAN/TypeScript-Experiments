/// <reference path="util.ts" />

module Namespacing2{
    export class Program{
        Main(){
            var util = new Library.Core.Util();
            alert(util.GetType(""));
        }
    }
}