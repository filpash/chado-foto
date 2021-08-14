import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggleNavigationMenu();
  }

  toggleNavigationMenu() {
    $(document).ready(function () {
      $('.header__burger').click(function () {
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock')
      })
    })
  }

}
