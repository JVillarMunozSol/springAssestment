import axios from "axios";
import { useState, useEffect } from "react";

const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/api/list`);
    console.log(response.data);
    return response.data;
};

const List = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            firstName: "Loading...",
            lastName: "Loading...",
            phoneNumber: "Loading...",
            email: "Loading...",
        },
        {
            id: 1,
            firstName: "Loading...",
            lastName: "Loading...",
            phoneNumber: "Loading...",
            email: "Loading...",
        }
    ]);
    const [loading, setLoading] = useState(0);

    const deleteUser = async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/delete/${id}`);
        console.log(response.data);
        return response.data;
    };
    
    // useEffect(() => {
    //     setLoading(1);
    //     fetchData().then((data) => {
    //         //setItems(data);
    //     }).catch((err) => {
    //         setLoading(2);
    //     });
    // }, []);
    
    if (loading == 1) {
        return <div>Loading...</div>;
    }else if(loading == 2){
       return <div>Data not found</div>
    }
    
    return (
        <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Delete</th>
        </tr>

        {items.map((item) => (
            <tr>
                <td key={item.id}>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td><a href="/" >❌</a></td>
            </tr>
        ))}
        </table>
    );
    };

export default List;