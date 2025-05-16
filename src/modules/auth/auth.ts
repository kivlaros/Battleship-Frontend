import './auth.css'

export class Auth{
    authDOM:HTMLElement;
    parentDOM:HTMLElement;
    constructor(selector:HTMLElement){
        this.parentDOM = selector
        this.render()
        this.authDOM = document.querySelector('.main_menu') as HTMLElement;
    }
    render(){
        console.log(this.parentDOM)
        this.parentDOM.insertAdjacentHTML('beforeend', renderContent());
    }
    destroy(){
        this.authDOM.style.display = "none"
    }
}

function renderContent():string{
    return`

    <div class="form-container">
        <h2>Welcome</h2>
        <form>
            <div class="form-group">
                <input type="text" placeholder="Username" required>
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" required>
            </div>
            <div class="button-group">
                <button type="submit" class="login-btn">Log In</button>
                <button type="button" class="signup-btn">Sign Up</button>
            </div>
        </form>
    </div>
    `
}