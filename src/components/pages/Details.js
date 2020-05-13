import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {data => {
          const {
            img,
            title,
            description
          } = data.detailInfo;

          return (
            <React.Fragment>

              <div className="container">
                <ul className="nav nav-tabs">
                  {/* About Place Link */}
                  <li className="nav-item">
                    <a
                      href="#aboutPlace"
                      className="nav-link active"
                      role="tab"
                      data-toggle="tab"
                    >
                      About Pizza
                    </a>
                  </li>
                  {/* Reviews Link */}
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>

                </ul>
                {/* Tab Pane */}
                <div className="tab-content mb-5">
                  {/* About Place Tab */}
                  <div
                    id="aboutPlace"
                    className="tab-pane in active text-center mt-5"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                    <button>Add to Cart</button>
                  </div>

                  {/* Reviews */}
                  <div className="tab-pane" id="reviews" role="tabpanel">
                    <Reviews />
                  </div>

                </div>
              </div>

            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
