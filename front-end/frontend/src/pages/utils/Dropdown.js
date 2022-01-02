import React from 'react'
import {Link} from 'react-router-dom';
function Dropdown() {
    return (
        <li class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
          Choose
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link class="dropdown-item" to="teachers">Teachers</Link>
          <Link class="dropdown-item" to="students">Students</Link>
          <Link class="dropdown-item" to="modules">Modules</Link>
        </div>
      </li>
    )
}

export default Dropdown
