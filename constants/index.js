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
        image: require('../assets/images/papaJohns.png'), // Update the image file name accordingly
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
            image: require('../assets/images/cheezyGarlicPizza.png'), // Update the image file name accordingly
          },
          {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'Classic Pepperoni Pizza',
            price: 12,
            image: require('../assets/images/pepperoniPizza.png'), // Update the image file name accordingly
          },
          // Add more dishes here
        ],
      },
      // Add more restaurants here
    ],
  };
  
  // Make sure to update the paths to the images accordingly.
  // Also, add more restaurants and dishes as per your requirement.
  