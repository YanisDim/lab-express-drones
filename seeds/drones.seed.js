// Iteration #1
require('../db')

const mydrones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  const mongoose = require('mongoose');

  const Drone = require ('../models/Drone.model.js')


  Drone.create(mydrones)
  .then(()=>{
      console.log('allgood')

      mongoose.connection.close()
  })
  .catch(()=>{
      console.log('error')
  })