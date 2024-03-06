export const categories = [
    {
      id: 1,
      name: 'Pizza',
      image: require('../assets/images/pizza.png'), // Make sure this path is correct
    },
    {
      id: 2,
      name: 'Burger',
      image: require('../assets/images/burger.png'), // Update the image file name accordingly
    },
    {
      id: 3,
      name: 'Italian',
      image: require('../assets/images/pizza.png'), // Update the image file name accordingly
    },
    {
      id: 4,
      name: 'Chinese',
      image: require('../assets/images/chinese.png'), // Update the image file name accordingly
    },
    {
      id: 5,
      name: 'Noodles',
      image: require('../assets/images/noodle.png'), // Update the image file name accordingly
    },
    {
      id: 6,
      name: 'Sweets',
      image: require('../assets/images/sweet.png'), // Update the image file name accordingly
    },
  ];
  
  export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
      {
        id: 1,
        name: 'Papa Johns',
        image: require('../assets/images/pap.j.jpeg'),
        description: 'Hot and spicy pizza',
        lng: 38.2145602,
        lat: -85.5324269,
        address: '434 Second Street',
        stars: 4,
        reviews: '4.4k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Cheezy Garlic Pizza',
            description: 'Cheesy garlic flavored pizza',
            price: 10,
            image: require('../assets/images/cheezyGarlicPizza.png'),
          },
          {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'Classic Pepperoni Pizza',
            price: 12,
            image: require('../assets/images/pepperoniPizza.png'),
          },
        ],
      },
      {
        id: 2,
        name: 'Mama Mia Pizza',
        image: require('../assets/images/pap.j.jpeg'),
        description: 'Italian family pizza',
        lng: 38.215123,
        lat: -85.533456,
        address: '350 Third Street',
        stars: 5,
        reviews: '2.3k',
        category: 'Pizza',
        dishes: [
          {
            id: 3,
            name: 'Margherita Pizza',
            description: 'Classic Margherita with fresh mozzarella and basil',
            price: 8,
            image: require('../assets/images/cheezyGarlicPizza.png'), // Update path as needed
          },
          {
            id: 4,
            name: 'Meat Lovers Pizza',
            description: 'Loaded with pepperoni, ham, and sausage',
            price: 12,
            image: require('../assets/images/cheezyGarlicPizza.png'), // Update path as needed
          },
        ],
      },
      // Additional restaurants follow the same structure...
      {
        id: 5,
        name: 'Noodle House',
        image: require('../assets/images/pap.j.jpeg'),
        description: 'Authentic noodle dishes',
        lng: 38.218901,
        lat: -85.536789,
        address: '600 Sixth Street',
        stars: 4.8,
        reviews: '5k',
        category: 'Noodles',
        dishes: [
          {
            id: 9,
            name: 'Pad Thai',
            description: 'Stir-fried rice noodle dish with shrimp, peanuts, egg, and bean sprouts',
            price: 10,
            image: require('../assets/images/cheezyGarlicPizza.png'), // Update path as needed
          },
          {
            id: 10,
            name: 'Pho',
            description: 'Vietnamese noodle soup with beef, lime, and herbs',
            price: 12,
            image: require('../assets/images/cheezyGarlicPizza.png'), // Update path as needed
          },
        ],
      },
      // Add more restaurants here...
    ],
  };