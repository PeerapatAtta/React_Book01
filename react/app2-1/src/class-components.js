import React, { Component } from "react";

export default class Calendar extends Component {
    getDate() {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date();
        const weekDay = dayNames[date.getDay()];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `Day ${weekDay}, at ${day} ${month} ${year}`;
    }
    render() {
        return (
            <div>
                <p>{this.getDate()}</p>
            </div>
        );
    }
}