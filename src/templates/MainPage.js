import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function MainPage() {

    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        const headers = {
            Authorization: localStorage.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        fetch('http://localhost:8000/admin/users', {headers: headers}).then(async response => {
            const data = await response.json();
            if (!data){
                window.location.href = '/SignIn';
            }
            setRows(data);
        })
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Username
                        </TableCell>
                        <TableCell >
                            Password
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.username}
                            sx={{ '&:last-child td, &:last-child th':
                                { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.username}
                            </TableCell>
                            <TableCell >
                                {row.password}
                            </TableCell>
                
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}