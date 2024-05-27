"use client"
import React,{useState,useEffect, useCallback,useMemo} from 'react'
import DataTable from 'react-data-table-component';
import {dataVal} from "./data.js"

const CustomDataTable = () => {

    const [data, setData] = useState<any>(null);
    const [selectedRows,setSelectedRows] = useState([]);

    const columns = useMemo(() => [
        {
            name: 'Title',
            selector: (row:any) => row.title,
        },
        {
            name: 'Year',
            selector: (row) => row.year,
        },
    ], []);
    

    useEffect(() => {
        console.log('Data fetched:', dataVal);
        setData(dataVal);
    }, []);

    const handleChange = useCallback(({ selectedRows }:any) => {
        console.log('Selected Rows: ', selectedRows);
        setSelectedRows(selectedRows);
    }, []);      
    
  return (
    <>
        <DataTable
			columns={columns}
			data={dataVal}
            pagination
            selectableRows
            paginationPerPage={4}
            // selectableRowSelected={isRowSelected}
            onSelectedRowsChange={handleChange}
		/>
    
    </>
  )
}

export default CustomDataTable