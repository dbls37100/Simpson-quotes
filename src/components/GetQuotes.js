import React from 'react';
import axios from 'axios';

class GetQuotes extends React.Component {
    getQuotes() {
        axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
        .then (response => response.data)
        .then (quote => document.querySelector("#container").innerHTML=`<div><img src=${quote[0].image} class="simpsonImage" /><p class="quote"> ${quote[0].quote}</p></div>`)}
        render () {
            return (
            <div><div id="container"></div>{this.getQuotes()}<button type="button" onClick = {() => this.getQuotes()}>Get quotes</button></div>
            );
        }
    }

export default GetQuotes;