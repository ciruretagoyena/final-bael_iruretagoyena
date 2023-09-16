import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../Components/utils/global.context';

const Detail = () => {
  const { state, dispatch } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const urlDentist = `https://jsonplaceholder.typicode.com/users/` + id;
  const findFav = state.favs.find((pj) => pj.id === state.dentist.id);

  useEffect(() => {
    axios(urlDentist)
      .then((res) => {
        console.log(res);
        dispatch({ type: 'GET_DENTIST', payload: res.data });
      });
  }, [urlDentist, dispatch]);

  const addFav = () => {
    if (!findFav) {
      dispatch({ type: 'ADD_FAVS', payload: state.dentist });
    } else {
      const filteredFavs = state.favs.filter(pj => pj.id !== state.dentist.id);
      dispatch({ type: 'DELETE_FAV', payload: filteredFavs });
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    color: state.theme === 'dark' ? '#FFFF00' : '#000000',
  };

  const tableStyle = {
    minWidth: '650px',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const tableHeaderCellStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  };

  const tableRowCellStyle = {
    borderBottom: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  };

  return (
    <>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Dentist Detail {id}</h2>
        <button onClick={addFav} style={buttonStyle}>
          {findFav ? '🌟' : '⭐'}
        </button>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderCellStyle}>Name</th>
              <th style={tableHeaderCellStyle}>Email</th>
              <th style={tableHeaderCellStyle}>Phone</th>
              <th style={tableHeaderCellStyle}>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableRowCellStyle}>{state.dentist?.username}</td>
              <td style={tableRowCellStyle}>{state.dentist?.email}</td>
              <td style={tableRowCellStyle}>{state.dentist?.phone}</td>
              <td style={tableRowCellStyle}>{state.dentist?.website}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </>
  );
};

export default Detail;
