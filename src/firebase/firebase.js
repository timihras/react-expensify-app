import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// const sub = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Data fetch failed: ', e);
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// const expenses = [{
//   description: 'Rent',
//   amount: 19000,
//   note: '',
//   createdAt: 123456789
// }, {
//   description: 'Food',
//   amount: 2500,
//   note: '',
//   createdAt: 123454812
// }, {
//   description: 'Sex',
//   amount: 10000,
//   note: '',
//   createdAt: 123479789
// }];

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);


// database.ref('notes/-LAg4aiFGdJEspr18Qnk').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native, Angular, Python'
// });

// const afterData = database.ref().on('value', (snapshot) => {
//   const person = snapshot.val();
//   console.log(`${person.name} is a ${person.job.title} at ${person.job.company}.`);
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching.', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500)

// setTimeout(() => {
//   database.ref().off();
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Timi Hraš',
//   age: 30,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Maribor',
//     country: 'Slovenija'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().remove()
//   .then(() => {
//     console.log('Remove succeeded.');
//   }).catch((e) => {
//     console.log('Remove failed: ', e);
//   })
