import React from 'react'

const Individual = () => {
  return (
    <div className="cont container-fluid center">
    <div  className="row">
      <div className="col s3 m4">
        <div className="card">
          <div className="card-image">
            {/* <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img> */}
          </div>
          <div className="card-content">
            <span className="card-title">
              <h5>Wajir health organized Group</h5>
            </span>
            <p className="truncate">
              I am a very simple card. I am good at containing small bits of information. I am convenient because I
              require little markup to use effectively.
            </p>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light blue darken-4">See More</button>
          </div>
        </div>
      </div>
      <div className="col s3 m4">
        <div className="card">
          <div className="card-image">
            <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
          </div>
          <div className="card-content">
            <span className="card-title">
              <h5>Wajir health organized Group</h5>
            </span>
            {/* <p className="truncate">
              I am a very simple card. I am good at containing small bits of information. I am convenient because I
              require little markup to use effectively.
            </p> */}
          </div>
          <div className="card-action">
            {/* <button className="btn waves-effect waves-light blue darken-4">See More</button> */}
          </div>
        </div>
      </div>
      <div className="col s3 m4">
        <div className="card">
          <div className="card-image">
            {/* <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img> */}
          </div>
          <div className="card-content">
            <span className="card-title">
              <h5>Proposed by Wajir Co-Group Members</h5>
            <h5 className="truncate">
              Financial Assistance required for <br/>KES 1.3 Million
            </h5>
            </span>
            <p>project members - 50</p>
            <p className="truncate">
              I am a very simple card. I am good at containing small bits of information. I am convenient because I
              require little markup to use effectively.
            </p>
          </div>
          <div className="card-action">
            {/* <button className="btn waves-effect waves-light blue darken-4">See More</button> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Individual