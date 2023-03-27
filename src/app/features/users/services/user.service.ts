import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpService } from '../../../services';
import { IUser } from '../models/user.model';
const TEMP_USERS = [
    {id:'1111', name:'testName', tasks:'WIP', email:'a@a.com', department:'dept', salary:'1124455'},
    {id:'2222', name:'testName1', tasks:'WIP1', email:'b@b.com', department:'dept1', salary:'2244556'},
    {id:'3333', name:'testName2', tasks:'WIP2', email:'c@c.com', department:'dept2', salary:'1123'}
]

@Injectable()
export class UserService {
    private users$ = new BehaviorSubject<IUser[]>([...TEMP_USERS])

    constructor(private http: HttpService) {
    }

    addUser(user: IUser) {

        const currentUsers = this.users$.getValue()
        console.log(currentUsers)
        this.users$.next([...currentUsers, user]);
        console.log(this.users$.getValue());
    }

    updateUser(user: IUser) {
        const currentUsers: IUser[] = this.users$.getValue();
        const index = currentUsers.findIndex(ele => ele.id === user.id);
        currentUsers[index]= {...user};
        this.users$.next([...currentUsers]);
    }

    deleteUser(id:string){
        const currentUsers: IUser[] = this.users$.getValue();
        const index = currentUsers.findIndex(ele => ele.id === id);
        if(index > -1){
            console.log("ind",index)
            currentUsers.splice(index,1)
            this.users$.next([...currentUsers]);
        }
       
        
    }

    getUsers() {
        return this.users$.asObservable()
    }

    getUser(id: string) {
        const currentUsers: IUser[] = this.users$.getValue()
        return currentUsers.find(ele => ele.id === id)
    }
}
