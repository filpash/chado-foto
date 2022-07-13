import { Component, OnInit, Inject } from '@angular/core';
import { CAROUSEL } from "../../../../core/tokens";
import { ICarousel } from "../../../../models/ICarousel";

@Component({
  selector: 'app-block-service',
  templateUrl: './block-service.component.html',
  styleUrls: ['./block-service.component.scss']
})
export class BlockServiceComponent implements OnInit {

  constructor(
    @Inject(CAROUSEL) public carousel: ICarousel[]
  ) { }

  ngOnInit(): void {}

  get slideItems(): ICarousel[] {
    return this.carousel;
  }

}
