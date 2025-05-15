import './cell.css'
import { Cell } from './cell';
import { isValidShipPlacement } from '../../validation/validation';
import type { Coord } from '../../types/types';

export class FieldCreate{
    isFinish: boolean
    field: number[][]
    parentDOM:HTMLElement;
    fieldDOM: HTMLElement;
    constructor(parentDOM:HTMLElement){
        this.isFinish = false
        this.parentDOM = parentDOM
        this.field = this.generate10x10()
        console.log(this.field)
        this.render()
        this.fieldDOM = document.querySelector('.field') as HTMLElement
        this.createField()
    }
    generate10x10():number[][]{
        return Array.from({ length: 10 }, () => 
        Array.from({ length: 10 }, () => 0)
);
    }
    render(){
        this.parentDOM.insertAdjacentHTML('beforeend', renderContent());
    }

    createField(){
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                const coord = {
                    x:i,
                    y:j
                }
                new Cell(this,this.fieldDOM,coord)
            }
        }
    }

    changeFild(coord:Coord){
        console.log('chenge')
        this.field[coord.x][coord.y] = 1
        console.log(this.field)
        if(isValidShipPlacement(this.field,true))this.isFinish=true
    }
    isValide(coord:Coord){
        const fieldString = JSON.stringify(this.field)
        let arr = JSON.parse(fieldString)
        arr[coord.x][coord.y] = 1
        return isValidShipPlacement(arr,false)
    }
}

function renderContent(){
    return`
        <div class="field"></div>
    `
}

