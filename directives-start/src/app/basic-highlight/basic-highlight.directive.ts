import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[appBasicHighlight]"
})
export class BasicHHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){
    }
    ngOnInit(): void {
        // OBS: Nao eh uma boa pratica acessar elementos diretamente. 
        // Nao usar assim. esta aqui somente como um primeiro passo
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}