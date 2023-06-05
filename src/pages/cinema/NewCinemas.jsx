import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./NewCinemas.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cinemaRows } from "../../datatablesource_cinemas";
import { provinceOptions } from "../../datatablesource_cinemas";
import axios from "axios";
const NewCinemas = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [addressUrl, setAddressUrl] = useState('');
    const [province, setProvince] = useState(0);
    const [numRooms, setNumRooms] = useState(0);
    const [data, setData] = useState(cinemaRows);

    const handleProvinceChange = (event) => {
        // Retrieve the selected province object
        const provinceId = event.target.value
        setProvince(provinceId)
    };
    const handleSubmit = async () => {
        const newCinema = {
            name: name,
            address: address,
            address_Url: addressUrl,
            number_of_rooms: numRooms,
            provinceId: parseInt(province)
        };
        await axios.post("https://uitcinema.devhungops.website/api/cinema", newCinema)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching cinema data:', error);
            });
    }
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <form>
                    <table>
                        <tbody>
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
                                <td><select type="text" id="province" onChange={handleProvinceChange} required >
                                    <option value="0">Chọn tỉnh thành</option>
                                    <option value="54">An Giang</option>
                                    <option value="47">Bà Rịa - Vũng Tàu</option>
                                    <option value="15">Bắc Giang</option>
                                    <option value="62">Bắc Kạn</option>
                                    <option value="58">Bạc Liêu</option>
                                    <option value="18">Bắc Ninh</option>
                                    <option value="50">Bến Tre</option>
                                    <option value="33">Bình Định</option>
                                    <option value="45">Bình Dương</option>
                                    <option value="43">Bình Phước</option>
                                    <option value="37">Bình Thuận</option>
                                    <option value="59">Cà Mau</option>
                                    <option value="4">Cần Thơ</option>
                                    <option value="61">Cao Bằng</option>
                                    <option value="3">Đà Nẵng</option>
                                    <option value="40">Đắk Lắk</option>
                                    <option value="41">Đắk Nông</option>
                                    <option value="7">Điện Biên</option>
                                    <option value="46">Đồng Nai</option>
                                    <option value="53">Đồng Tháp</option>
                                    <option value="39">Gia Lai</option>
                                    <option value="60">Hà Giang</option>
                                    <option value="22">Hà Nam</option>
                                    <option value="2">Hà Nội</option>
                                    <option value="27">Hà Tĩnh</option>
                                    <option value="19">Hải Dương</option>
                                    <option value="5">Hải Phòng</option>
                                    <option value="56">Hậu Giang</option>
                                    <option value="11">Hòa Bình</option>
                                    <option value="20">Hưng Yên</option>
                                    <option value="35">Khánh Hòa</option>
                                    <option value="55">Kiên Giang</option>
                                    <option value="38">Kon Tum</option>
                                    <option value="8">Lai Châu</option>
                                    <option value="42">Lâm Đồng</option>
                                    <option value="13">Lạng Sơn</option>
                                    <option value="6">Lào Cai</option>
                                    <option value="48">Long An</option>
                                    <option value="23">Nam Định</option>
                                    <option value="26">Nghệ An</option>
                                    <option value="24">Ninh Bình</option>
                                    <option value="36">Ninh Thuận</option>
                                    <option value="16">Phú Thọ</option>
                                    <option value="34">Phú Yên</option>
                                    <option value="28">Quảng Bình</option>
                                    <option value="31">Quảng Nam</option>
                                    <option value="32">Quảng Ngãi</option>
                                    <option value="14">Quảng Ninh</option>
                                    <option value="29">Quảng Trị</option>
                                    <option value="57">Sóc Trăng</option>
                                    <option value="9">Sơn La</option>
                                    <option value="44">Tây Ninh</option>
                                    <option value="21">Thái Bình</option>
                                    <option value="12">Thái Nguyên</option>
                                    <option value="25">Thanh Hóa</option>
                                    <option value="30">Thừa Thiên Huế</option>
                                    <option value="49">Tiền Giang</option>
                                    <option value="1">Hồ Chí Minh</option>
                                    <option value="51">Trà Vinh</option>
                                    <option value="63">Tuyên Quang</option>
                                    <option value="52">Vĩnh Long</option>
                                    <option value="17">Vĩnh Phúc</option>
                                    <option value="10">Yên Bái</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="numRooms">Number of Rooms:</label>
                                </td>
                                <td><input type="number" id="numRooms" value={numRooms} onChange={(event) => setNumRooms(parseInt(event.target.value))} required />
                                </td>
                            </tr>
                            {/* <tr>
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
                        </tr> */}
                            <tr>
                                <td><a href="/cinema"><button className="submitButton" onClick={() => handleSubmit()}>Add Cinema</button>
                                </a></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>

    );
};

export default NewCinemas;

