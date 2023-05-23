import React from "react";
import Table from 'react-bootstrap/Table';
function Mytable({ datap1, datap2, datap2d }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colSpan={2}>รางวัลที่ 1</th>
                    <th colSpan={2}>{datap1}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>รางวัลเลขข้างเคียงรางวัลที่ 1</td>
                    <td>{datap1 ? datap1 - 1 : ""}</td>
                    <td>{datap1 ? datap1 + 1 : ""}</td>
                </tr>
                <tr>
                    <td className="w-25">รางวัลที่ 2</td>
                    <td className="w-25">{datap2[0]}</td>
                    <td className="w-25">{datap2[1]}</td>
                    <td className="w-25">{datap2[2]}</td>
                </tr>
                <tr>
                    <td colSpan={2}>เลขท้าย 2 ตัว</td>
                    <td colSpan={2}>{datap2d}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Mytable