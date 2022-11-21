import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import React from 'react'
import './Editor.scss'

const API_URL = 'https://noteyard-backend.herokuapp.com'
const UPLOAD_ENDPOINT = 'api/blogs/uploadImg'

const Editor = () => {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData()
          loader.file.then((file) => {
            body.append('uploadImg', file)
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: 'post',
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URL}/${res.url}`,
                })
              })
              .catch((err) => {
                reject(err)
              })
          })
        })
      },
    }
  }

  return (
    <div className="container_all">
      <div className="ck_body">
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // Connect the upload adapter using code below
            editor.plugins.get('FileRepository').createUploadAdapter =
              function (loader) {
                return new uploadAdapter(loader)
              }
            console.log('Editor is ready to use!', editor)
          }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor)
          }}
          onChange={(event, editor) => {
            const data = editor.getData()
            console.log({ event, editor, data })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor)
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor)
          }}
        />
      </div>
    </div>
  )
}

export default Editor
