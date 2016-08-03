import Ember from 'ember';

// var items = [
//   {'id': 1, 'name': 'CMC Live Letstruck', 'img': '/assets/images/portfolio/cmc-letstruck.jpg'},
//   {'id': 2, 'name': 'Agri-Service', 'img': '/assets/images/portfolio/agri-service.jpg'},
//   {'id': 3, 'name': 'Dora & Eugene Wedding', 'img': '/assets/images/portfolio/eugene-dora-wedding.jpg' },
//   {'id': 4, 'name': 'Castlerock Homes', 'img': '/assets/images/portfolio/chridaho.jpg'},
//   {'id': 7, 'name': 'Mesa Falls Upper Fall', 'img': '/assets/images/portfolio/mesa-upper-falls.jpg', 'height': 'one-half'},
//   {'id': 6, 'name': 'Bird', 'img': '/assets/images/portfolio/bird.jpg', 'height': 'two-half'},
//   {'id': 5, 'name': 'Cornerstone Counseling', 'img': '/assets/images/portfolio/cornerstonecounseling.jpg'},
//   {'id': 8, 'name': 'Modern Programming', 'img': '/assets/images/portfolio/modern-programming.jpg', 'height': 'one-half'},
//   {'id': 9, 'name': 'MTNTK', 'img': '/assets/images/portfolio/mtntk.jpg'},
//   {'id': 10, 'name': 'Type Study', 'img': '/assets/images/portfolio/type-practice.jpg', 'height': 'one-half'},
//   {'id': 11, 'name': 'Logo Development', 'img': '/assets/images/portfolio/logo-example.jpg' },
//   {'id': 12, 'name': 'Dora & Eugene Engagement', 'img': '/assets/images/portfolio/eugene-dora-engagement.jpg' },
//   {'id': 13, 'name': 'Mesa Falls Lower Fall', 'img': '/assets/images/portfolio/mesa-lower-falls.jpg'},
//   {'id': 14, 'name': 'Noelle & Spencer Engagement', 'img': '/assets/images/portfolio/spencer-noelle-engagement.jpg', 'height': 'two'},
//   {'id': 14, 'name': 'Unleash Your Creativity', 'img': '/assets/images/portfolio/unleash-your-creativity.jpg', 'height': 'two-half'},
//   // {'id': 14, 'name': 'Mother New York', 'img': '/assets/images/portfolio/spencer-noelle-engagement.jpg', 'height': 'two'},
//
// ];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('portfolio');
  }
});
