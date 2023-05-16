import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffeeCollection, setCoffeeCollection }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                              )
                              const remaining = coffeeCollection.filter(cof => cof._id !== _id);
                              setCoffeeCollection(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between items-center mx-2">
                <div>
                    <h2>Name : {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Taste : {taste}</p>
                </div>
                <div className="card-actions">
                    <div className="btn-group btn-group-vertical space-y-2">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button onClick={() => { handleDelete(_id) }} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;