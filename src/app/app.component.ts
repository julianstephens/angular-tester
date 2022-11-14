import { Component } from '@angular/core';

interface IUIFilter {
  name: string;
  parent: string;
  hasSubmenu: boolean;
  objectProp?: string;
  value?: any;
}

enum DateOpts {
  '1-7 Days',
  '8-14 Days',
  '14-21 Days',
  '21-35 Days',
  '35+ Days',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-tester';
  filterCounts: { [key: string]: number } = {};

  filters: { [key: string]: IUIFilter } = {
    dateRange: {
      name: 'Date Range',
      parent: 'Date Range',
      hasSubmenu: true,
      value: 'Date Range',
    },
    createdTS: {
      name: 'Since created',
      parent: 'Date Range',
      hasSubmenu: false,
      objectProp: 'createdTS',
      value: DateOpts['1-7 Days'],
    },
    pickedUpTS: {
      name: 'Since picked up',
      parent: 'Date Range',
      hasSubmenu: false,
      objectProp: 'pickedUpTS',
      value: DateOpts['8-14 Days'],
    },
    customerType: {
      name: 'Customer Type',
      parent: 'Customer Type',
      hasSubmenu: false,
      objectProp: 'customerType',
      value: true,
    },
  };

  selectedFilters: { [key: string]: any } = {};

  /**
   * Gets filter by name
   * @param name
   * @returns filter or undefined if not found
   */
  getFilterOpts(name: string): IUIFilter {
    const res = Object.values(this.filters).filter(
      (f) => f.name.toLowerCase() === name.toLowerCase()
    )[0];
    console.log(res.hasSubmenu);
    return res;
  }

  /**
   * Gets filter's submenu
   * @param parent filter
   * @returns list of children filters
   */
  getSubmenu(filter: IUIFilter): IUIFilter[] {
    const filters = Object.values(this.filters).filter(
      (f) => f.name.toLowerCase() !== filter.name.toLowerCase()
    );
    console.log(filters);
    const res = filters.filter(
      (f) => f.parent.toLowerCase() === filter.name.toLowerCase()
    );
    console.log(res);
    return res;
  }

  /**
   * Filter orders on click event
   * @param prop to filter by
   */
  filterOrderList(prop: string) {
    switch (prop) {
      case 'createdTS':
        const val = this.filters['createdTS'].value;
        if (!val) return;
        // 1. check val type
        // 2. build query
        // 3. filter list
        break;

      default:
        break;
    }
  }
}
