
const baseUrl = "http://api.sareenv.com/api/v1"
const downloadProject = () => {
    const url = `${baseUrl}/projects`
    const data = fetch(url).then(data => data.json())
    return data
}

export {downloadProject}