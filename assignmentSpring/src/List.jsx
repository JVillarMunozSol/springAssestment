import axios from "axios";
import { useState, useEffect } from "react";

const fetchData = async () => {
    const response = await axios.get(`http://localhost:9191/getAll`);
    return response.data;
};    

const deleteUser = async (id) => {
    const response = await axios.delete(`http://localhost:9191/deleteUser/${id}`);
    return response.data;
};


const List = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(0);

    const deleteItem = (id) => {
        deleteUser(id);
        setItems(items.filter((item) => item.id !== id));
    };
    
    useEffect(() => {
        setLoading(1);
        fetchData().then((data) => {
            setItems(data);
            setLoading(0);
        }).catch((err) => {
            setLoading(2);
        });
    }, []);
    
    if (loading == 1) {
        return <div>Loading...</div>;
    }else if(loading == 2){
       return <div>Data not found</div>
    }
    
    return (
        <div>
            <h2>Persons Saved</h2>

            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>

                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                        <td><button onClick={() => deleteItem(item.id)}>❌</button></td>
                    </tr>
                ))}
            </table>
        </div>
    );
    };

export default List;