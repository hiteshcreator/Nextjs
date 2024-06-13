"use client"
import React,{useState,useEffect, useCallback,useMemo} from 'react'
import DataTable from 'react-data-table-component';
import {dataVal} from "./data.js"

const CustomDataTable = () => {

    const [data, setData] = useState<any>(null);
    const [selectedRows,setSelectedRows] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);


    const columns = useMemo(()=>[
        {
            name: 'userId',
            selector: (row:any) => row.userId,
            width: '100px'
        },
        {
            name: 'id',
            selector: row => row.id,
            width: '200px'
        },
        {
            name: 'title',
            selector: row => row.title,
            width: '200px'
        },
        {
            name: 'body',
            selector: row => row.body,
            width: '500px'
        },
      ],[]);
    

    useEffect(() => {
        fetchData(1, perPage);
      }, [perPage])
    
    const fetchData = async (page:any, per_page:any) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${per_page}`)
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                // console.log("result",result)
                setItems(result);
                setTotalRows(100);
            },
            (error) => {
                // console.log("error",error)
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    const handlePageChange = (page:any) => {
        console.log("page--",page)
        fetchData(page, perPage);
    }

    const handlePerRowsChange = async (newPerPage:any, page:any) => {
        setPerPage(newPerPage);
    }

    // const handleChange = useCallback(({ selectedRows }:any) => {
    //     console.log('Selected Rows: ', selectedRows);
    //     setSelectedRows(selectedRows);
    // }, []);    
    
    const handleChange = useCallback(({ selectedRows }:any) => {
        const selectedRowIds = selectedRows.map((row:any) => row.id);
        setSelectedRows(prevSelectedRows => {
            const filteredSelectedRows = prevSelectedRows.filter((row:any) => !selectedRowIds.includes(row.id));
            return [...filteredSelectedRows, ...selectedRows];
        });
    }, []);
    
    const conditionalRowStyles = useMemo(() => [
        {
            when: (row:any) => selectedRows.some((selectedRow:any) => selectedRow.id === row.id),
            style: {
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
            },
        },
    ], [selectedRows]);

    const selectableRowSelected = useCallback((row:any) => selectedRows.some((selectedRow:any) => selectedRow.id === row.id), [selectedRows]);
    
    
  return (
    <>
        {items && items.length > 0 ? 
        
        <DataTable
            columns={columns}
            data={items}
            pagination
            paginationServer
            selectableRows
            paginationPerPage={10}
            paginationTotalRows={totalRows}
            selectableRowSelected={selectableRowSelected}
            onSelectedRowsChange={handleChange}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
            conditionalRowStyles={conditionalRowStyles}
            selectableRowsHighlight
            highlightOnHover
        />
        :"loading..."}
    </>
  )
}

export default CustomDataTable

        {/* <DataTable
			columns={columns}
			data={dataVal}
            pagination
            selectableRows
            paginationPerPage={4}
            // selectableRowSelected={isRowSelected}
            onSelectedRowsChange={handleChange}
		/> */}


    // const columns = useMemo(() => [
    //     {
    //         name: 'Title',
    //         selector: (row:any) => row.title,
    //     },
    //     {
    //         name: 'Year',
    //         selector: (row) => row.year,
    //     },
    // ], []);
    // useEffect(() => {
    //     console.log('Data fetched:', dataVal);
    //     setData(dataVal);
    // }, []);
