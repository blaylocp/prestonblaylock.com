export default function() {

  this.get('/api/v1/skills', function() {
    return {
      data: [{
        type: 'skill',
        id: 1,
        attributes: {
          name: 'Sass',
          image: '/assets/images/skills/sass.png'
        }
      }, {
        type: 'skill',
        id: 2,
        attributes: {
          name: 'Drupal',
          image: '/assets/images/skills/drupal.png'
        }
      }, {
        type: 'skill',
        id: 3,
        attributes: {
          name: 'Ember',
          image: '/assets/images/skills/ember.png'
        }
      }, {
        type: 'skill',
        id: 4,
        attributes: {
          name: 'jQuery',
          image: '/assets/images/skills/jQuery.png'
        }
      }, {
        type: 'skill',
        id: 5,
        attributes: {
          name: 'Compass',
          image: '/assets/images/skills/compass.png'
        }
      }, {
        type: 'skill',
        id: 6,
        attributes: {
          name: 'AngularJS',
          image: '/assets/images/skills/angular.png'
        }
      }, {
        type: 'skill',
        id: 7,
        attributes: {
          name: 'MySQL',
          image: '/assets/images/skills/mysql.png'
        }
      }, {
        type: 'skill',
        id: 8,
        attributes: {
          name: 'Wordpress',
          image: '/assets/images/skills/wordpress.png'
        }
      }]
    };
  });


  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
