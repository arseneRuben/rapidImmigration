import React from 'react'

const FileReport = ({client}) => {
    const onButtonClick = (event) => {
        // using Java Script method to get PDF file
        const fileName=`../../../../uploads/${client.first_name} ${client.last_name}/${event.target.value}`;
        fetch(fileName).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href =  fileURL;
                alink.download = fileName;
                alink.click();
            })
        }) 
    }

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
                      <button value={client.passport} onClick={onButtonClick}>
                        {client.passport}</button>
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
                      <button value={client.birth_certificate} onClick={onButtonClick}>
                         {client.birth_certificate}</button>
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
                      <button value={client.resume} onClick={onButtonClick}>
                     {client.resume}</button>
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
                      <button value={client.wes_report} onClick={onButtonClick}>
            {client.wes_report}</button>
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
                      <button value={client.marriage_certificate} onClick={onButtonClick}>
            {client.marriage_certificate}</button>
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
                      <button value={client.profile_image} onClick={onButtonClick}>
            {client.profile_image}</button>
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