import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faApple, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpFromBracket,
  faBell,
  faBookmark,
  faCalendar,
  faChartColumn,
  faCommentAlt,
  faEarth,
  faEllipsis,
  faEnvelope,
  faFaceSmile,
  faHashtag,
  faHeart,
  faHome,
  faImage,
  faList,
  faLocationDot,
  faMagnifyingGlass,
  faRetweet,
  faStar,
  faTimes,
  faUserAlt,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

import { FeaturesModule } from './features/features.module';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
    AppRoutingModule,
    AuthModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTwitter,
      faGoogle,
      faApple,
      faTimes,
      faHome,
      faHashtag,
      faBell,
      faEnvelope,
      faBookmark,
      faList,
      faUserAlt,
      faEllipsis,
      faStar,
      faEarth,
      faImage,
      faVideo,
      faChartColumn,
      faFaceSmile,
      faCalendar,
      faLocationDot,
      faCommentAlt,
      faRetweet,
      faHeart,
      faArrowUpFromBracket,
      faMagnifyingGlass
    );
  }
}
