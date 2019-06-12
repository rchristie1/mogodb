const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test_goose', { useNewUrlParser: true });

const carSchema = mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  avail: Boolean,
});

const Car = mongoose.model('Car', carSchema);

////////// INSERT //////////
//#region
// const items = [
//   {
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 2020,
//     avail: true,
//   },
//   {
//     brand: 'Dodge',
//     model: 'Challenger',
//     year: 2021,
//     avail: false,
//   },
//   {
//     brand: 'Ford',
//     model: 'Fiesta',
//     year: 2012,
//     avail: true,
//   },
//   {
//     brand: 'Subaru',
//     model: 'Outback',
//     year: 2017,
//     avail: true,
//   },
// ];

// Car.collection.insertMany(items);

// const addCar = new Car();
// Car.insertMany(items)

// const addCar = new Car(
//     {
//         brand: 'Ford',
//         model: 'Mustang',
//         year: 2020,
//         avail: true,
//     },
//     {
//         brand: 'Dodge',
//         model: 'Challenger',
//         year: 2021,
//         avail: false,
//     },
// )

// addCar.save((err, doc) => {
//     err ? console.log(err) : console.log(doc)
// })
//#endregion

////////// QUERY //////////
//#region
// Car.find({ brand: 'Lamborghini' }, (err, doc) => {
//   err ? console.log(err) : console.log(doc);
// });

// Car.find((err, doc) => {
//     err ? console.log(err) : console.log(doc);
//   });
//#endregion

////////// DELETE //////////
//#region
// Car.findOneAndRemove({ brand: 'Dodge' }, (err, doc) => {
//   err ? console.log(err) : console.log(doc);
// });
//#endregion
////////// UDATE //////////
//#region
// Car.update(
//   {
//     brand: 'Ford',
//   },
//   {
//     $set: {
//       brand: 'Lamborghini',
//       model: 'Huracan',
//     },
//   },
//   (err, doc) => {
//     err ? console.log(err) : console.log(doc);
//   }
// );
//#endregion
