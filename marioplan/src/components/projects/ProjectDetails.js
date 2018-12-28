import React from 'react'

const ProjectDetails=(props)=> {
    const id = props.match.params.id;
  return (
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title - {id}</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos, error illum quo quis labore velit magnam nemo suscipit unde explicabo rem qui at asperiores iste dolorem perferendis molestias neque?</p>
                  <div className="card-action grey lighten-4 grey-text">
                      <div>Posted by Chickenfuut92</div>
                      <div>12/27/2018</div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ProjectDetails

