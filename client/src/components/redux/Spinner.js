import {useState, React,CSSProperties} from "react"
import ClipLoader from "react-spinners/Cliploader"



const Spinner = () => {
  return (
    <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  )
}

export default Spinner