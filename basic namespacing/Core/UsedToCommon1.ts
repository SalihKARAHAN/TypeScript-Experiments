/// <reference path="Common.ts" />

module Core{
    export class UsedToCommon1{
        Call(){
            var common:Common = new Common();
            alert(common.GetType(this));
        }
    }
}