import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {THomeRequest} from './types';

export const api = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api/'}),
  endpoints: build => ({
    getApi: build.query<THomeRequest, THomeRequest>({
      query: () => 'character',
    }),
  }),
});

export const {useGetApiQuery} = api;
