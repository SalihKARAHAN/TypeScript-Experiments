/// <reference path="Common.ts" />

module Core{
    export class UsedToCommon2{
        Call(){
            var common:Common = new Common();
            alert(common.GetType(""));
        }
    }
}