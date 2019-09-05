import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {NgModule} from '@angular/core';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
