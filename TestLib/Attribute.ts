
module Library {
    export class Attribute implements IRenderable {
        private _name: string; // private değişken tanımlama
        private _value: string;

        constructor(name: string, value: string) {
            this._name = name;
            this._value = value;
        }

        RenderToHtml(domOjbect: IRenderable): void {
            // TODO: rendering... _name+'="'+_value+'"'
        }
    }
}
