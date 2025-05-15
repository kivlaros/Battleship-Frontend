import './cell.css'
import { Cell } from './Cell';


export class FieldCreate{
    field: number[][]
    parentDOM:HTMLElement;
    fieldDOM: HTMLElement;
    constructor(parentDOM:HTMLElement){
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
}

function renderContent(){
    return`
        <div class="field"></div>
    `
}

