import produce from 'immer';
import React from 'react';
export const getDistricts = (data) => {
  let districts = {};

  Object.keys(data).map((stateCode) => {
    Object.keys(data[stateCode]?.districts || {}).map((districtName) => {
      districts = produce(districts || {}, (draftDistricts) => {
        const districtKey = `${districtName}-${stateCode}`;
        draftDistricts[districtKey] = data[stateCode].districts[districtName];
        draftDistricts[districtKey].districtName = districtName;
        draftDistricts[districtKey].stateCode = stateCode;
      });
      return null;
    });
    return null;
  });

  postMessage(districts);
};
