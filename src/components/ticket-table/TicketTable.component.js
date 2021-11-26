import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const TicketTable = () => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  )

  if (isLoading) return <h3>Loading ...</h3>

  if (error) return <h3>{error}</h3>

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList.length ? (
          searchTicketList.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={`/ticket/${row.id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='4' className='text-center'>
              No ticket to show{' '}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default TicketTable
