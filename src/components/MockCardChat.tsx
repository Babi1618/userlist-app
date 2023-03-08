import React from 'react'
export const MockCardChat = ({ gridColumns }: any) => {
  return (
    <div
      className="card-container card-mock"
      style={{ gridColumn: gridColumns, width: "200px" }}
    >
      <div className="card-content card-content-mock">
        <div className="card-photo-button">
          <div className="card-photo card-photo-mock">
            <div className="photo-container card-photo-mock" id="photo-mock-1">
              <img
                className="photo photo-mock"
                src={`https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332__480.jpg`}
              />
            </div>
            <div className="photo-container card-photo-mock" id="photo-mock-2">
              <img
                className="photo photo-mock"
                src={`https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_1280.jpg`}
              />
            </div>
            <div className="photo-container card-photo-mock" id="photo-mock-3">
              <img
                className="photo photo-mock"
                src={`https://cdn.pixabay.com/photo/2017/04/06/19/34/girl-2209147__480.jpg`}
              />
            </div>
          </div>
        </div>
        <div className="card-user-data ">
          <div>Design Chat</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
