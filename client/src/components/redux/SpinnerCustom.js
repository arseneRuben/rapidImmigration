import  React from "react"
import {Spinner } from "react-bootstrap"


const SpinnerCustom = () => {
  return (
    <div className=" d-flex justify-content-center ">
       <Spinner animation="grow" variant="primary" />
    </div>
  )
}

export default SpinnerCustom