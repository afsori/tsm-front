import React from "react";
import Table from "react-bootstrap/Table";
import "./paginate.css";
function contentPagination({ posts, loading, name }) {
  setTimeout(() => {
    if (loading) {
      return <h2>Loading....</h2>;
    }
  }, 2000);
  console.log("ini hasil", posts);

  return (
    <>
      <div>
        <Table striped bordered hover responsive="lg sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>No. Telp</th>
              <th>Alamat</th>
              <th>Kapasitas</th>
              <th>Lokasi</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.phone_number}</td>
                  <td>{data.address}</td>
                  <td>{data.allowed_capacity}</td>

                  <td>
                    <li>Lat: {data.latitude}</li>
                    <li>Long: {data.longitude}</li>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default contentPagination;
