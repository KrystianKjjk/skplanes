import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { UserInfo } from "firebase";

export interface Credentials {
    email: string;
    password;
}
@Injectable({providedIn:"root"})
export class AuthService{
    private userData: UserInfo;

    constructor(private fireAuth: AngularFireAuth){}
    login(credentials: Credentials){
        return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(userCredential => this.userData = userCredential.user);
    }
    register(credentials: Credentials){
        return this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(credentials.email, credentials.password)
    }

    loguot()
    {
        return this.fireAuth.auth.signOut();
    }
    IsLoggedIn()
    {
        return !!this.userData;
    }
    get user()
    {
        return this.userData;
    }
}