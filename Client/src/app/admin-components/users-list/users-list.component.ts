import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any = [];
  userToDelete: any;
  isConfirmationModalOpen: boolean = false;

  constructor(private myservice: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.myservice.getAllUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

 
  showDeleteConfirmation(user: any) {
    this.userToDelete = user;
    this.isConfirmationModalOpen = true;
  }


  closeConfirmationModal() {
    this.isConfirmationModalOpen = false;
  }


  deleteUser(userId: number) {
    this.myservice.deleteUser(userId).subscribe({
      next: (data: any) => {
        console.log(`User with ID ${userId} deleted successfully.`);
        this.getUsers();
        this.closeConfirmationModal(); 
      },
      error: (err: any) => {
        console.log(`Error deleting user with ID ${userId}: ${err}`);
        this.closeConfirmationModal(); 
      }
    });
  }
}
