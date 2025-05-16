import './style.css'
import { MainMenu } from './modules/main-menu';
import { Auth } from './modules/auth/auth';

class App{
  appDOM: HTMLElement;
  contentDOM: HTMLElement;
  mainMenu: MainMenu;
  auth: Auth;
  constructor(){
    this.start()
    this.appDOM = document.getElementById('app') as HTMLElement;
    this.render()
    this.contentDOM = document.querySelector('.content') as HTMLElement;
    this.mainMenu = new MainMenu(this.contentDOM)
    this.auth = new Auth(this.contentDOM)
  }
  start(){
    console.log('start')
  }
  render(){
     this.appDOM.insertAdjacentHTML('beforeend', renderContent());
  } 
}

const app = new App()

function renderContent():string{
    return`
        <h1>Battleship</h1>
        <section class="content"></section>
    `
}