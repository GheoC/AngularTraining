import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: User[] = [
    {
      id: 1,
      name:'John Smith',
      age: 17,
      gender: 'male',
      department: 'Accounting',
      company: 'Google',
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
    },
    {
      id: 2,
      name:'Will Smith',
      age: 33,
      gender: 'male',
      department: 'IT',
      company: 'Microsoft',
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
      
    },
    {
      id: 3,
      name: 'Maria Smith',
      age: 24,
      gender: 'female',
      department: 'Human Resources',
      company: 'IBM',
      imageUrl: "https://cdn.pixabay.com/photo/2023/01/16/09/04/woman-7721933_960_720.png"
      
    },
    {
      id: 4,
      name: 'Mike Smith',
      age: 40,
      gender: 'male',
      department: 'Accounting',
      company: 'IBM',
      imageUrl: "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg"
      
    },
    {
      id: 5,
      name: 'Sam Smith',
      age: 21,
      gender: 'male',
      department: 'IT',
      company: 'Google',
      imageUrl: "https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477_960_720.png"
    },
    {
      id: 6,
      name: 'Barbara Smith',
      age: 30,
      gender: 'female',
      department: 'Public Relations',
      company: 'Facebook',
      imageUrl: "https://cdn.pixabay.com/photo/2013/07/13/12/06/woman-159169_960_720.png"
      
    },
    {
      id: 7,
      name: 'Mike Smith',
      age: 31,
      gender: 'male',
      department: 'IT',
      company: 'Facebook',
      imageUrl: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
    },
    {
      id: 8,
      name: 'Jim Smith',
      age: 37,
      gender: 'male',
      department: 'IT',
      company: 'Facebook',
      imageUrl: "https://cdn.pixabay.com/photo/2022/01/20/08/16/man-6951711_960_720.png"
      
    },
    {
      id: 9,
      name: 'Jane Smith',
      age: 41,
      gender: 'female',
      department: 'Human Resources',
      company: 'Microsoft',
      imageUrl: "https://cdn.pixabay.com/photo/2022/05/23/07/03/woman-7215421_960_720.jpg"
    }
  ]

  getUsers(){
    return this.users
  }
}
