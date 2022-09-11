import React from "react";
import {NewRoomForm} from './NewRoomForm';


export const House = (props) => {
    
    const { house, updateHouse} = props;

    const deleteRoom = (roomId) => {
        
        const updatedHouse = {
            
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId )
        };
        updateHouse(updatedHouse);
    }

    
    const addNewRoom = (room) =>
        
        updateHouse({...house, rooms: [...house.rooms, room]});

    const checkRoomName = (room) => {
        console.log("checkRoomName", room);
        if (room === null || room === "") {
            return "";
        } else {
            return room.name;
        }
    };

    
    const checkRoomArea = (room) => {
    
        if (room === null || room === "") {
            return "";
         }
    
        else {
        return room.area;
    }
  };

    
    const rooms = () => (
        <ul className="homedescription">
            {house.rooms.map((room, index) => (
                <ul key={index}>
                    {console.log(house.rooms)}
                        <label className="room">{`${checkRoomName(room)}`}</label> <br/>
                        <label className="area">{`Area: ${checkRoomArea(room)} square feet`}
                    </label>
                    <button className="btn btn-outline-secondary" onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </ul>
            ))}
        </ul>
    );

    return (
       <div className="housename">
            <h3> Home Name: </h3>
                <div className="housename-name">
                    <h4>{house.name}</h4>
                </div>

            {
                
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
       </div> 
    );
};