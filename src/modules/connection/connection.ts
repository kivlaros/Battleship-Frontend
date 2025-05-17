import './connection.css'

export class Connection{
    connectionDOM:HTMLElement;
    parentDOM:HTMLElement;
    constructor(selector:HTMLElement){
        this.parentDOM = selector
        this.render()
        this.connectionDOM = document.querySelector('.main_menu') as HTMLElement;
        this.hideDisplay()
    }
    render(){
        console.log(this.parentDOM)
        this.parentDOM.insertAdjacentHTML('beforeend', renderContent());
    }
    hideDisplay(){
        if(this.connectionDOM.style.display=='none'){
            this.connectionDOM.style.display ='flex'
        }else{
            this.connectionDOM.style.display = "none"
        }
    }
}

function renderContent():string{
    return`
    <div class="connection-overlay">
        <button class="close-btn">&times;</button>
        
        <div class="connection-content" data-status="connecting">
            <i class="connection-icon fas fa-spinner fa-spin"></i>
            <div class="connection-text">Подключение...</div>
        </div>
    </div>
    `
}