import images from "./images";

export const MOCK_USERS = [
  {
    id: 1,
    email: "test@example.com",
    username: "testuser",
    password: "password123",
  },
  {
    id: 2,
    email: "john@example.com",
    username: "johndoe",
    password: "password123",
  },
];

export const categories = [
  { id: "1", title: "Cars", imagePath: images.carImage },
  { id: "2", title: "Bikes", imagePath: images.bikeImage },
  { id: "3", title: "CNG", imagePath: images.autoImage },
  { id: "4", title: "Truck &\nBuses", imagePath: images.busImage },
];

export const promoBanners = [images.bannerImage];

export const featuredProducts = [
  { id: "1", title: "PIAA Air Filter\nPT108", imagePath: images.gvItem1 },
  { id: "2", title: "PIAA Oil Filter\nZ8M", imagePath: images.gvItem2 },
  { id: "3", title: "PIAA Air Filter\nPT83", imagePath: images.gvItem3 },
  { id: "4", title: "PIAA Air Filter\nPT108", imagePath: images.gvItem1 },
  { id: "5", title: "PIAA Oil Filter\nZ8M", imagePath: images.gvItem2 },
  { id: "6", title: "PIAA Air Filter\nPT83", imagePath: images.gvItem3 },
];
