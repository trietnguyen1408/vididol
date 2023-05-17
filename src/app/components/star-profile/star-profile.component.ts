import { Component, OnInit } from '@angular/core';
import { StarProfile } from 'src/app/model/star-profile';
import { StarProfileService } from 'src/app/services/star-profile.service';

@Component({
  selector: 'app-star-profile',
  templateUrl: './star-profile.component.html',
  styleUrls: ['./star-profile.component.less']
})
export class StarProfileComponent implements OnInit {

  starprofile : StarProfile;

  constructor(private starprofileService: StarProfileService) { }

  ngOnInit() {
    this.getStarProfile();
    this.starprofile.featureVideoUrl
  }

   /**
   * A function to get star profile when the web is initialized
   */
  getStarProfile(): void {
    this.starprofileService.getStarProfile().subscribe(starprofile => this.starprofile = starprofile);
  }
}
