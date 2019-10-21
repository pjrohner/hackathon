// const express = require('express');
import express from 'express';
import request from 'request';
import axios from 'axios';

// const DatasetService = require('../../service/DatasetService');

//
// Router implementation.
const router = express.Router();

const F1_URL = 'http://ergast.com/api/f1';

// Routing ..
router.get('/', (req, res) => {
  console.log('season root router>');
  console.log('season root router>req.query=', req.query);
  //
  // Get season year.
  const seasonYear = req.query.seasonYear;
  console.log('season root router>seasonYear=', seasonYear);
  if (!seasonYear) {
    return res.status(404).json({ error: 'Not authorized!' });
  }
  //
  // Load result configuration.
  const limit = req.query.limit ? req.query.limit : 31;
  const offset = req.query.offset ? req.query.offset : 1;
  //
  // Get request options.
  const options = {
    url: `${F1_URL}/${seasonYear}.json`,
    // method: 'GET',
    form: { qs: { limit, offset } },
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-expressi-server'
    }
  };
  console.log('season root router>options=', options);
  // request(`${F1_URL}/${seasonYear}.json`, { qs: { limit, offset } }, function(error, response, body) {
  request(options, (error, response, body) => {
    // console.log(body);
    if (response.statusCode === 200) {
      const data = JSON.parse(body);
      return res.json(data.MRData);
    } else {
      console.log('season root router>error=', error);
    }
  });
});

/**
 * Add the F1 server configuration parameters to the query URL.
 * @param {request query paramaters: Object} queryParams 
 */
function addConfigParams(queryParams) {
  let queryParamString = '?';
  const limit = queryParams.limit ? queryParams.limit : 31;
  const offset = queryParams.offset ? queryParams.offset : 0;
  queryParamString += `limit=${limit}`;
  queryParamString += `&offset=${offset}`;
  return queryParamString;
}

router.get('/axios', (req, res) => {
  console.log('season/axios>');
  let seasonAxiosUri = F1_URL;
  // return res.status(200).json({ ok: 'ok' });
  //
  // Get season year.
  const seasonYear = req.query.seasonYear;
  console.log('season root router>seasonYear=', seasonYear);
  if (!seasonYear) {
    return res.status(404).json({ error: 'Not authorized!' });
  }
  seasonAxiosUri += `/${seasonYear}.json`;
  //
  // Load result configuration.
  // const limit = req.query.limit ? req.query.limit : 31;
  // const offset = req.query.offset ? req.query.offset : 0;
  // seasonAxiosUri += `?limit=${limit}`;
  // seasonAxiosUri += `&offset=${offset}`;
  seasonAxiosUri += addConfigParams(req.query);
  //
  // Make a request for a season.
  console.log('season/axios>seasonAxiosUri=', seasonAxiosUri);
  axios
    .get(seasonAxiosUri)
    // .get(`${F1_URL}/${seasonYear}.json`)
    .then(function(response) {
      // handle success
      if (response.status === 200) {
        const data = response.data.MRData;
        console.log('season/axios>response.status=', response.status);
        return res.status(200).json(data);
      } else {
        console.error('season/axios>response.status=', response.status);
      }
    })
    .catch(function(error) {
      // handle error
      console.error('season/axios>error=', error);
      return res.status(error.response.status).statusMessage(error.response.statusMessage);
    })
    .finally(function() {
      console.log('season/axios<');
      // always executed
    });
});

export default router;
