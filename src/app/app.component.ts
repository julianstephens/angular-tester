import { Component, OnInit } from '@angular/core';

interface IUIFilter {
  name: string;
  parent: string;
  hasSubmenu: boolean;
  objectProp: string;
  value?: any;
}

enum DateOpts {
  D1 = '1-7 Days',
  D2 = '8-14 Days',
  D3 = '14-21 Days',
  D4 = '21-35 Days',
  D5 = '35+ Days',
}

enum CustomerTypeOpts {
  CT1 = 'Pro',
  CT2 = 'Homeowner',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-tester';
  filterCounts: { [key: string]: number } = {};

  filters: { [key: string]: IUIFilter } = {
    dateRange: {
      name: 'Date Range',
      parent: 'Date Range',
      hasSubmenu: true,
      objectProp: 'dateRange',
      value: 'Date Range',
    },
    createdTS: {
      name: 'Since created',
      parent: 'Date Range',
      hasSubmenu: false,
      objectProp: 'createdTS',
      value: Object.values(DateOpts),
    },
    pickedUpTS: {
      name: 'Since picked up',
      parent: 'Date Range',
      hasSubmenu: false,
      objectProp: 'pickedUpTS',
      value: Object.values(DateOpts),
    },
    customerType: {
      name: 'Customer Type',
      parent: 'Customer Type',
      hasSubmenu: false,
      objectProp: 'customerType',
      value: Object.values(CustomerTypeOpts),
    },
  };

  selectedFilters: { [key: string]: any } = {};

  ngOnInit(): void {
    Object.keys(this.filters).forEach((f) => (this.selectedFilters[f] = null));
  }

  logChange(change: any) {
    console.log('CHANGE: ', change);
  }

  /**
   * Gets filter by name
   * @param name
   * @returns filter or undefined if not found
   */
  getFilterOpts(name: string): IUIFilter {
    const res = Object.values(this.filters).filter(
      (f) => f.name.toLowerCase() === name.toLowerCase()
    )[0];
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
    const res = filters.filter(
      (f) => f.parent.toLowerCase() === filter.name.toLowerCase()
    );
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
