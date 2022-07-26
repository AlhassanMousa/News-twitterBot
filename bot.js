const  cheerio = require("cheerio");
const axios= require("axios");
const express = require('express');
const { TwitterApi } = require('twitter-api-v2');
const config = require('./config');
const client =  new TwitterApi(config);
const app = express()

async function getQuotes_tweet(){
axios("https://almalnews.com/category/economy-markets/")
.then(res =>{
const htmlData = res.data
const $ = cheerio.load(htmlData);


   $(".category_latest-timeline",htmlData).each((index,data) =>{
    articles = $(data).find('h2').text()
        
    let tweet = await client.v1.tweet(articles);
  })

  setInterval(() => {
    getQuotes_tweet2();

  }, 7250000);


}).catch(err => console.log(err))


