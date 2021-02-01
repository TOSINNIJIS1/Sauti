import React, { useState } from 'react'
// import { FilePond, File, registerPlugin, setOptions } from 'react-filepond'
// import 'filepond/dist/filepond.min.css'
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import FilePondPluginImageResize from 'filepond-plugin-image-resize'
// import FilePondPluginFilEncode from 'filepond-plugin-file-encode'


// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginFilEncode)
// setOptions({
    
// })


function ProductFile() {
    const [bang, useBang] = useState({
        name: 'bang',
        age: 'bigbang'
    })

    const onName = (e) => {

    }


    return (
        <div>
            <form action='/' method='POST' encType='multipart/form-data'>
                <input type='file' name='avatar' />
                <button onClick={onName}>Submit</button>
            </form>
        </div>
    )
}

export default ProductFile
