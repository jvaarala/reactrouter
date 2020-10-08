import React from "react";
import {Table} from 'react-bootstrap'

const List = () => {

    return (
        <div className="container">
            <Table striped>
                <tbody>
                <tr>
                    <td>
                        <p>1. rivi</p>
                    </td>
                    <td>
                        <p>Testi</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>2. rivi</p>
                    </td>
                    <td>
                        <p>Testi</p>
                    </td>
                </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default List