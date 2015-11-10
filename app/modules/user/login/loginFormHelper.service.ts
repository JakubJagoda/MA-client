import GenericApiHelper from "../../../genericApiHelper.service";

export default class LoginFormHelperService extends GenericApiHelper {
    login(name:string, password:string) {
        console.log('1234', this.AppState);
        return this.AppState.login(name, password);
    }

    showIncorrectCredentialsAlert() {
        return navigator.notification.alert(`Login failed!`, () => {});
    }
}
