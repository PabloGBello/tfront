import {
  Component,
  OnInit,
  NgZone,
  Input,
  ViewEncapsulation
} from '@angular/core';
import {
  TranslateService,
  LangChangeEvent
} from '@ngx-translate/core';
import {
  AppConfig
} from '../../../configs/app.config';


import {
    MenuItem
} from 'primeng/primeng';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {

    @Input() display: boolean;

    items: MenuItem[] = [];

    translations: any;

    constructor(
        private zone: NgZone,
        private appConfig: AppConfig,
        private translate: TranslateService
    ) {
        this.translate.reloadLang(this.translate.currentLang).subscribe( res => {
            this.setItems(res);
        });
    }

    ngOnInit() {
        this.translate.onLangChange.subscribe( () => {
            this.translate.reloadLang(this.translate.currentLang).subscribe( res => {
                this.setItems(res);
            });
        });
    }

  setItems(translations: any) {
    this.items = [{
        // label: translations.titles.menu,
        items: [{
          label: translations.titles.home,
          icon: 'fa fa-fw fa-home',
          routerLink: ['/dashboard']
        }]
      },
      {
        // label: translations.titles.geo,
        items: [{
            label: translations.titles.my_tracks,
            icon: 'fa fa-fw fa-car',
            routerLink: ['/user/tracks']
        },
        {
            label: translations.titles.sumarized_tracks,
            icon: 'fa fa-fw fa-globe',
            routerLink: ['/sumarized-tracks']
        }]
      },
      {
        // label: translations.titles.admin,
        items: [{
            label: translations.titles.reparations,
            icon: 'fa fa-fw fa-wrench',
            routerLink: ['/admin/reparations']
          },
          {
          label: translations.titles.tools,
          icon: 'fa fa-fw fa-cog',
          routerLink: ['/admin/tools']
        }]
      },
      {
        // label: translations.titles.profile,
        items: [{
          label: translations.titles.user_edit,
          icon: 'fa fa-fw fa-pencil',
          routerLink: ['/user/edit']
        }]
      }
    ];
  }

}
