import React from "react";
import { House } from './House';
import {  housesApi } from '../rest/HousesApi';
import { NewHouse } from "./NewHouse";


export class HousesList extends React.Component {
    
    state = {
        
        houses: []
    };

    componentDidMount () {
        this.fetchHouses();
    }
    fetchHouses = async () => {
        
        const houses = await housesApi.get();
        
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        
        this.fetchHouses();
    };

    render() {
        return (
            
            <div className="houselistmain">

                <div className="newhousearea">
                    <NewHouse />
                </div>
            
                <div className="house-list">
                    <h2> List of Houses</h2>
                    {this.state.houses.map((house) => (
                        <House
                            house = {house}
                            key={house._id}
                            updateHouse={this.updateHouse}
                            />
                    ))}
                </div>
            </div>
        )
    }
}

