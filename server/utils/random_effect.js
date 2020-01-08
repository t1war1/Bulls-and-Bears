module.exports = function (cron) {

    var parameters = require('./parameters');
    var company = require('../model/company');
    var mongoose = require('mongoose');
  
    let companyPriceOnTime = new cron.CronJob({
      cronTime : '*/2 * * * *',  // The time pattern when you want the job to start
      onTick : changePrice, // Task to run
      onComplete : reset, // When job is completed and It stops.
      start : true, // immediately starts the job.
      timeZone : "Asia/Kolkata" // The timezone
    });
  
    var number = 0;
    function changePrice() {
        company.find({} , function(err, Company) {
          if (err||(Company.length==0)){
              console.log(err);
              // res.send("unable to fetch companies");
          }else{
              for(var i = 0; i<Company.length; i++){
                  rand = (Math.random() * (2) + (-1)).toFixed(2);
                  rand=parseFloat(rand);
                  Company[i].sharePrice = (Company[i].sharePrice * (1 + (rand/parameters.randomImpact))).toFixed(0);
  
                  console.log("change in price by random change",rand,"in company",Company[i].symbol,"is",Company[i].sharePrice);
                  Company[i].history.push({
                      timeStamp : Date.now(),
                      sharePrice : Company[i].sharePrice,
                      availableQuantity : Company[i].availableQuantity
                  });
                  Company[i].save();
              }
          }
        });
    }
    function reset() {
      console.log('Task update Completed');
      number=0;
    }
  
    return companyPriceOnTime;
  
  };