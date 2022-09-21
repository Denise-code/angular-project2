import { Component, OnInit, Input, ViewEncapsulation , OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-elemen',
  templateUrl: './server-elemen.component.html',
  styleUrls: ['./server-elemen.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None , Native
})
export class ServerElemenComponent implements OnInit , OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
   }


  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of the paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngDoCheck(): void {
      console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
      console.log('ngAfterContentInit sss');
      console.log('Text content of the paragraph: ' + this.paragraph.nativeElement.textContent);

  }
  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked dddd');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit dddd');
    console.log('Text content: ' + this.header.nativeElement.textContent);


  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked dddd');

  }
  ngOnDestroy(): void {
      console.log("ngOnDestroy called!");
  }

}
