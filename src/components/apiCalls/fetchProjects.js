export default function FetchProjects({
    setProjects

}) {
    return fetch('http://localhost:4000/graphql', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query:
          `query {
            projects {
                id
                name
                url
                description
                features
                classification
                stage
                start
                end
                projectTools {
                    id
                    tool {
                        id
                        name
                        url
                    }
                }
            }
        }`,
    }),
}, [])
.then((response) => {
    if (response.ok) {
      const data = response.json()
      return data
    } else {
      console.log("Error occured during fetch request.")
      throw response
    }
  })
  .then((data) => {
    var data1 = data["data"] 
    console.log("Projects Data", data1)
    var projectsData = data1["projects"]
    setProjects(projectsData)
    return projectsData
  })
}