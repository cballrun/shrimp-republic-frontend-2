export default function FetchMembers({
    setMembers
}) {
    return fetch('http://localhost:4000/graphql', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query:
          `query {
            members {
                name
                location
                description
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
    var membersData = data1["members"]
    setMembers(membersData)
    return membersData
  })
}