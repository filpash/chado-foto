import { Component, OnInit, Inject } from "@angular/core";
import { COLLAPSE, WINDOW } from "../../../../core/tokens";
import { ICollapse } from "../../../../models/ICollapse";
import baguetteBox from 'baguettebox.js';


@Component({
  selector: 'app-block-portfolio',
  templateUrl: './block-portfolio.component.html',
  styleUrls: ['./block-portfolio.component.scss']
})

export class BlockPortfolioComponent implements OnInit {

  constructor(
    @Inject(WINDOW) public window: Window,
    @Inject(COLLAPSE) public collapse: ICollapse[],
  ) {
    this.initBaguetteBox();
  }

  ngOnInit() {}

  get collapseItems(): ICollapse[] {
    return this.collapse;
  }

  public initBaguetteBox() {
    this.window.addEventListener('load', function () {
      baguetteBox.run('.gallery');
    })
  }
}
