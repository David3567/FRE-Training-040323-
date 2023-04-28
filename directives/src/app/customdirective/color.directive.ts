import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() colorpass!: string;
  @Input() defaultColor = '';

  @HostListener('mouseenter')
  onMouserEnter() {
    this.highlighting(this.colorpass || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouserLeave() {
    this.highlighting('');
  }

  @HostBinding('disabled') disable: boolean = true;
  @HostBinding('style.border') border: string = "5px solid blue";

  constructor(private ele: ElementRef) { }


  highlighting(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
