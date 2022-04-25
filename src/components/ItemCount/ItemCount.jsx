import React, { useState } from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './ItemCount.css';


function ItemCount(props) {
    const [initial, setInitial] = useState(0);
   

    return (
        <>
            <div style={{ display: "block", padding: 30 }}>

                <div>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                setInitial(Math.max(initial - 1, 0));
                            }}
                        >
                            {" "}
                            <RemoveIcon fontSize="small" />
                        </Button>

                        <Badge  color="secondary" badgeContent={initial}>
                            <ShoppingCartIcon className='carrito'/>{" "}
                        </Badge>

                        <Button
                            onClick={() => {
                                setInitial(Math.min(initial + 1, 5));
                            }}
                        >
                            {" "}
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </div>
                <button className='botonAdd'> Agregar al carrito 
                 
                </button>

            </div>

        </>
    );
}

export default ItemCount;