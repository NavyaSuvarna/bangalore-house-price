import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locations :string[];
  estimated_price;
  constructor(private appService:AppService) { }
  PriceDescription = new FormGroup({
   Locations: new FormControl(''),
   Bathrooms: new FormControl(''),
   Bedrooms: new FormControl(''),
   Total_sqft: new FormControl('')

  });
  bathrooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  bedrooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  ngOnInit() {
    this.appService.get_location_name().subscribe(response=>{
      this.locations = response['locations']
      console.log(location)
    })

  }
  onSubmit(){
    let data = this.PriceDescription.value;
    console.log(data)

    this.appService.predict_home_price( data['Total_sqft'],
    data['Locations'],
    data['Bathrooms'],
    data['Bedrooms']).subscribe(data=>{
      this.estimated_price = data['estimated_price']
    })
  }

}
