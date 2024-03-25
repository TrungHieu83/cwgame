import React, { useState } from 'react'

const Filter = () => {
    return (
        <div className="filter-wrapper row g-2">
            <DropdownBrand />
            <DropdownSort />
        </div>
    )
}

const DropdownSort = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            className="col-lg-6 d-flex justify-content-between justify-content-md-end flex-column-reverse flex-sm-row">
            <SearchInput/>
            <div className="dropdown dropdown-large filter-dropdown-item ms-sm-3">
                <button className="d-flex justify-content-between align-items-center" onClick={() => setOpen(!open)}>
                    <span className="label-current">Price low to high</span>
                    <img src="/icons/arrow-down.png" alt="" loading="lazy" className="ms-2" />
                </button>
                <ul className="dropdown-menu" style={{display: `${open ? 'block' : 'none'}`}}>
                    <li className="dropdown-item">
                        <input type="radio" id="sort-1" name="sort" value="1" />
                        <label htmlFor="sort-1">Best selling</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="sort-2" name="sort" value="2" />
                        <label htmlFor="sort-2">Price high to low</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="sort-3" name="sort" value="3" />
                        <label htmlFor="sort-3">Price low to high</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="sort-4" name="sort" value="4" />
                        <label htmlFor="sort-4">Oldest</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="sort-5" name="sort" value="5" />
                        <label htmlFor="sort-5">Latest</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const SearchInput = () => {
    return (
        <div className="position-relative search-name d-sm-inline-block mt-2 mt-sm-0">
            <img src="../assets/icons/search.png" alt="" className="icon-search position-absolute"
                loading="lazy" />
            <input type="text" name="search_name" placeholder="Search by name" />
        </div>
    )
}

const DropdownBrand = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            className="col-lg-6 d-flex justify-content-between justify-content-sm-start flex-column-reverse flex-sm-row">
            <div className="dropdown dropdown-medium filter-dropdown-item">
                <button className="d-flex justify-content-between align-items-center" onClick={() => setOpen(!open)}>
                    <span className="label-current">All</span>
                    <img src="/icons/arrow-down.png" alt="" loading="lazy" className="ms-2" />
                </button>
                <ul className="dropdown-menu" style={{ display: `${open ? 'block' : 'none'}` }}>
                    <li className="dropdown-item">
                        <input type="radio" id="filter-1" name="filter" value="1" />
                        <label htmlFor="filter-1">All</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="filter-2" name="filter" value="2" />
                        <label htmlFor="filter-2">GIMI COCKPIT</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="filter-3" name="filter" value="3" />
                        <label htmlFor="filter-3">CLUVENS</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="filter-4" name="filter" value="4" />
                        <label htmlFor="filter-4">GRAVASTAR</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="filter-5" name="filter" value="5" />
                        <label htmlFor="filter-5">LOUISA</label>
                    </li>
                    <li className="dropdown-item">
                        <input type="radio" id="filter-6" name="filter" value="6" />
                        <label htmlFor="filter-6">DREAM</label>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Filter;