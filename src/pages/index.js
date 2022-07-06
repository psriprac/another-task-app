import * as React from "react"

import { Link, graphql } from "gatsby"

const IndexPage = (props) => {
  const tasks = props.data.allMongodbTaskAppTasks.edges;

  return (
    <main>
      <h1 className="text-3xl font-bold underline">List of tasks:</h1>
      <div className="tasks-container">
        {tasks.map(task => 
          <div className="task">
            <Link to={'/task/' + task.node.id}>
              <h2 className="text-2xl font-medium">{task.node.task_name}</h2>
            </Link>
          </div>)}
      </div>
    </main>
  )
}

export default IndexPage

export const getAllTasks = graphql`
  query {
    allMongodbTaskAppTasks {
      edges {
        node {
          id
          task_name
        }
      }
    }
  }
`
