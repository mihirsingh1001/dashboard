import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output () toggleSideBarForMe : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() =>{
     window.dispatchEvent(  
         new Event('resize')
     )
   }, 3000);
   }

}
