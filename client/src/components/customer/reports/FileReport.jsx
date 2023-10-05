import React from 'react'
import FileDownloadButton from '../../FileDownloadButton';
var path = require('path');

const FileReport = ({client}) => {

	const first_name = client.first_name.replace(' ', '_')
    const last_name = client.last_name.replace(' ',  '_')
	const fileUrl = `http://localhost:8080${path.sep}${first_name}_${last_name}/`


  return (
    <div className=" w-100">
        <h4 className="card-title">Documents</h4>
    <div className="card text-white bg-secondary m-2 p-2 text-center">
    <div class=" d-flex justify-content-center">

		<ul class="list-group mt-5 text-white">
		  <li class="list-group-item d-flex justify-content-between align-content-center">
		  	<div class="d-flex flex-row">
		  		<img src="https://img.icons8.com/color/100/000000/file.png" width="50" />
		  		<div class="ml-2">
		  			<h6 class="mb-0">Passport</h6>
		  			<div class="about">
                     
					  <FileDownloadButton fileName={client.passport} fileUrl={fileUrl} />
		  			</div>
		  		</div>
		  	</div>
		  </li>
		  <li class="list-group-item d-flex justify-content-between align-content-center">
		  	<div class="d-flex flex-row">
		  		<img src="https://img.icons8.com/color/100/000000/file.png" width="50" />
		  		<div class="ml-2">
		  			<h6 class="mb-0">Birth certificate </h6>
		  			<div class="about">
                      
						 <FileDownloadButton fileName={client.birth_certificate} fileUrl={fileUrl} />

		  			</div>
		  		</div>
		  	</div>
		  </li>
		  
		  <li class="list-group-item d-flex justify-content-between align-content-center">
		  	<div class="d-flex flex-row">
		  		<img src="https://img.icons8.com/color/100/000000/file.png" width="50" />
		  		<div class="ml-2">
		  			<h6 class="mb-0">Resume</h6>
		  			<div class="about">
                     
						 <FileDownloadButton fileName={client.resume} fileUrl={fileUrl} />

		  			</div>
		  		</div>
		  	</div>
		  

		  </li>

		  <li class="list-group-item d-flex justify-content-between align-content-center">

		  	<div class="d-flex flex-row">
		  		<img src="https://img.icons8.com/color/100/000000/file.png" width="50" />
		  		<div class="ml-2">
		  			<h6 class="mb-0">WES Report</h6>
		  			<div class="about">
	
						<FileDownloadButton fileName={client.wes_report} fileUrl={fileUrl} />

		  			</div>
		  		</div>
		  	</div>
		  

		  </li>

          <li class="list-group-item d-flex justify-content-between align-content-center">
		  	<div class="d-flex flex-row">
		  		<img src="https://img.icons8.com/color/100/000000/file.png" width="50" />
		  		<div class="ml-2">
		  			<h6 class="mb-0">Marriage certificate </h6>
		  			<div class="about">
                    
						<FileDownloadButton fileName={client.marriage_certificate} fileUrl={fileUrl} />

		  			</div>
		  		</div>
		  	</div>
		  

		  </li>

		  <li class="list-group-item d-flex justify-content-between align-content-center">

		  	<div class="d-flex flex-row">
		  		<img src="https://img.icons8.com/color/100/000000/file.png" width="50" />
		  		<div class="ml-2">
		  			<h6 class="mb-0">Photo</h6>
		  			<div class="about">
                      
						<FileDownloadButton fileName={client.profile_image} fileUrl={fileUrl} />

		  			</div>
		  		</div>
		  	</div>
		  

		  </li>


		  
		  
		</ul>
		
    </div>
        
    </div>
</div>
  )
}

export default FileReport