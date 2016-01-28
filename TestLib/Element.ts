namespace Library {
     export abstract class Element implements IRenderable {
        private _uid:number;
        protected _name: string;
        protected _attributes: Attribute[];
        protected _events: Event[];
        protected _childs: Element[];

        constructor(){
            this._uid = new Date().getTime();
        }

        static Render(element:IRenderable): void{
            element.RenderToHtml();
        }

        abstract RenderToHtml():void;

    }
}
