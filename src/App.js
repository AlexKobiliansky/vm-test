import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import DetailRow from './components/DetailRow/DetailRow';
import ModeSelector from './components/ModeSelector/ModeSelector';
import ReactPaginate from 'react-paginate';
import SearchLabel from './components/SearchLabel/SearchLabel';

const spliceArray = (arr, size) => {
  let arrClone = [...arr];
  let res = [];

  while (arrClone.length > 0) {
    res.push(arrClone.splice(0, size))
  }

  return res;
}

function App() {
  const [isModeSelected, setIsModeSelected] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(false);
  const [displayData, setDisplayData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortField, setSortField] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchLine, setSearchLine] = useState('');

  const pageSize = 50;

  const getFilteredData = () => {
    if (!searchLine) return data;

    return data.filter(item => (
      item.firstName.toLowerCase().includes(searchLine.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchLine.toLowerCase()) ||
      item.email.toLowerCase().includes(searchLine.toLowerCase())
    ));
  }

  useEffect(() => {
    if (data) {
      const filteredData = getFilteredData();
      setDisplayData(spliceArray(filteredData, pageSize)[currentPage]);
      setFilteredData(filteredData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, data, searchLine]);

  const handleSort = param => {
    const cloneData = [...data];
    const sortOn = sortOrder === 'asc' ? 'desc' : 'asc';

    const orderedData = cloneData.sort((a ,b) => {
      if (sortOrder === 'asc') {
        return a[param] < b[param] ? 1 : -1
      } else {
        return a[param] > b[param] ? 1 : -1
      }
    });

    setData(orderedData);
    setSortOrder(sortOn);
    setSortField(param);
  }

  const handleSearch = string => {
    setCurrentPage(0);
    setSearchLine(string);
  }

  const handleSelectRow = (row) => {
    setSelectedRow(row);
  }

  const handleSelectMode = async (url) => {
    setIsModeSelected(true);
    setIsloading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsloading(false);
    spliceArray(data, pageSize);
  }

  const handleChangePage = ({selected}) => {
    setCurrentPage(selected)
  }

  if (!isModeSelected) {
    return (
      <div className="container">
        <ModeSelector onSelectMode={handleSelectMode}/>
      </div>
    )
  }

  return (
    <div className="container">
      {
        isLoading
          ? <Loader/>
          : <>
            <SearchLabel onSearch={handleSearch}/>
            <Table
              data={displayData}
              onSort={handleSort}
              sortOrder={sortOrder}
              sortField={sortField}
              onRowSelect={handleSelectRow}
              selectedRow={selectedRow}
            />
          </>
      }

      {
        (data?.length > pageSize) && <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredData?.length/pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleChangePage}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        breakClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        forcePage={currentPage}
      />
      }

      {selectedRow && <DetailRow item={selectedRow}/>}
    </div>
  );
}

export default App;