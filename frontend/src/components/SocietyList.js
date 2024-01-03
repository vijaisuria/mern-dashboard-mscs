import React, { useEffect, useState } from "react";
import axios from "../services/api";
import "../styles/tab.css";

const SocietyList = () => {
  const [societies, setSocieties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [filterState, setFilterState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSocieties();
  }, []);

  const fetchSocieties = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/societies");
      setSocieties(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // Function to handle search query change
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Function to handle sort key change
  const handleSortKeyChange = (event) => {
    setSortKey(event.target.value);
    setCurrentPage(1);
  };

  // Function to handle filter state change
  const handleFilterStateChange = (event) => {
    setFilterState(event.target.value);
    setCurrentPage(1);
  };

  // Filter the societies based on the search query and filter state
  const filteredSocieties = societies.filter((society) => {
    const matchesSearchQuery = society["Name of Society"]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilterState =
      filterState === "" ||
      society.State.toLowerCase() === filterState.toLowerCase();
    return matchesSearchQuery && matchesFilterState;
  });

  // Sort the societies based on the sort key
  const sortedSocieties = filteredSocieties.slice().sort((a, b) => {
    if (sortKey === "date") {
      return (
        new Date(a["Date of Registration"]) -
        new Date(b["Date of Registration"])
      );
    } else {
      const valueA = a[sortKey] || "";
      const valueB = b[sortKey] || "";
      return valueA.localeCompare(valueB);
    }
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSocieties = sortedSocieties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedSocieties.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h2>Society List</h2>
      <div className="filters-container">
        {/*search*/}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by society name"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="search-input" // Add the CSS className to the input
          />
          <i className="fa fa-search search-icon"></i>
        </div>

        {/* Sort */}
        <select
          value={sortKey}
          className="filter-select"
          onChange={handleSortKeyChange}
        >
          <option value="">Sort by</option>
          <option value="Name of Society">Society Name</option>
          <option value="State">State</option>
          <option value="Date of Registration">Date of Registration</option>
        </select>

        {/* Filter */}
        <select
          value={filterState}
          onChange={handleFilterStateChange}
          className="filter-select"
        >
          <option value="">All States</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>
      {/* Society List */}
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem", margin: "20%" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr className="table-primary">
                <th>Serial Number</th>
                <th>Society Name</th>
                <th>Society Address</th>
                <th>State</th>
                <th>District</th>
                <th>Date of Registration</th>
                <th>Area of Operation</th>
                <th>Sector Type</th>
              </tr>
            </thead>
            <tbody>
              {currentSocieties.map((society, index) => (
                <tr key={society._id}>
                  <td>{index + 1}</td>
                  <td>{society["Name of Society"]}</td>
                  <td>{society.Address}</td>
                  <td>{society.State}</td>
                  <td>{society.District}</td>
                  <td>
                    {new Date(
                      society["Date of Registration"]
                    ).toLocaleDateString("en-GB")}
                  </td>

                  <td>{society["Area of Operation"]}</td>
                  <td>{society["Sector Type"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <nav>
        <ul className="pagination pagination-lg justify-content-center">
          {pageNumbers.map((pageNumber) => (
            <li className="page-item" key={pageNumber}>
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SocietyList;
