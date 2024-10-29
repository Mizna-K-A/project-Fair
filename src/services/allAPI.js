import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

// register called by Auth
export const registerAPI = async(reqBody)=>{
    return await commonAPI ("POST",`${SERVERURL}/register`,reqBody)
}

// login called by Auth
export const loginAPI = async(reqBody)=>{
    return await commonAPI ("POST",`${SERVERURL}/login`,reqBody)
}

// addProject API called by Add
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI ("POST",`${SERVERURL}/add-project`,reqBody,reqHeader)
}


// homeProjectsAPI called by Home
export const homeProjectsAPI = async()=>{
    return await commonAPI ("GET",`${SERVERURL}/home-projects`,"")
}

// allProjectsAPI called by Projects
export const allProjectsAPI = async(searchKey,reqHeader)=>{
    return await commonAPI ("GET",`${SERVERURL}/all-projects?search=${searchKey}`,"",reqHeader)
}

// userProjectsAPI called by View
export const userProjectsAPI = async(reqHeader)=>{
    return await commonAPI ("GET",`${SERVERURL}/user-projects`,"",reqHeader)
}

// deleteProjectAPI called by View : http://localhost:3000/pid/remove-projects
export const deleteProjectAPI = async(pId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/${pId}/remove-projects`,{},reqHeader)
}

// editProjectAPI called by Edit : put requset to http://localhost:3000/pid/edit-projects
export const editProjectAPI = async(pId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/${pId}/edit-projects`,reqBody,reqHeader)
}

// editProfileAPI called by Profile : put requset to http://localhost:3000/user/edit
export const editProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user/edit`,reqBody,reqHeader)
}