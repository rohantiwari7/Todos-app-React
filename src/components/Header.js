import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => {
    // const navstyle={"backgroundColor": "rgb(205, 156, 97)"};


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                    </ul>
                </div>
                {props.searchBar? <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> : ""}
            </div>
        </nav>
    )
}

Header.defaultProps={
    title:"your title here"
}

Header.propTypes={
    title:PropTypes.string.isRequired
}
