import { isValidShipPlacement } from "../validation/validation";
import { fieldArr } from "../test";
import { FieldCreate } from "./field-create/field-create";


export class MainMenu{
    menuDOM:HTMLElement;
    parentDOM:HTMLElement;
    createBtnDOM: HTMLElement;
    testDOM: HTMLElement;
    constructor(selector:HTMLElement){
        this.parentDOM = selector
        this.render()
        this.menuDOM = document.querySelector('.main_menu') as HTMLElement;
        this.createBtnDOM = document.querySelector('.create') as HTMLElement;
        this.testDOM = document.querySelector('.test') as HTMLElement;
        this.createBtnListener()
        this.testField()
    }
    render(){
        console.log(this.parentDOM)
        this.parentDOM.insertAdjacentHTML('beforeend', renderContent());
    }
    createBtnListener(){
        this.createBtnDOM.addEventListener('click',()=>{
            console.log(isValidShipPlacement(fieldArr,false))
        })
    }
    testField(){
        const test = new FieldCreate(this.testDOM)
    }
}

function renderContent():string{
    return`

        <section class="main_menu">
            <h2>Main Menu</h2>
            <button class="create">Create Room</button>
            <div class="rooms">
                <h3>Rooms</h3>
            </div>
            <div class="test"></div>
        </section>
    `
}