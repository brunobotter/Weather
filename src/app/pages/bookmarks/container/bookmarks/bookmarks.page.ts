import { Store, select } from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BookmarksState } from '../../state/bookmarks.redecer';
import * as fromBookmarksSelectors from '../../state/bookmarks.selector';
import * as fromBookmarksActions from '../../state/bookmarks.actions';

@Component({
  selector: 'jv-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss']
})
export class BookmarksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]>;

  constructor(private store: Store<BookmarksState>) {
  }

  ngOnInit() {
    this.bookmarks$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarksActions.removeBookmark({ id }));
  }
}