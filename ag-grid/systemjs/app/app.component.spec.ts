import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {AppComponent} from "./app.component";
import {AgGridModule} from "ag-grid-angular";

describe('GridComponent Tests', () => {

    let gridComponent: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    // if you're not using templateUrls you can use something like this all in one beforeEach
    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         imports: [AgGridModule.withComponents([])], // import the AgGridModule
    //         declarations: [AppComponent],              // declare the test component
    //     });
    //
    //     fixture = TestBed.createComponent(AppComponent);
    //
    //     gridComponent = fixture.componentInstance;      // AppComponent test instance
    // });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AgGridModule.withComponents([])], // import the AgGridModule
            declarations: [AppComponent],              // declare the test component
        }).compileComponents();  // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);

        gridComponent = fixture.componentInstance;      // AppComponent test instance
    })

    it('grid API is not available until  `detectChanges`', () => {
        expect(gridComponent.gridOptions.api).not.toBeTruthy();
    });

    it('grid API is available after `detectChanges`', () => {
        fixture.detectChanges();
        expect(gridComponent.gridOptions.api).toBeTruthy();
    });

    it('select all button selects all rows', () => {
        fixture.detectChanges();
        gridComponent.selectAllRows();
        expect(gridComponent.gridOptions.api.getSelectedNodes().length).toEqual(3);
    });
});