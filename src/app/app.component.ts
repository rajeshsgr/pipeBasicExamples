import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeBasicExamples';

  gymList = [
    {
      name: 'Planet Fitness',
      type: 'Anytime Fitness',
      location: 'River Ridge',
      price: '25',
      currency: 'USD',
      started: new Date("January 31 1980 ")

    },
    {
      name: 'Ochsner Fitness  Centre',
      type: 'Luxury Fitness',
      location: 'Elmwood',
      price: '2100',
      currency: 'INR',
      started: new Date(2015, 11, 10)
    },
    {
      name: 'Snap Fitness',
      type: 'Cross Fit',
      location: 'Kenner',
      price: '40',
      currency: 'CAD',
      started: new Date(2012, 3, 7)
    },
    {
      name: 'Nola Fitness',
      type: 'Aerobics/Gymnstics',
      location: 'Metairie',
      price: '40',
      currency: 'GBP',
      started: new Date(2014, 10, 18)

    }
  ];
}

