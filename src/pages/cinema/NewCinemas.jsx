import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./NewCinemas.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cinemaRows } from "../../datatablesource_cinemas";


const NewCinemas = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [addressUrl, setAddressUrl] = useState('');
    const [province, setProvince] = useState('');
    const [numRooms, setNumRooms] = useState(0);
    const [showtimes, setShowtimes] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [data, setData] = useState(cinemaRows);

    const handleSubmit = () => {
        var newid = Math.max(...data.map(item => item.id))
        const newCinema = {
            id: newid +1,
            name: name,
            address: address,
            addressUrl: addressUrl,
            province: province,
            numRooms: numRooms,
            showtimes: showtimes,
            isActive: isActive
        };
        data.push(newCinema);
    }
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td><label htmlFor="name">Name:</label>
                            </td>
                            <td><input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="address">Address:</label>
                            </td>
                            <td><input type="text" id="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="addressUrl">Address URL:</label>
                            </td>
                            <td><input type="url" id="addressUrl" value={addressUrl} onChange={(event) => setAddressUrl(event.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="province">Province:</label>
                            </td>
                            <td><input type="text" id="province" value={province} onChange={(event) => setProvince(event.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="numRooms">Number of Rooms:</label>
                            </td>
                            <td><input type="number" id="numRooms" value={numRooms} onChange={(event) => setNumRooms(parseInt(event.target.value))} required />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="showtimes">Showtimes:</label>
                            </td>
                            <td><input type="text" id="showtimes" value={showtimes.join(',')} onChange={(event) => setShowtimes(event.target.value.split(','))} />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="isActive">Active:</label>
                            </td>
                            <td><input type="checkbox" id="isActive" checked={isActive} onChange={(event) => setIsActive(event.target.checked)} />
                            </td>
                        </tr>
                        <tr>
                        <button className="submitButton" onClick={() => handleSubmit()}>Add Cinema</button> 
                        </tr>
                    </table>  
                </form>
            </div>
        </div>

    );
};

export default NewCinemas;

