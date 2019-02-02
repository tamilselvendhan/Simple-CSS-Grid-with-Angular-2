import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sampleAngular2';
  peopleDet: any = [];
  queryString: string = "";  

  private people = [
      {
        "name": "Andrew Amernante",
        "rating": 3,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      },
      {
        "name": "Frank Wang",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
        "Likes": [
          "Frank",
          "Manchester United",
          "Football",
          "Programming"
        ],
        "Dislikes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ]
      },
      {
        "name": "Sissi Chen",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems.",
        "Likes": [
          "Cats",
          "the beach",
          "Chopin",
          "Blue things"
        ],
        "Dislikes": [
          "Birds"
        ]
      },
      {
        "name": "Diego Garcia",
        "rating": 2,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad.",
        "Likes": [
          "Talking Spanish",
          "Spanish food",
          "Spanish things",
          "Football"
        ],
        "Dislikes": [
          "Not talking spanish",
          "Chopin"
        ]
      },
      {
        "name": "Fuad Rashid",
        "rating": 4,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      }
    ]
  
    fav = [
    {
      id: '0', color: '#ccc'
    },
    {
      id: '1', color: '#ccc'
    },
    {
      id: '2', color: '#ccc'
    },
    {
      id: '3', color: '#ccc'
    },
    {
      id: '4', color: '#ccc'
    }
    ];

  constructor() {}

  ngOnInit() {
    this.peopleDet = this.people[0];
    this.giveColor(this.peopleDet.rating);
  }

    getPeopleDetails(item: any) {
      console.log(item.rating);
      this.peopleDet = item;
      this.giveColor(this.peopleDet.rating);
    }

    favourite(index) {
       this.peopleDet.rating = index + 1;
       this.giveColor(index + 1);
    }

    giveColor(rating) {
      for (let i = 0; i < this.fav.length; i ++) {
        if (i < rating) {
          this.fav[i].color = 'red';
        } else {
          this.fav[i].color = '#ccc';
        }
      }
    }
  
    clearSearchText() {
      this.queryString = '';
    }

    sendMessage() {
      alert('Hello!');
    }
    
}
