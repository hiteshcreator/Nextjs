"use client"
import React, { useEffect,useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'

const googleDrive = () => {

    const [authTocken, setauthTocken] = useState("");
    const [openPicker, authResponse] = useDrivePicker();  

    const ClientKey:any =  process?.env?.NEXT_PUBLIC_CLIENT_KEY;
    const APIKey:any =  process?.env?.NEXT_PUBLIC_API_KEY;
    const Token:any = process?.env?.NEXT_PUBLIC_TOKEN || "";
    // const customViewsArray = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
        openPicker({
        clientId:ClientKey,
        developerKey: APIKey,
        viewId: "DOCS",
        token: Token, // pass oauth token in case you already have one
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        // customViews: customViewsArray, // custom view
        callbackFunction: (data) => {
            if (data.action === 'cancel') {
            console.log('User clicked cancel/close button')
            }
            console.log(data)
        },
        })
    }

    useEffect(() => {
        if (authResponse) {
          setauthTocken(authResponse.access_token);
          console.log("token--",authResponse.access_token)
        }
      }, [authResponse]);

  return (
    <div>
        <button onClick={() => handleOpenPicker()} className='text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700 mt-9'>Google Drive</button>
    </div>
  )
}

export default googleDrive