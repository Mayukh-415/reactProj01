import employees from "./employees.json"; 
import admin from "./admin.json";

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employeesData = JSON.parse(localStorage.getItem('employees'))
    const adminData = JSON.parse(localStorage.getItem('admin'))
}