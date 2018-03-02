import { Component } from '@angular/core';

import { CozePage } from '../coze/coze';
import { FriendsPage } from '../friends/friends';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CozePage;
  tab2Root = FriendsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
