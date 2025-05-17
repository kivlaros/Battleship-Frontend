import "./auth.css";
import socket from "../router";
import { type AuthData } from "../../types/types";

export class Auth {
  authDOM: HTMLFormElement;
  parentDOM: HTMLElement;
  constructor(selector: HTMLElement) {
    this.parentDOM = selector;
    this.render();
    this.authDOM = document.querySelector(".form") as HTMLFormElement;
    this.eventHandler();
  }
  render() {
    console.log(this.parentDOM);
    this.parentDOM.insertAdjacentHTML("beforeend", renderContent());
  }
  destroy() {
    this.authDOM.style.display = "none";
  }
  eventHandler() {
    this.authDOM.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(this.authDOM);
      console.log("Username:", data.get("username"));
      console.log("Password:", data.get("password"));

      const message: AuthData = {
        type: 'reg',
        data: {
          name: data.get("username") as string,
          password: data.get("password") as string,
        },
        id: null,
      };

      socket.send(JSON.stringify(message));
    });
  }
}

function renderContent(): string {
  return `

    <div class="form-container">
        <h2>Welcome</h2>
        <form class="form">
            <div class="form-group">
                <input name="username" type="text" placeholder="Username" required>
            </div>
            <div class="form-group">
                <input name="password" type="password" placeholder="Password" required>
            </div>
            <div class="button-group">
                <button type="submit" class="login-btn">Log In</button>
                <button type="button" class="signup-btn">Sign Up</button>
            </div>
        </form>
    </div>
    `;
}
