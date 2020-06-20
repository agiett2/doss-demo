import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';
import { LinksInterface } from 'src/app/core/model/links.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public bgColor: string;
  @Input() public textColor: string;
  public links: LinksInterface[] = [];

  constructor(public contentService: ContentServcieAbstract) {}

  ngOnInit(): void {
    this.links = [
      {
        title: 'buy',
        path: '/buyer',
        dropdown: true,
        id: 'buyerDropdown',
        children: [
          { title: 'consultation', path: '/buyer-consultation' },
          { title: 'steps', path: '/buyer-steps' },
          { title: 'faq', path: '/buyer-faq' }
      ],
      },
      { title: 'sell', path: '/seller' },
      { title: 'rent', path: '/rent' },
      { title: 'about', path: '/about' },
      { title: 'franchising', path: '/franchising' },
    ];
    // const navBar = document.getElementById('navbar');
    // const sticky = navBar.offsetTop;
    // console.log(
    //   ` navnar offsetTop: ${sticky}, widow pageYOffSet: ${window.pageXOffset}`
    // );

    // window.onscroll = () => this.myFunction(navBar, sticky);

    const burgerBtn = document.querySelector('.burger-icon');
    burgerBtn.addEventListener('click', function() {
      document.querySelector('.doss-mobile-navbar').classList.toggle('hide')
    });

    const buyBtn = document.querySelector('.buy-button');
    buyBtn.addEventListener('click', function() {
      document.querySelector('.buy-drop').classList.toggle('hide');
    })

  }

  private myFunction = (navBar: HTMLElement, stickyLocation: number) => {
    window.pageYOffset > stickyLocation
      ? navBar.classList.add('sticky')
      : navBar.classList.remove('sticky');
  }



}
