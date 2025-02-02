import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({ path }: { path: string }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(path);
  }, [path, router]);

  return <></>;
};

export { Redirect };
