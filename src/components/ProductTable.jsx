import React, { Fragment } from 'react';

const ProductTable = ({ products }) => {
    return <div>
        <table>
            <thead>
                <tr style={{border: "1px solid black"}}>
                    <td>#</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index) => {
                    return (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                        </tr>
                        );
                })}
            </tbody>
        </table>
    </div>;
}

export default ProductTable;