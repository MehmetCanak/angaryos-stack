import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AeroThemeHelper } from './../../../aero.theme';
import { BaseHelper } from './../../../base';

declare var $: any;

@Component(
{
    selector: 'time-element',
    styleUrls: ['./time-element.component.scss'],
    templateUrl: './time-element.component.html'
})
export class TimeElementComponent
{
    @Input() value: string;
    @Input() name: string;
    @Input() class: string;
    @Input() placeholder: string;
    @Input() showFilterTypesSelect: boolean;
    @Input() filterType: string;

    val = "";

    @Output() changed = new EventEmitter();

    constructor(private aeroThemeHelper: AeroThemeHelper) {}

    ngAfterViewInit()
    {
        this.elementOperations();
    }

    async waitForInputmaskLibrary()
    {
        await BaseHelper.waitForOperation(() => $('test').inputmask() );
    }

    async elementOperations()
    {      
        await this.waitForInputmaskLibrary();

        this.addInputMask();
    }

    ngOnChanges()
    {
        this.val = this.value;
    }

    addInputMask()
    {
        $('[name="'+this.name+'"]').inputmask('h:s:s', 
        {
            hourFormat: '24',
            alias: 'time',//            alias: 'datetime',
            placeholder: '__:__:__',
            oncomplete: (event) => this.changed.emit(event),
            oncleared: (event) => this.changed.emit(event)
        });
    }
}