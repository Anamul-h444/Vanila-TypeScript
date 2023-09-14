//Practice one
type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};

const airplane: Airplane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Food Ltd",
    address: "Uttra, Dhak, Bangladesh",
    phone: 1735678909,
  },
};

//Practice two
type Books = { title: string; Pages: number; isbn: string };
type Genres = string[];
type BookTypes = "national" | "academic" | "public";
type Members = { name: string; phone: string; [key: string]: string };
type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: BookTypes;
  books: Books[];
  genres: Genres;
  members: Members[];
};

const library: Library = {
  name: "Dhaka library",
  address: "Dhaka cantonment",
  numberOfBooks: 1234,
  type: "national", //'national', 'academic', 'public'
  books: [
    {
      title: "History of Bangladesh",
      Pages: 79,
      isbn: "1972-10-03",
    },
    {
      title: "History of India",
      Pages: 99,
      isbn: "1972-10-09",
    },
  ],
  genres: ["fiction", "history", "Computers"],
  members: [
    {
      name: "Anamul",
      phone: "1234",
    },
    {
      name: "Mamun",
      phone: "1234",
    },
  ],
};
