import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    form = new FormBuilder().group({
        'test': ['', [Validators.required]],
    });

    columns = [
        { prop: 'id', show: true },
        { prop: 'name', show: true },
        { prop: 'sirname', show: true },
    ];

    visibleColumns = [];

    data = [
        { id: 1, name: 'Name1', sirname: 'Sirname1' },
        { id: 2, name: 'Name2', sirname: 'Sirname2' },
        { id: 3, name: 'Name3', sirname: 'Sirname3' },
    ];

    ngOnInit() {
        this.updateVisibleColumns();
    }

    updateVisibleColumns() {
        this.visibleColumns = this.columns.filter(col => col.show).map(col => col.prop);
    }
}

