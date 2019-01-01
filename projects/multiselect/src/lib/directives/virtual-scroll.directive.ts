import { Directive, HostListener, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  top: HTMLElement
  bottom: HTMLElement
  scrollOffset = 0
  @Input() itemHeight: number = 40
  @Input() totalCount: number
  @Output() rangeChanged = new EventEmitter<any>()
  private scrollTimer
  private lastScrollFireTime = 0
  constructor(private el: ElementRef) { }

  throttleScroll(target) {
    const { scrollTop, clientHeight, scrollHeight } = target;
    const totalHeight = this.itemHeight * this.totalCount + this.scrollOffset + clientHeight;
    if(this.el.nativeElement.querySelectorAll('.option').length < 5) return
    // TODO: remove below number conversion
    if (Number(scrollTop) === (totalHeight - clientHeight)) return;
    // Step: 1 - Calculate the position
    const topSpacing = scrollTop;
    const maxItemsRange = (clientHeight - this.scrollOffset) / this.itemHeight

    // Step: 2 - What are the possible collection that can be rendered
    const rangeOffset = topSpacing % this.itemHeight
    const rangeStart = topSpacing - rangeOffset
    const topNonVisible = topSpacing / this.itemHeight
    const itemStartRange = Math.floor(topNonVisible + 1)
    const calculatedEndRange = Math.ceil(itemStartRange) + maxItemsRange
    const itemEndRange = calculatedEndRange > this.totalCount ? this.totalCount : calculatedEndRange
    const bottomSpacing = totalHeight - (rangeStart + clientHeight) + rangeOffset

    console.log(itemStartRange, itemEndRange, bottomSpacing, rangeStart+200+bottomSpacing, (rangeStart+clientHeight+bottomSpacing)=== scrollHeight)

    // Step: 3 - Pass the range to the child directive (probably custom *ngFor)
    this.top.style.height = topSpacing + 'px';
    this.bottom.style.height = bottomSpacing + 'px';
    console.log('All heights', topSpacing, bottomSpacing, scrollHeight)
    this.rangeChanged.emit({ start: itemStartRange - 1, end: itemEndRange - 1 })
  }

  @HostListener('scroll', ['$event']) 
  onscroll({ target }) {
    const minScrollTime = 200;
    const now = new Date().getTime();

    if (!this.scrollTimer) {
      if (now - this.lastScrollFireTime > (3 * minScrollTime)) {
        this.lastScrollFireTime = now;
      }
      this.scrollTimer = setTimeout(() => {
        this.scrollTimer = null;
        this.lastScrollFireTime = new Date().getTime();
        console.dir(target)
        this.throttleScroll(target) 
      }, minScrollTime);
    }
  }

  ngAfterViewInit() {
    // TODO: later think of usng ViewChild, instead of direct DOM manipulation.
    this.top = this.el.nativeElement.querySelector('.top')
    this.bottom = this.el.nativeElement.querySelector('.bottom')
    this.top.style.height = this.el.nativeElement.scrollTop + 'px';
    this.bottom.style.height = this.itemHeight * this.totalCount + this.scrollOffset - 200 + 'px';
  }

}
