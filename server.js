const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//     if(err) {
//         console.log('could not connect')
//     }

//     console.log('connected');
//     client.close();
// })

////////// CREATE //////////
// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   const cars = [{ model: 'ford', year: 2019 }, { model: 'chevy', year: 2018 }, { model: 'dodge', year: 2011 }];

//   const db = client.db();

//   db.collection('cars').insert(cars, (err,res) => {
//     if(err) {
//         return console.log(`Failed to insert: ${err}`);
//     }
//     console.log(res);
//   });

//   //single insert
// //   db.collection('cars').insertOne(
// //     {
// //       name: 'test',
// //       model: 'Porche',
// //       year: 2020,
// //     },
// //     (err, res) => {
// //       if (err) {
// //         return console.log(`Cannot Insert: ${err}`);
// //       }
// //       console.log(res);
// //     }
// //   );

//   client.close();
// });

////////// READ //////////
// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   client.db().collection('cars').find().toArray().then(data => {
//       console.log(data);
//   });
//   client.db().collection('cars').find({model: 'ford'}).toArray().then(data => {
//       console.log(data);
//   });

//   /*control what is returned like a select statement in SQL
//     1's represent true 0 false. below should only return the id's*/
//   const output = client
//     .db()
//     .collection('cars')
//     .find({ model: 'ford' })
//     .project({ year: 0, model: 0 });

//   output.toArray().then(data => {
//     console.log(data);
//   });

//   client.close();
// });

////////// DELETE //////////
// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   client
//     .db()
//     .collection('cars')
//     .deleteMany({ year: 2018 }, (err, doc) => {
//       console.log(doc);
//     });

//   client.close();
// });

////////// UPDATE //////////
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  client
    .db()
    .collection('cars')
    .findOneAndUpdate(
        { 
            model: 'ford' 
        }, 
        {
            $set:{
                model: 'porche',
                name: 'cayanne'
            }
        },
        {
            returnOriginal: true
        },
        (err, doc) => console.log(err ? err: doc)
    );

  client.close();
});
