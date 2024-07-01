import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserEmailInfo } from '../../models/UserEmailInfo';
import { UserSubscribedBatch } from '../../models/UserSubscribedBatch';
import { GetUserService } from '../../services/get-user.service';
import { DataTransferService } from '../../services/data-transfer.service';
import { UserAllInfo } from '../../models/UserInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-courses',
  templateUrl: './your-courses.component.html',
  styleUrls: ['./your-courses.component.scss']
})
export class YourCoursesComponent implements OnInit, OnDestroy {


  userEmailinfo: UserEmailInfo = { email: '', given_name: '', name: '', picture: '' };
  subscribedBatches: UserSubscribedBatch[] = [];
  userInfo: UserAllInfo | undefined;
  batches: any = [];
  row: UserSubscribedBatch[] = [];
  coursesBlock = false;

  private dataTransferSubscription$: any;
  private userServiceSubscription$: any;

  openDemoClass(demoClassURL: string) {
    window.open(demoClassURL, '_blank');
  }

  constructor(
    private userService: GetUserService,
    private dataTransferService: DataTransferService,
    private router: Router, ) { }

  ngOnInit(): void {
    
    
    this.dataTransferSubscription$ = this.dataTransferService.currentUserEmailInfo.subscribe(
      (data: UserEmailInfo) => {
        this.userEmailinfo = data;
        this.userServiceSubscription$ = this.userService.getUser(this.userEmailinfo.email).subscribe(
          (classData: UserAllInfo) => {
            this.userInfo = classData;
            this.subscribedBatches = this.userInfo.subscribedBatches;
            if(this.subscribedBatches.length > 0){
              this.coursesBlock = true;
            }
            console.log("this.UserSubscribedBatch:", this.subscribedBatches);
            this.rotatingBatches();
          },
          (error: any) => {
            console.log(error, "userService GetUser")
          }
        )
      },
      (error) => { console.log(error, "dashboard batchsuscriptionError") }

    )

  }

  ngOnDestroy() {

    this.userServiceSubscription$.unsubscribe();
    this.dataTransferSubscription$.unsubscribe();
    
  }

  rotatingBatches() {
    let j = 0;
    for (let i = 0; i < this.subscribedBatches.length / 3; i++) {
      let k = 0;
      while (k < 3 && j < this.subscribedBatches.length) {
        this.row[k] = this.subscribedBatches[j]
        j++;
        k++;
      }
      this.batches[i] = this.row;
      this.row = []
    }
  }

  onUpcomingBatchesButtonClick(){

          this.router.navigate(['/backend/user-dashboard/home']);
        }   
 
}
