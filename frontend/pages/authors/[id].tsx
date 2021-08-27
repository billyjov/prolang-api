import { useRouter } from 'next/router';

import { withPrivateLayout } from '@components/hof/with-private-layout';
import { Loader } from '@components/common/loader';
import { UpdateAuthor } from '@components/authors/update-author';
import { ResourceNotFound } from '@components/common/resource-not-found';
import { useRetrieveAuthor } from '@hooks/request/query/useRetrieveAuthor';

const UpdateAuthorDataLoader = () => {
  const { query } = useRouter();

  const { data, isLoading } = useRetrieveAuthor(query.id as string, { enabled: Boolean(query.id) });

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && data) {
    return <UpdateAuthor author={data} />;
  }

  return <ResourceNotFound name="Author" />;
};

export default withPrivateLayout(UpdateAuthorDataLoader);