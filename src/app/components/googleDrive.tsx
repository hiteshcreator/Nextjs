"use client"
import React, { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'

const googleDrive = () => {

    const [openPicker, authResponse] = useDrivePicker();  

    const ClientKey:any =  process?.env?.NEXT_PUBLIC_CLIENT_KEY;
    const APIKey:any =  process?.env?.NEXT_PUBLIC_API_KEY;
    // const customViewsArray = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
        openPicker({
        clientId:ClientKey,
        developerKey: APIKey,
        viewId: "DOCS",
        // token: token, // pass oauth token in case you already have one
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

  return (
    <div>
        <button onClick={() => handleOpenPicker()}>Google Drive</button>
    </div>
  )
}

export default googleDrive