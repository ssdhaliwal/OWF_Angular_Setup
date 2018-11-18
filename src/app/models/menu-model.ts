import { MenuItem } from 'primeng/api';

export class MenuModel {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Owf/App',
        icon: 'pi pi-fw pi-paperclip',
        items: [
          {
            label: 'OWF Core',
            icon: 'pi pi-fw pi-info',
            command: null
          },
          {
            label: 'App Config',
            icon: 'pi pi-fw pi-list',
            command: null
          }
        ]
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        items: [{
          label: 'Info',
          icon: 'pi pi-fw pi-tablet',
          command: null
        },
        { separator: true },
        {
          label: 'UUID',
          icon: 'pi pi-fw pi-key',
          command: null
        },
        {
          label: 'Summary',
          icon: 'pi pi-fw pi-eye',
          command: null
        },
        { separator: true },
        {
          label: 'Details',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Dashboards',
              icon: 'fa fa-dashboard',
              command: null
            },
            {
              label: 'Groups',
              icon: 'fa fa-group',
              command: null
            },
            {
              label: 'Widgets',
              icon: 'fa fa-window-restore',
              command: null
            }
          ]
        }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'About',
            icon: 'pi pi-fw pi-info',
            command: null
          },
          {
            label: 'Refresh',
            icon: 'pi pi-fw pi-refresh',
            command: null
          }
        ]
      }
    ];
  }
}
