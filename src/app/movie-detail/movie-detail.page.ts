import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: false,
})
export class MovieDetailPage implements OnInit {

  movieId: string = '';
  movie: any;

   movies = {
  'demon-slayer': {
    title: 'Demon Slayer',
    genre: 'Action / Fantasy',
    description: 'A young swordsman fights demons to save his sister.',

    banner: 'assets/images/demonslayer.jpg',

    gallery: [
      'assets/images/demonslayer1.jpg',
      'assets/images/demonslayer2.jpg',
      'assets/images/demonslayer3.jpg'
    ]
  },

  'jujutsu-kaisen': {
    title: 'Jujutsu Kaisen',
    genre: 'Action / Fantasy',
    description: 'A student becomes involved in the world of cursed spirits.',

    banner: 'assets/images/jujutsukaisen.jpg',

    gallery: [
      'assets/images/jujutsu1.jpg',
      'assets/images/jujutsu2.jpg',
      'assets/images/jujutsu3.jpg'
    ]
  },

  'chainsaw-man': {
    title: 'Chainsaw Man',
    genre: 'Action / Horror',
    description: 'A young man gains the ability to transform into Chainsaw Man.',

    banner: 'assets/images/chainsawman.jpg',

    gallery: [
      'assets/images/chainsawman1.jpg',
      'assets/images/chainsawman2.jpg',
      'assets/images/chainsawman3.jpg'
    ]
  },

  'your-name': {
    title: 'Your Name',
    genre: 'Romance / Fantasy',
    description: 'Two teenagers mysteriously find themselves connected across time and distance.',

    banner: 'assets/images/yourname.jpg',

    gallery: [
      'assets/images/yourname1.jpg',
      'assets/images/yourname2.jpg',
      'assets/images/yourname3.jpg'
    ]
  },

  'spongebob-squarepants': {
    title: 'SpongeBob SquarePants',
    genre: 'Comedy / Animation',
    description: 'The adventures of a cheerful sponge living in Bikini Bottom.',

    banner: 'assets/images/spongebob.jpg',

    gallery: [
      'assets/images/spongebob1.jpg',
      'assets/images/spongebob2.jpg',
      'assets/images/spongebob3.jpg'
    ]
  }
};
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';

    this.movie = this.movies[this.movieId as keyof typeof this.movies];
  }

}
