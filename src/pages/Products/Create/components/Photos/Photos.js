import React, { useState } from 'react';
import { useFormikContext } from "formik";
import Dropzone from "react-dropzone";
import {withFirebase} from "react-redux-firebase";
import {compose} from "redux";

const Photos = ({ firebase, auth, businessId }) => {

  const [uploading, setUploading] = useState(false);
  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      <div className="container">
        <p className="subtitle text-primary">Add new listing</p>
        <h1 className="h2 mb-5"> Photos <span className="text-muted float-right">Step 4</span></h1>
        <div className="row form-block">
          <div className="col-lg-4">
            <h4>Photos</h4>
            <p className="text-muted text-sm">His room, a proper human room although a little too small, lay
              peacefully between its four familiar walls. A collection of textile samples lay spread out on the
              table.</p>
          </div>
          <div className="col-lg-7 ml-auto">
            <div className="form-group">
              <Dropzone
                accept={['image/jpeg', 'image/png', 'image/gif']}
                onDrop={(acceptedFiles) => {
                  setUploading(true);
                  const filePath = Date.now().toString();
                  firebase.uploadFiles(`${businessId}/${filePath}`, acceptedFiles).then((files) => {
                    Promise.all(
                      files.map((file) => (
                        file.uploadTaskSnapshot.ref.getDownloadURL()
                          .then((downloadURL) => {
                            setFieldValue('photos', values.photos.concat(downloadURL));
                          }).then(() => setUploading(false))
                      ))
                    ).then(() => {
                        setUploading(false);
                        setFieldValue('filePath', filePath);
                    });
                  });
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div className="container">
                    <div {...getRootProps()} className="dropzone">
                      <input {...getInputProps()} />
                      <div className="dz-message">
                        {(() => {
                          if (uploading) return <p className="text-muted">Uploading...</p>;

                          switch (values.photos.length) {
                            case 0:
                              return <p className="text-muted">Click here to select and upload 1-6 photos of your listing.</p>;
                            case 1:
                              return <p className="text-muted">1 file uploaded</p>;
                            default:
                              return (
                                <p className="text-muted">
                                  {`${values.photos.length} files uploaded`}
                                </p>
                              );
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                )}
              </Dropzone>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default compose(withFirebase)(Photos);