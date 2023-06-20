import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CInputGroup,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faPen } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

import {
  Column,
  Table,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnFiltersState,
  createColumnHelper,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  FilterFn,
  SortingFn,
  ColumnDef,
  FilterFns,

} from "@tanstack/react-table"
import {
  RankingInfo,
  rankItem,
  compareItems,
} from '@tanstack/match-sorter-utils'

import { makeData } from "./makeData"
import { makeData2 } from "./makeData2"

// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocs, setDoc, updateDoc, writeBatch, collection, query, where, limit, onSnapshot  } from "firebase/firestore";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import {firebaseConfig, storage} from "../../js/firebase"

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load requests based on Month
const LOAD_REQUEST_BASED_ON_MONTH = "LOAD_REQUEST_BASED_ON_MONTH"; // Indicator that this is a load request based on month when Load more is clicked
const LOAD_REQUEST_ADV= "LOAD_REQUEST_ADV"; // Advanced Load Request
const LOAD_REQUEST_BASED_ON_CLIENT_ID = "LOAD_REQUEST_BASED_ON_CLIENT_ID"; // Indicator that this is a load request based on month when Load more is clicked
const LOAD_REQUEST_BASED_ON_JOB_ID = "LOAD_REQUEST_BASED_ON_JOB_ID"; // Indicator that this is a load request based on month when Load more is clicked

import * as common from "../../js/common"

// Filter
const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const fuzzySort = (rowA, rowB, columnId) => {
  let dir = 0

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank,
      rowB.columnFiltersMeta[columnId]?.itemRank
    )
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}


function Request() {

  const rerender = React.useReducer(() => ({}), {})[1]

  const [sorting, setSorting] = React.useState([])

  const [columnFilters, setColumnFilters] = React.useState([])
  const [globalFilter, setGlobalFilter] = React.useState('')
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       header: "Name",
  //       footer: props => props.column.id,
  //       columns: [
  //         {
  //           accessorKey: "firstName",
  //           cell: info => info.getValue(),
  //           footer: props => props.column.id
  //         },
  //         {
  //           accessorFn: row => row.lastName,
  //           id: "lastName",
  //           cell: info => info.getValue(),
  //           header: () => <span>Last Name</span>,
  //           footer: props => props.column.id
  //         }
  //       ]
  //     },
  //     {
  //       header: "Info",
  //       footer: props => props.column.id,
  //       columns: [
  //         {
  //           accessorKey: "age",
  //           header: () => "Age",
  //           footer: props => props.column.id
  //         },
  //         {
  //           header: "More Info",
  //           columns: [
  //             {
  //               accessorKey: "visits",
  //               header: () => <span>Visits</span>,
  //               footer: props => props.column.id
  //             },
  //             {
  //               accessorKey: "status",
  //               header: "Status",
  //               footer: props => props.column.id
  //             },
  //             {
  //               accessorKey: "progress",
  //               header: "Profile Progress",
  //               footer: props => props.column.id
  //             }
  //           ]
  //         },
  //         {
  //           accessorKey: "createdAt",
  //           header: "Created At"
  //         }
  //       ]
  //     }
  //   ],
  //   []
  // )
  const columnHelper = createColumnHelper()
  // {JSON.stringify({props})}
  const columns = [
    columnHelper.accessor("TTD", {
      cell: props => <a href="https://golearn.com.my/" target='_blank' data-id="" data-toggle=""></a>,
      footer: info => "ajdhbidbiabs"
    }),
    columnHelper.accessor("firstName", {
      cell: info => info.getValue(),
      footer: info => info.column.id
    }),
    columnHelper.accessor(row => row.lastName, {
      id: "lastName",
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Last Name 1</span>,
      footer: info => info.column.id,
      filterFn: 'fuzzy',
      sortingFn: fuzzySort,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: info => info.renderValue(),
      footer: info => info.column.id
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
      footer: info => info.column.id
    }),
    columnHelper.accessor("status", {
      header: "Status",
      footer: info => info.column.id
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
      footer: info => info.column.id
    }),
    columnHelper.accessor("createdAt", {
      header: "CreatedAt",
      footer: info => info.column.id
    })
  ]

  // Convert to DD/MM/YYYY HH:mm:ss
  const convertDateFormat = (date) => {
    console.log(date.toDate())
    var date = new Date(date.toDate());
    var dateStr =
      ("00" + date.getDate()).slice(-2) + "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
      date.getFullYear() + " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
    // console.log(dateStr);
    return dateStr;
  }
  const navigate = useNavigate();

  const columns2 = [
    // columnHelper.accessor("E", {
    //   cell: props => <a href="https://golearn.com.my/" target='_blank' data-id="" data-toggle=""><FontAwesomeIcon icon={faPen} /></a>,
    //   footer: info => ""
    // }),
    columnHelper.accessor("", {
      id: "Edit",
      cell: ({ row }) =>
        <div style={{width:"30px"}}>
          {/* <a href='#' data-id="1234" onClick={ (e) => setVisible(true) }><FontAwesomeIcon icon={faPen} /></a> */}
          {/* onClick={ (e) => navigate(row.original[common.ID_KEY]) } */}
          <a href={"./request/"+row.original[common.ID_KEY]}  target="_blank" ><FontAwesomeIcon icon={faPen} /></a>

        </div>
      ,
      footer: info => "ajdhbidbiabs"
    }),
    columnHelper.accessor("dateSend", {
      id: "Date",
      header: () => <span style={{width:"30px"}}>Date</span>,
      // cell: info => <span>{JSON.stringify({info})}</span>,
      cell: info => <span style={{width:"30px"}} >{convertDateFormat(info.getValue())}</span>,

      // cell: info => convertDateFormat(info.renderValue()),
      // cell: (props) => <span style={{width:"30px"}} >{convertDateFormat(info.getValue())}</span>,
      footer: info => info.column.id
    }),
    columnHelper.accessor("name", {
      id: "Name",
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Name</span>,
      footer: info => info.column.id,
      filterFn: 'fuzzy',
      sortingFn: fuzzySort,
    }),
    columnHelper.accessor("owner", {
      header: () => "Owner",
      cell: info => info.renderValue(),
      footer: info => info.column.id
    }),
    columnHelper.accessor("place", {
      header: () => <span>Place</span>,
      // cell: props => <span>{JSON.stringify({props})}</span>,
      footer: info => info.column.id
    }),
    columnHelper.accessor("status", {
      header: "Status",
      footer: info => info.column.id
    }),
    columnHelper.accessor("jobId", {
      header: "jobId",
      footer: info => info.column.id
    }),
    columnHelper.accessor("Action", {
      header: "Job Action",
      footer: info => info.column.id
    }),
    columnHelper.accessor("Notification", {
      header: "Notification",
      cell: props =>
      <div>
        <button className="btn btn-primary btn-sm ms-1">1</button>
        <button className="btn btn-primary btn-sm ms-1">2</button>
        <button className="btn btn-primary btn-sm ms-1">3</button>
        <button className="btn btn-primary btn-sm ms-1">4</button>
        <button className="btn btn-primary btn-sm ms-1">5</button>
      </div>

      ,
      footer: info => info.column.id
    })
  ]

  const [data, setData] = React.useState(() => makeData(5))

  // const [reqData, setReqData] = React.useState(() => makeData2(50))
  const [reqData, setReqData] = React.useState([])

  // console.log(makeData2(2))
  // const refreshData = () => setData(() => makeData(5))
  const refreshData = () => setReqData(() => makeData2(50))

  console.log(reqData)
  const table = useReactTable({
    data: reqData,
    columns: columns2,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // Filter
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),

    debugHeaders: true,
    debugColumns: false,
    debugTable: true
  })

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  // Main Logic Here:
  const [ loadType, setLoadType] = React.useState(LOAD_REQUEST_BASED_ON_MONTH)
  const loadRequestFilter = async () => {

    setLoadType(LOAD_REQUEST_BASED_ON_MONTH)

    const docRef = collection(db, "request/v1/admin");

    const q = query(docRef, where("status", "==", true), limit(2));

    function filterId (array, targetedId){
      return array.filter(item =>
        item.id === targetedId
      );
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {

      let tempData = [].concat(reqData);
      let prevDataLength = reqData.length;
      querySnapshot.forEach((doc) => {


        // Loop through existing data list. Push if new, update if id existed
        if (reqData.length == 0){
          console.log("Empty Data")
          tempData.push(doc.data());

        }else {

          let newFilteredItem = filterId(tempData, doc.data()[common.ID_KEY])
          console.log(newFilteredItem)
          // console.log(newFilteredItem)

          // If req existed. Update. Else push.
          if (newFilteredItem.length > 0){

            tempData.forEach((tempItem, index) => {
              if (tempItem[common.ID_KEY] === doc.data()[common.ID_KEY]) {
                tempData[index] = doc.data();
              }

            })
          }else {
            tempData.push(doc.data());
          }


        }

        // console.log(tempData)
        // console.log(doc.id, " => ", doc.data());

      });

      setReqData(tempData);

    });

  }

  // Used for Modal
  const [visible, setVisible] = React.useState(false)


  return (
    <>
      <div class="row d-flex">
        <div class="p-0" style={{width:"max-content"}}>
          <div class="input-group" >
            <input class="form-control" style={{fontSize: "smaller"}} type="text" name="daterange" id='daterange' value="Select date range"/>

            <select class="custom-select d-none" id="moreFilter1">
              <option value="" selected>Select Status</option>
              <option value="new">New</option>
              <option value="noRes">No Response</option>
              <option value="otherOffer">Other Offer</option>
              <option value="expensive">Expensive</option>
              <option value="progress">Job in Progress</option>
              <option value="sent">Sent</option>
              <option value="success">Success</option>
              <option value="jobNoRes">Job No Response</option>
              <option value="rejectAllTutors">Reject All Tutors</option>
              <option value="stopAfterTrial">Stop After Trial</option>
              <option value="noTutor">No Tutor</option>
              <option value="timeXMatch">Time Issues</option>

            </select>
            <select class="custom-select d-none" id="moreFilter2">
              <option value="" selected>Select User</option>
              <option value="admin@golearn.com.my">Admin (admin@golearn.com.my)</option>
              <option value="+60186602646">GL B (Nadzirah 0186602646)</option>
              <option value="+60105602646">GL C (Seri 0105602646)</option>
              <option value="+601164191143">GL D (Syasya 01164191143)</option>
              <option value="+601164191193">GL D (Eunice 01164191193)</option>
              <option value="+601115131661">AY</option>
              <option value="+60138252818">Alric</option>
            </select>

            <select class="custom-select d-none" id="moreFilter3">
              <option value="" selected>Select Notification</option>
              <option value="3712">Callback</option>
              <option value="3713">Whatsapp / Conversation</option>
              <option value="3714">Trial Class</option>
              <option value="3711">Need Attention</option>
              <option value="3710">General</option>
              <option value="3720">Owner Changed</option>
              <option value="3721">Status Changed - Any</option>
              <option value="3722">Status Changed to New</option>
              <option value="3723">Status Changed to Job In Progress</option>
              <option value="3724">Status Changed to Sent</option>
              <option value="3725">Status Changed to Success</option>
              <option value="3726">Status Changed to No Response</option>
              <option value="3727">Status Changed to Too Expensive</option>
              <option value="3728">Status Changed to Other Offers</option>
              <option value="3729">Status Changed to Job No Response</option>
              <option value="3730">Status Changed to Rejected All Tutors</option>
              <option value="3731">Status Changed to Stop After Trial</option>
              <option value="3732">Status Changed to No Tutor</option>
              <option value="3733">Status Changed to Time Issues </option>
            </select>

            <button type="submit" class="btn btn-danger btn-rounded ml-2 btn-sm d-none2"  id="btnMoreFilter"
              onclick="document.getElementById('moreFilter1').classList.toggle('d-none'); document.getElementById('moreFilter2').classList.toggle('d-none'); document.getElementById('moreFilter3').classList.toggle('d-none')">
              {/* <i class="material-icons">tune</i> */}
              <FontAwesomeIcon icon={faBars} />
            </button>

            <button class="btn btn-primary btn-round btn-just-icon ml-2 btn-sm" id="btnLoadRequestBasedOnMonth" onClick={loadRequestFilter }>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

          </div>

        </div >
        <div class="p-0 ms-2" style={{width:"max-content"}}>
          <div class="input-group" >
            <input type="text" value="" class="form-control" style={{fontSize: "smaller"}} placeholder="Search by Client Phone" id="searchClientId"/>
            <button type="submit" class="btn btn-primary btn-round btn-just-icon btn-sm" id="btnLoadRequestBasedOnClientId" disabled onclick="latestRequestDoc = null;docsObj=[]; table.clear().draw(); loadRequestBasedOnClientId()">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div class="p-0 ms-2" style={{width:"max-content"}}>
          <div class="input-group">
            <input type="text" value="" class="form-control" style={{fontSize: "smaller"}} placeholder="Search by Job Id" id="searchJobId"/>
            <button type="submit" class="btn btn-primary btn-round btn-just-icon btn-sm" id="btnLoadRequestBasedOnJobId" disabled onclick="latestRequestDoc = null;docsObj=[]; table.clear().draw(); loadRequestBasedOnJobId()">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        <div class="p-0 ms-auto" style={{width:"max-content"}}>
          <a href="./request/add-request" target="_blank" class="btn btn-primary btn-round btn-sm" >Add New Requests</a>
          {/* <a class="ml-3" href="./external-request">External Requests</a> */}
        </div>
      </div>

      {/* MAIN TABLE START HERE:  */}
      <div className="p-2">
        <div>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            className="p-2 font-lg shadow border border-block"
            placeholder="Search all columns..."
          />
        </div>
        <div className="h-2" />
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler()
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: " 🔼",
                              desc: " 🔽"
                            }[header.column.getIsSorted()] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
          </tbody>
        </table>
        <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>


        <div>{table.getRowModel().rows.length} Rows</div>
        <div>
          <button onClick={() => rerender()}>Force Rerender</button>
        </div>
        <div>
          <button onClick={() => refreshData()}>Refresh Data</button>
        </div>
        <pre>{JSON.stringify(sorting, null, 2)}</pre>
      </div>


      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Edit Request</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to continue?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Not Now
          </CButton>
          <CButton color="primary" onClick={() => alert() }>Update</CButton>
        </CModalFooter>
      </CModal>

    </>

  )

}

  // Filter
  function Filter({ column, table }) {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    const sortedUniqueValues = React.useMemo(
      () =>
        typeof firstValue === "number"
          ? []
          : Array.from(column.getFacetedUniqueValues().keys()).sort(),
      [column.getFacetedUniqueValues()]
    )

    return typeof firstValue === "number" ? (
      <div>
        {/* <div className="flex space-x-2">
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
            value={columnFilterValue?.[0] ?? ""}
            onChange={value => column.setFilterValue(old => [value, old?.[1]])}
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ""
            }`}
            className="w-12 border shadow rounded"
            style={{width:"75px"}}
          />
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
            value={columnFilterValue?.[1] ?? ""}
            onChange={value => column.setFilterValue(old => [old?.[0], value])}
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ""
            }`}
            className="w-12 border shadow rounded"
            style={{width:"75px"}}
          />
        </div> */}
        <DebouncedInput
          type="text"
          value={columnFilterValue ?? ""}
          onChange={value => column.setFilterValue(value)}
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          className="w-24 border shadow rounded"
          list={column.id + "list"}
          style={{width:"130px"}}
          disabled
        />
        <div className="h-1" />
      </div>
    ) : (
      <>
        <datalist id={column.id + "list"}>
          {sortedUniqueValues.slice(0, 5000).map(value => (
            <option value={value} key={value} />
          ))}
        </datalist>
        <DebouncedInput
          type="text"
          value={columnFilterValue ?? ""}
          onChange={value => column.setFilterValue(value)}
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          className="w-24 border shadow rounded"
          list={column.id + "list"}
          style={{width:"130px"}}
        />
        <div className="h-1" />
      </>
    )
  }

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}
export default Request
