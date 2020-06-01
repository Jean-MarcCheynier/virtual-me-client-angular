import { Component, OnInit } from '@angular/core';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  release: any[];

  constructor(private diaryService : DiaryService) { }

  ngOnInit() {
    this.showReleaseDiary();
  }

  showReleaseDiary(){
    this.diaryService.getRelease()
      .subscribe((res: any) => this.release = res.data.repository.releases.edges )
  }

}
