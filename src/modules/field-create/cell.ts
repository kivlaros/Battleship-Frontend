import { FieldCreate } from "./field-create";
import { type Coord } from "../../types/types";

export class Cell{
    value:number
    parentDOM:HTMLElement;
    cellDOM:HTMLElement;
    parent: FieldCreate
    coord:Coord
    constructor(parent:FieldCreate, parentDOM:HTMLElement,coord:Coord){
        this.parent =parent
        this.parentDOM = parentDOM
        this.coord = coord
        this.value = 0
        this.render()
        this.cellDOM = document.querySelector(`.cell${coord.x}${coord.y}`) as HTMLElement
        this.eventHandler()
    }
    render(){
         this.parentDOM.insertAdjacentHTML('beforeend', renderContent(this.value,this.coord))
    }
    eventHandler(){
        this.cellDOM.addEventListener('click',()=>{
            console.log(`Я клетка с координатами x:${this.coord.x} y:${this.coord.y}`)
        })
    }
}

function renderContent(value:number,coord:Coord):string{
    return`
        <div class="cell cell${coord.x}${coord.y}">${value}</div>
    `
}