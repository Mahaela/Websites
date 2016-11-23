import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    @HostListener('mouseenter') mouseover() {
        this.backgroundColor = this.highlightColor;
    };
    @HostListener('mouseleave') mouseleave() {
        this.backgroundColor = this.defaultColor;
    };
    //using get makes the property read only
    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    }

    @Input() defaultColor = 'white';
    //'highlight is the name to the outside
    @Input('highlight') highlightColor = 'green';
    private backgroundColor = 'white';
  //  constructor(private elementRef: ElementRef, private renderer: Renderer) {
       // this.elementRef.nativeElement.style.backgroundColor = 'green';  
        //using renderer is a better technique
       // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
    //}

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }
}
