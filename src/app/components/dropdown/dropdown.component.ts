import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Output() btnClick = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
      this.btnClick.emit();
  }

}
