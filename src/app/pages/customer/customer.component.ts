import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  tabs: any[] = [
    {
      title: 'Route tab #1',
      route: '/pages/layout/tabs/tab1',
    },
    {
      title: 'Route tab #2',
      route: '/pages/layout/tabs/tab2',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
    actions: {
      add: false,
      columnTitle: '',
      position: 'right'
    },

    mode: 'external',
    hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: false
    },
    noDataMessage: 'Nenhum cliente encontrado'
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSearch(query: string = '') {

    if(!query || query == ''){
      // this.source.refresh();
      this.source.setFilter(null);
    }
    else{
      this.source.setFilter([
        // fields we want to include in the search
        {
          field: 'id',
          search: query
        },
        {
          field: 'firstName',
          search: query
        },
        {
          field: 'username',
          search: query
        },
        {
          field: 'email',
          search: query
        }
      ], false, true);
    }

   
  }

}
