import React from 'react'
import "./userList.css";
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { UserContext } from '../../context/userContext/UserContext';
import { useContext } from 'react';
import { getUsers } from '../../context/userContext/apiCalls';

export default function UserList() {

    const{users,dispatch} = useContext(UserContext);

     useEffect(()=>{
        getUsers(dispatch);
    },[dispatch]);
    
    console.log(users);

    
    const handleDelete = (id) =>{
        
        // setUserData(userData.filter(item=>item.id !==id));
        
    };
    
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200,renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className='userListImg' />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",width:150,
            renderCell: (params)=> {
                return(<>
                <Link to={"/user/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                </Link>
                    <DeleteOutline className="userListDelete"
                    //  onClick={ ()=>handleDelete(
                    //     params.row.id
                    // )}
                    />
                </>
                );
            }
        },
      ];
 
  return (
    <div className="userList">
         <DataGrid
        rows={users} disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
