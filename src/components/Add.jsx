import React, { useState,useEffect, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Newproject from '../assets/Newproject.png'
import { addProjectAPI } from '../services/allAPI'
import { addResponseContext } from '../contexts/ContextShare'

const Add = () => {
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [imgFileStatus,setImgFileStatus] = useState(false)
  const [preview,setPreview] = useState(Newproject)
  const [projectData,setProjectData] = useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImg:""
  })
  console.log(projectData);

  
  const [show, setShow] = useState(false);

  useEffect(()=>{
    if (projectData.projectImg.type=="image/png" || projectData.projectImg.type=="image/jpg" || projectData.projectImg.type=="image/jpeg") {
      setImgFileStatus(true)
      setPreview(URL.createObjectURL(projectData.projectImg))
    }else{
      setImgFileStatus(false)
      setPreview(Newproject)
      setProjectData({...projectData,projectImg:""})
    }
  },[projectData.projectImg])

  const handleClose = () => {
    setShow(false);
    setProjectData({title:"",languages:"",overview:"",github:"",website:"",projectImg:""})
  }
  const handleShow = () => setShow(true);

const handleSaveProject = async ()=>{
  const {title,languages,overview,github,website,projectImg} = projectData
  if(title && languages && overview && github && website && projectImg){
    // api call - post request
    // reqbody must be in formData since data contains files
    const reqBody = new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("overview",overview)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("projectImg",projectImg)

    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type" : "multipart/form-data",
        "Authorization" : `Bearer ${token}`
      }
      // api call - post request
      try {
        const result = await addProjectAPI(reqBody,reqHeader)
        console.log(result);
        if (result.status==200) {
          handleClose()
          // alert("Project Added successfully")
          // share result via context
          setAddResponse(result)
        }else{
          alert(result.response.data)
        }
        
      } catch (err) {
        console.log(err);
        
      }
    }
  }else{
    alert("Please fill the form completely!!!")
  }
}

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary"><i className="fa-solid fa-plus"></i> New Project</button>
      <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input onChange={e=>setProjectData({...projectData,projectImg:e.target.files[0]})} type="file" style={{display:'none'}}/>
                <img width={'250px'} height={'250px'} src={preview} alt="" />
              </label>
              { !imgFileStatus && <div className="text-warning fw-bolder my-2">"Upload Only the following file types (jpeg,jpg,png) here!!"</div>}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})} placeholder='Project Title' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})} placeholder='Language used in Project' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})} placeholder='Project Overview' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})} placeholder='Project GITHUB LINK' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})} placeholder='Project Website Link' type="text" className="form-control" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add