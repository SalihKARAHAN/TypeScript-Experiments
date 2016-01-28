namespace Application{

    import els = Library.Elements;

    export class Program {
        Main(): void {

            var container = document.getElementById('container');
            var selectElement: Library.Elements.SelectElement = new Library.Elements.SelectElement(container);
            var secondSelectElement: els.SelectElement = new els.SelectElement(container);
            
            selectElement.RenderToHtml();


        }
    }
}
