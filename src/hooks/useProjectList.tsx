import { useState, useEffect } from "react"

interface Project {
    id: number,
    title: string,
    desc: string,
    link?: string
}

interface Projects {
    data: Project[]
}


const useProjectList = ():Projects => {
    const [projects, setProjects] = useState({data: [{id: 0, title: "", desc: "", link: ""}]});
    
    useEffect(() => {
        fetch("./data/projects.json")
        .then(data => data.json())
        .then(response => { 
            setProjects(response)
        })
        .catch((err) => console.log(err))
    })

    return projects
    
}

export default useProjectList