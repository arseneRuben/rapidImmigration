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
    <div className="">
        
        <div className="d-flex flex-column justify-content-start w-100">
            <div>Passport :    <button value={client.passport} onClick={onButtonClick}>
            {client.passport}</button></div>
            <div>Birth certificate :    <button value={client.birth_certificate} onClick={onButtonClick}>
            {client.birth_certificate}</button></div>
            <div>Resume :    <button value={client.resume} onClick={onButtonClick}>
            {client.resume}</button></div>
            <div>WES Report :    <button value={client.wes_report} onClick={onButtonClick}>
            {client.wes_report}</button></div>
            <div>Marriage certificate :    <button value={client.marriage_certificate} onClick={onButtonClick}>
            {client.marriage_certificate}</button></div>
            <div>Others:    <button value={client.other_documents} onClick={onButtonClick}>
            {client.other_documents}</button></div>
            <div>Photo :    <button value={client.profile_image} onClick={onButtonClick}>
            {client.profile_image}</button></div>
        </div>
        
    </div>
</div>
  )
}

export default FileReport