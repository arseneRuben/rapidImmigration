import React from 'react'

const FileDownloadButton = ({fileName, fileUrl}) => {
     const handleDownload = () => {
        // Create a URL for your file
         fileUrl += fileName; // Change this to your file's URL or path

       
               
                // Setting various property values
                let alink = document.createElement('a');
                alink.href =  fileUrl;
                alink.target = '_blank';
                alink.download = fileName;
                alink.click();
    

      
      /*  // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
      
        // Set the download attribute to specify the file name
        link.download = fileName; // Change this to the desired file name
      
        // Trigger a click event to start the download
        link.click();*/
      };
  return (
    <div>
        <button onClick={handleDownload}>{fileName}</button>
    </div>  
)
}

export default FileDownloadButton