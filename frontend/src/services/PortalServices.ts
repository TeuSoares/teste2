import { IDuplicatas } from '@/interfaces/duplicatas';

import { useFetch } from './hooks/useFetch';

import useSWR, { SWRConfiguration } from 'swr';

const swrOptions: SWRConfiguration = {
  revalidateOnFocus: false,
  errorRetryCount: 3,
  errorRetryInterval: 3000,
  revalidateIfStale: true,
  revalidateOnReconnect: true
};

export default function PortalServices() {
  const { fetch } = useFetch();

  const { data, isLoading, error, mutate } = useSWR(
    'dashboard',
    async (url) => {
      return await fetch('GET', url);
    },
    swrOptions
  );

  const handleFilterDuplicates = async (dataForm: object) => {
    try {
      const data: IDuplicatas[] = await fetch(
        'POST',
        'filterDuplicates',
        dataForm
      );

      mutate(data, false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchDuplicate = async (dataForm: object) => {
    try {
      const data: IDuplicatas[] = await fetch(
        'POST',
        'searchDuplicate',
        dataForm
      );

      mutate(data, false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    isLoading,
    error,
    handleFilterDuplicates,
    handleSearchDuplicate
  };
}
