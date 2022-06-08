import React, { useState } from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    return (
        <>
            <div style={{ display: "block", padding: 30 }}>

                <div>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                setCount(Math.max(count - 1, 0));
                            }}
                        >
                            {" "}
                            <RemoveIcon fontSize="small" />
                        </Button>

                        <Badge color="secondary" badgeContent={count}>
                            <ShoppingCartIcon className='carrito' />{" "}
                        </Badge>

                        <Button
                            onClick={() => {
                                setCount(Math.min(count + 1, props.stock));
                            }}
                        >
                            {" "}
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </div>
                <button type="button" className='btn btn-primary btn-lg botonAdd titulos' onClick={() => props.onAdd(count)} >Agregar al carrito</button>

            </div>

        </>
    );
}

export default ItemCount;