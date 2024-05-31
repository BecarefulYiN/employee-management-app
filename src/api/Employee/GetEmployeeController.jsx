
const Get_Employee = async (setdata) => {
    await axios
        .get("https://localhost:7130/api/employee")
        .then((res) => {
            console.log(res.status + "." + res.data)
        })
        .catch((err) => {
            console.error(err)
        });
}

export default Get_Employee;