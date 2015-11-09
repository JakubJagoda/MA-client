import GenericApiHelper from "../../../genericApiHelper.service";

export default class LoginFormHelperService extends GenericApiHelper {
    login(name:string, password:string) {
        return this.AppState.login(name, password);
    }
}
