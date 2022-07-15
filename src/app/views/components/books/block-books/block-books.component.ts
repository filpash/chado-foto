import { Component, OnInit, Inject } from '@angular/core';
import { BOOKS } from "../../../../core/tokens";
import { IBooks } from "../../../../models/IBooks";

@Component({
  selector: 'app-block-books',
  templateUrl: './block-books.component.html',
  styleUrls: ['./block-books.component.scss']
})
export class BlockBooksComponent implements OnInit {

  constructor(@Inject(BOOKS) public books: IBooks[]) { }

  ngOnInit(): void {}

  get itemBooks(): IBooks[] {
    return this.books;
  }

}
